export interface Artwork {
  id: number;
  title: string;
  src: string;
  width: number;
  height: number;
  blurDataURL?: string;
  category: 'paintings' | 'sketches' | 'photography' | 'textiles' | 'graphic design';
  medium: string;
  year: string;
  description?: string;
}

export const artworks: Artwork[] = [
  //paintings
  {
    id: 1,
    title: "Brother Eagle",
    src: "/art/brother-eagle.jpg",
    width: 2400,
    height: 3200,
    category: "paintings",
    medium: "Acrylic Leather Paint",
    year: "2026",
    description: "Inspired by a painting by Thomas Blackshear of the same name",
  },

  //photography
  {
    id: 2,
    title: "Greatfalls Landscape",
    src: "/art/photography/greatfalls-large.webp",
    width: 2400,
    height: 3200,
    category: "photography",
    medium: "Film Photography",
    year: "2024",
    description: "Photographs from a hike",
  },
  {
    id: 3,
    title: "H St Festival",
    src: "/art/photography/hst-dance-large.webp",
    width: 2400,
    height: 3200,
    category: "photography",
    medium: "Film Photography",
    year: "2024",
    description: "Photographs from H St Festival 2024",
  },
  {
    id: 4,
    title: "Senegal Walking",
    src: "/art/photography/senegalwalk-large.webp",
    width: 2400,
    height: 3200,
    category: "photography",
    medium: "Film Photography",
    year: "2024",
    description: "From my travels in Senegal",
  },
  {
    id: 5,
    title: "Senegal Cars",
    src: "/art/photography/senegalcars-large.webp",
    width: 2400,
    height: 3200,
    category: "photography",
    medium: "Film Photography",
    year: "2024",
    description: "From my travels in Senegal",
  },
  {
    id: 6,
    title: "Osaka Castle Moat",
    src: "/art/photography/osakacastlemoat-large.webp",
    width: 2400,
    height: 3200,
    category: "photography",
    medium: "Film Photography",
    year: "2024",
    description: "From my travels in Japan",
  },

  //textiles
  {
    id: 7,
    title: "J Dilla Rug",
    src: "/art/rugs/dillarug-large.webp",
    width: 2400,
    height: 3200,
    category: "textiles",
    medium: "Punch Needle",
    year: "2022"
  },
];