import Link from 'next/link';
import Image from 'next/image';
import { Code2, Palette, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';

export default function Home() {
  const selectedWorks = [
    {
      id: 'ai-education',
      title: 'AI-Powered Educational Content Generator',
      category: 'Machine Learning Research',
      description: 'Fine-tuned multiple image generation models to create visually engaging educational materials, simplifying complex concepts into intuitive diagrams.',
      image: '/projects/ai-education-hero.jpg',
      tags: ['Python', 'Stable Diffusion', 'DALL-E', 'ML'],
      link: '/work/ai-education',
    },
    {
      id: 'assistive-robotics',
      title: 'Assistive Robotics Interface',
      category: 'Full-Stack Development',
      description: 'Designed and built accessible control systems for mobile manipulators, enabling individuals with motor disabilities to interact with robotics through adaptive controllers.',
      image: '/projects/hello-robot-hero.jpg',
      tags: ['React', 'Python', 'Robotics', 'Accessibility'],
      link: '/work/assistive-robotics',
    },
    {
      id: 'ar-construction',
      title: 'Immersive AR for Construction',
      category: 'AR/VR Development',
      description: 'Built real-time architectural visualization tools using Unreal Engine, allowing clients to experience and modify designs through AR with live cost updates.',
      image: '/work/skanska/scratchpad-ss.png',
      tags: ['Unreal Engine', 'AutoCAD', '3ds Max', 'AR/VR'],
      link: '/work/ar-construction',
    },
  ];

  const experiences = [
    {
      role: "Undergraduate Research Assistant",
      company: "Howard University",
      location: "Washington, DC",
      period: "Aug 2024 - May 2025",
      highlights: [
        "Fine-tuned 7 image generation models across varying artistic styles to create visually engaging educational content",
        "Proposed a generative model to simplify instructional material into visually intuitive notes and diagrams",
        "Conducted literature review of 10+ research papers and evaluated platforms like Stable Diffusion and DALL-E",
      ],
      tech: ["Python", "Stable Diffusion", "DALL-E", "Machine Learning"],
    },
    {
      role: "Software Development Intern",
      company: "Hello Robot",
      location: "Martinez, CA",
      period: "July 2024 - Aug 2024",
      highlights: [
        "Enhanced web interface using React and Python, enabling keyboard input functionality for robot control",
        "Programmed Xbox Adaptive Controller to assist individuals with motor disabilities in controlling the robot",
        "Contributed code to Hello Robot's open-source GitHub repository for assistive living solutions",
      ],
      tech: ["React", "TypeScript", "Python", "Robotics", "Accessibility"],
    },
    {
      role: "Programming Intern",
      company: "Skanska USA Inc",
      location: "San Francisco, CA",
      period: "June 2023 - Aug 2023",
      highlights: [
        "Created 3D architectural models using Unreal Engine for client engagement with AR/VR technology",
        "Enabled real-time design alterations with cost and material updates through AR goggles",
        "Designed floor plans with AutoCAD and converted them to 3D models using 3ds Max",
      ],
      tech: ["Unreal Engine", "AutoCAD", "BIM", "3ds Max", "AR/VR"],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6">
            Header
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed">
            Senior CS Major building intelligent systems and exploring visual narratives. 
            My technical work is grounded in the same creative thinking that guides my studio practice.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/projects"
              className="group flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors"
            >
              <Code2 className="w-5 h-5" />
              View Technical Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              href="/studio"
              className="group flex items-center gap-2 px-8 py-4 border-2 border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-50 transition-colors"
            >
              <Palette className="w-5 h-5" />
              Explore Studio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
            Selected Works
          </span>
            <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-neutral-400 rounded-full mt-2"></div>
            </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Selected Works
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Highlighting projects where technical innovation meets human-centered design
            </p>
          </div>

          <div className="space-y-8">
            {selectedWorks.map((work, index) => (
              <Link
                key={work.id}
                href={work.link}
                className="group block"
              >
                <div className="bg-white rounded-2xl overflow-hidden border-2 border-neutral-200 hover:border-neutral-900 transition-all duration-300 hover:shadow-xl">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-80 md:h-auto bg-neutral-100 overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/20 to-transparent group-hover:from-neutral-900/10 transition-all duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full uppercase tracking-wider">
                          {work.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-neutral-900 mb-4 group-hover:text-neutral-700 transition-colors">
                        {work.title}
                      </h3>
                      
                      <p className="text-neutral-600 leading-relaxed mb-6">
                        {work.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {work.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-neutral-50 text-neutral-700 text-sm rounded-full border border-neutral-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-neutral-900 font-medium group-hover:gap-3 transition-all">
                        View Case Study
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-neutral-600 hover:text-neutral-900 transition-colors group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Experience
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From AI research to assistive robotics and immersive AR/VR — building solutions 
              that bridge technology and human experience.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-neutral-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-neutral-600 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {exp.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-600 leading-relaxed">
                      <span className="text-neutral-400 mt-1.5 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-50 text-neutral-700 text-sm rounded-full border border-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View Full Resume CTA */}
          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-neutral-600 hover:text-neutral-900 transition-colors group"
            >
              View Full Background & Resume
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Systems Side */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-neutral-900" />
                <h2 className="text-2xl font-bold text-neutral-900">Systems</h2>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Computer Science research focused on machine learning, robotics, 
                and full-stack development. Experience spanning AI research labs, 
                assistive technology, and immersive AR/VR solutions.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Python', 'TypeScript', 'React', 'Unreal Engine', 'Machine Learning', 'Robotics'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white text-sm text-neutral-700 rounded-full border border-neutral-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Expression Side */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-6 h-6 text-neutral-900" />
                <h2 className="text-2xl font-bold text-neutral-900">Expression</h2>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Traditional art practice spanning paintings, drawings, and fashion illustration. 
                Visual thinking that informs my approach to UI/UX, data visualization, 
                and creating engaging educational content.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {['Acrylic', 'Watercolor', 'Charcoal', 'Digital', 'Fashion'].map((medium) => (
                  <span key={medium} className="px-3 py-1 bg-white text-sm text-neutral-700 rounded-full border border-neutral-200">
                    {medium}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}