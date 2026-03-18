import sharp from 'sharp';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeArtwork(inputPath, category) {
  try {
    const buffer = await fs.readFile(inputPath);
    const filename = path.basename(inputPath, path.extname(inputPath));
    const outputDir = path.join(__dirname, '../public/art', category);
    
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });
    
    // Generate blur placeholder
    const { base64 } = await getPlaiceholder(buffer);
    
    // Get image dimensions
    const metadata = await sharp(buffer).metadata();
    
    // Create optimized versions
    await sharp(buffer)
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(path.join(outputDir, `${filename}-large.webp`));
    
    await sharp(buffer)
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(outputDir, `${filename}-medium.webp`));
    
    await sharp(buffer)
      .resize(400, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `${filename}-small.webp`));
    
    console.log(`✓ Optimized: ${filename}`);
    
    return {
      filename,
      blurDataURL: base64,
      width: metadata.width,
      height: metadata.height,
    };
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error.message);
    return null;
  }
}

async function processCategory(category) {
  const inputDir = path.join(__dirname, '../public/art', category, 'originals');
  
  try {
    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    
    console.log(`\nProcessing ${imageFiles.length} images in ${category}...`);
    
    const results = [];
    for (const file of imageFiles) {
      const result = await optimizeArtwork(
        path.join(inputDir, file),
        category
      );
      if (result) results.push(result);
    }
    
    // Generate metadata JSON
    const metadataPath = path.join(__dirname, '../data', `${category}-metadata.json`);
    await fs.writeFile(metadataPath, JSON.stringify(results, null, 2));
    console.log(`✓ Metadata saved to ${metadataPath}`);
    
  } catch (error) {
    console.error(`Error processing ${category}:`, error.message);
  }
}

// Process all categories
async function main() {
  const categories = ['drawings', 'misc', 'paintings', 'photography', 'rugs'];
  
  for (const category of categories) {  
    await processCategory(category);
  }
  
  console.log('\n✓ All images optimized!');
}

main();