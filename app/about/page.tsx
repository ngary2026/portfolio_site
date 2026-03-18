import Image from 'next/image';
import { Code2, Palette, Mail, Github, Linkedin, Download } from 'lucide-react';
import ContactMenu from '../../components/ContactMenu';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Image Placeholder */}
          <div className="relative aspect-square rounded-2xl bg-neutral-100 overflow-hidden">
            {/* Replace this div with your actual photo later */}
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image 
                src="/NerantiELCHeadshot.jpg"
                alt="Your Name"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Introduction */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Hi, I'm Neranti Gary
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              I'm a Senior Computer Science major who believes the best solutions emerge 
              at the intersection of technical expertiece and creative thinking.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              My work spans machine learning research, full-stack development, 3D development, and traditional 
              art practice. I enjoy staying on the move, consistently stimulated, tackling problems and burning passions
              with vigor. 
              {/* <span className="font-semibold text-neutral-900">How do we create clarity from complexity?</span> */}
            </p>

            {/* Contact Links */}
            <div className="flex flex-wrap gap-3">
              <ContactMenu professionalEmail="garyneranti@gmail.com" schoolEmail="neranti.gary@bison.howard.edu" />
              <a 
                href="https://github.com/ngary2026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-50 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/neranti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-50 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-neutral-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Creative Technologist
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Systems Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Systems</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-4">
                My technical work focuses on building intelligent, scalable systems. 
                I've contributed to research in generative AI and education, developed full-stack 
                applications, and worked on 3D user experiences.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-neutral-500">Current Focus:</p>
                <ul className="space-y-1 text-neutral-600">
                  <li>• Deep Learning & Computer Vision</li>
                  <li>• Full-Stack Web Development</li>
                  <li>• Data Visualization & UI/UX</li>
                  <li>• System Design & Optimization</li>
                </ul>
              </div>
            </div>

            {/* Expression Column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Expression</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-4">
                My studio practice explores visual communication through traditional media. 
                This work informs my approach to interface design, data visualization, 
                and how I think about user experience.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-neutral-500">Creative Practice:</p>
                <ul className="space-y-1 text-neutral-600">
                  <li>• Acrylic Leather & Goache Painting</li>
                  <li>• Charcoal, Graphite & Ink Drawing</li>
                  <li>• Hand Painted Fashion Illustration</li>
                  <li>• Photography, Color Theory & Composition</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-neutral-900 mb-12">
          Background
        </h2>

        <div className="space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">Education</h3>
            <div className="border-l-2 border-neutral-200 pl-6 space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-neutral-900">[Your University]</h4>
                    <p className="text-neutral-600">Bachelor of Science in Computer Science</p>
                  </div>
                  <span className="text-sm text-neutral-500">Expected 2025</span>
                </div>
                <p className="text-sm text-neutral-600">GPA: 3.X/4.0</p>
                <p className="text-sm text-neutral-600 mt-2">
                  Relevant Coursework: Machine Learning, Computer Vision, Data Structures, 
                  Algorithms, Database Systems, Software Engineering
                </p>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">Experience</h3>
            <div className="border-l-2 border-neutral-200 pl-6 space-y-8">
              {/* Add your actual experiences here */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-neutral-900">Research Assistant</h4>
                    <p className="text-neutral-600">[Lab/Professor Name]</p>
                  </div>
                  <span className="text-sm text-neutral-500">2024 - Present</span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Contributing to research in [specific area]. Working with [technologies] 
                  to develop [brief description of work].
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-neutral-900">Software Engineering Intern</h4>
                    <p className="text-neutral-600">[Company Name]</p>
                  </div>
                  <span className="text-sm text-neutral-500">Summer 2024</span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Built [specific project/feature] using [technologies]. 
                  Improved [metric] by [amount/percentage].
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-6">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-neutral-500 mb-3">Languages</p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'SQL'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-neutral-100 text-sm text-neutral-700 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500 mb-3">Frameworks & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'PyTorch', 'TensorFlow', 'PostgreSQL'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-neutral-100 text-sm text-neutral-700 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            I'm actively seeking full-time opportunities for 2026. 
            If you're looking for someone who brings both technical depth and creative thinking, 
            let's connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:your.email@university.edu"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="/resume.pdf"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}