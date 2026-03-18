export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  teamSize: string;
  duration: string;
  overview: string;
  problem: string;
  process: string;
  processDetails: string[];
  keyDecisions: {
    decision: string;
    tradeoff: string;
  }[];
  outcome: string;
  metrics: {
    label: string;
    value: string;
  }[];
  reflection: string;
  technologies: string[];
  category: string;
  images?: {
    hero: string;
    process?: string;
    outcome?: string;
  };
}

export const caseStudies: Record<string, CaseStudy> = {
  "assistive-robotics": {
    id: "assistive-robotics",
    title: "Enhancing Mobile Manipulator Control for Users with Motor Disabilities",
    role: "Software Development Intern",
    teamSize: "4-person team",
    duration: "2 months (July - August 2024)",
    overview:
      "Built an adaptive control interface for Hello Robot's mobile manipulators that enables individuals with motor disabilities to operate robots through Xbox Adaptive Controllers. This system expanded accessibility options beyond traditional input methods, allowing users with varying mobility constraints to operate robotic systems independently.",
    problem:
      "Users with motor disabilities had limited ways to control mobile manipulators. The existing web interface primarily supported mouse and keyboard input, which wasn't accessible to all users. We needed a solution that could translate adaptive controller inputs (custom button layouts, accessibility switches) into precise robot commands in real-time.",
    process:
      "Started by researching assistive technology patterns and Xbox Adaptive Controller specifications. Mapped controller inputs to robot control states, designed a modular architecture to support multiple input devices, and iteratively tested with accessibility experts to ensure the interface was intuitive.",
    processDetails: [
      "Reviewed existing Hello Robot codebase and identified control flow architecture",
      "Designed input abstraction layer to support multiple controller types",
      "Implemented Xbox Adaptive Controller driver integration in Python",
      "Built React-based UI with real-time visual feedback for controller state",
      "Collaborated with accessibility specialists to validate control mappings",
      "Contributed implementation to open-source repository",
    ],
    keyDecisions: [
      {
        decision: "Modular input layer over hardcoded Xbox support",
        tradeoff:
          "Took longer upfront but enables future support for other adaptive controllers (eye tracking, voice control, etc.) without core changes",
      },
      {
        decision: "Priority emphasis on latency-free feedback",
        tradeoff:
          "Implemented efficient state polling over UI-thread updates, reducing visual lag but requiring careful threading architecture",
      },
      {
        decision: "Contributed back to open-source immediately",
        tradeoff:
          "Higher documentation burden but ensures the solution benefits the broader assistive tech community",
      },
    ],
    outcome:
      "Successfully deployed adaptive controller support in Hello Robot's interface. The system is now part of their open-source repository and being tested with users in the field.",
    metrics: [
      {
        label: "Input latency",
        value: "<50ms response time",
      },
      {
        label: "Control modes supported",
        value: "3 (joystick, button grid, voice-ready architecture)",
      },
      {
        label: "User testing sessions",
        value: "5+ with accessibility advisors",
      },
      {
        label: "Code contributed",
        value: "~1,200 lines merged to main repo",
      },
    ],
    reflection:
      "I'd prioritize user testing earlier in the process. We spent time on features that seemed logical but weren't as valuable as we thought. Also, I'd invest more in profiling to catch performance bottlenecks before they became architectural constraints. Working with accessibility specialists was invaluable—accessibility isn't a feature to bolt on, it's a foundational design requirement.",
    technologies: ["React", "TypeScript", "Python", "ROS", "Xbox SDK"],
    category: "Full-Stack Development",
    images: {
      hero: "/work/assistive-robotics-hero.jpg",
    },
  },

  "ar-construction": {
    id: "ar-construction",
    title: "Real-Time AR Visualization for Construction Planning",
    role: "Programming Intern",
    teamSize: "8-person design & engineering team",
    duration: "3 months (June - August 2023)",
    overview:
      "Developed a real-time architectural visualization system for Skanska that allows clients to experience and modify 3D building designs through AR. The system integrates live cost and material updates, enabling informed design decisions during client presentations.",
    problem:
      "Skanska struggled to communicate design concepts to clients. Static 2D plans and rendered images couldn't convey spatial relationships or changes in real-time. Clients needed to understand how modifications would affect costs and construction timeline before committing to designs. The process required back-and-forth between architects, clients, and estimators.",
    process:
      "Worked with BIM coordinators to convert architectural data into game-optimized formats. Built modular AR systems in Unreal Engine that parse live cost databases. Created interactive controls for clients to modify materials and view instant cost updates.",
    processDetails: [
      "Converted AutoCAD floor plans to 3D models using 3ds Max with performance optimization",
      "Created modular blueprint library in Unreal Engine for rapid scene composition",
      "Integrated cost database queries to show real-time material pricing",
      "Implemented AR overlay system with spatial anchors for on-site visualization",
      "Built client-facing UI with design presets and customization options",
      "Optimized mesh complexity to maintain 60fps on mobile AR devices",
    ],
    keyDecisions: [
      {
        decision: "Unreal Engine over web-based AR (Three.js/Babylon)",
        tradeoff:
          "Better performance and spatial stability but requires native builds for each platform; trade-off worth it for client-facing product quality",
      },
      {
        decision: "Real-time cost integration vs. pre-calculated estimates",
        tradeoff:
          "Real-time adds complexity but gives clients confidence they're seeing current market prices",
      },
      {
        decision: "Simplified material library for speed over completeness",
        tradeoff:
          "Launched with 80% of materials needed but could iterate based on feedback instead of building exhaustive first version",
      },
    ],
    outcome:
      "Deployed to 3 active construction projects. Used in client pitches by 2 regional offices. Reduced design communication cycles by ~40% according to project managers.",
    metrics: [
      {
        label: "Active projects using system",
        value: "3",
      },
      {
        label: "Design communication reduction",
        value: "~40% fewer revision cycles",
      },
      {
        label: "3D models created",
        value: "12 complete buildings",
      },
      {
        label: "Frame rate on target devices",
        value: "Stable 55-60 fps",
      },
    ],
    reflection:
      "I underestimated the importance of loading time—users got frustrated waiting 30+ seconds for models to load, even accounting for file sizes. We should have implemented streaming or progressive loading earlier. Also, real-time cost data sounds great in theory but was rarely updated fast enough; a hybrid approach of cached estimates with periodic refreshes would've been better.",
    technologies: ["Unreal Engine", "AutoCAD", "3ds Max", "C++", "SQL", "AR"],
    category: "AR/VR Development",
    images: {
      hero: "/work/ar-construction-hero.jpg",
    },
  },

  "ai-education": {
    id: "ai-education",
    title: "AI-Powered Educational Content Generation",
    role: "Undergraduate Research Assistant",
    teamSize: "2-person research team",
    duration: "9 months (August 2024 - May 2025)",
    overview:
      "Researched and fine-tuned image generation models to automatically create visually engaging educational materials. The system translates complex concepts into intuitive diagrams, reducing content creation time for educators while improving learning outcomes through consistent visual narratives.",
    problem:
      "Creating quality educational visuals is time-intensive. Teachers often resort to static diagrams or low-quality graphics due to time and budget constraints. This limits students' ability to understand complex concepts through tailored visualizations. Research indicated that personalized visual explanations improved retention by 30%+, but creating them at scale was infeasible.",
    process:
      "Conducted literature review on generative models and education. Fine-tuned Stable Diffusion and DALL-E on educational illustration styles. Built evaluation framework to assess visual clarity and pedagogical effectiveness. Tested output with educators and students.",
    processDetails: [
      "Reviewed 15+ recent papers on generative AI and educational effectiveness",
      "Analyzed existing educational illustration styles and visual patterns",
      "Fine-tuned Stable Diffusion on 2,000+ curated educational images",
      "Experimented with prompt engineering techniques for pedagogical consistency",
      "Built Python pipeline for batch generation and quality filtering",
      "Developed evaluation metrics based on clarity, accuracy, and pedagogical value",
      "Conducted user study with 20 educators and 60 students",
    ],
    keyDecisions: [
      {
        decision: "Fine-tuning over prompt engineering alone",
        tradeoff:
          "Higher upfront cost in data curation but produces more consistent, style-appropriate outputs. Reduces prompt engineering overhead for educators.",
      },
      {
        decision: "Multi-model approach (Stable Diffusion + DALL-E) vs. single model",
        tradeoff:
          "Increases API costs but provides fallback options and lets us leverage each model's strengths for different content types",
      },
      {
        decision: "Human-in-the-loop review vs. fully automated generation",
        tradeoff:
          "Requires educator review time but ensures quality before student exposure; found 15% of outputs needed human adjustment",
      },
    ],
    outcome:
      "Published findings in 1 peer-reviewed conference. System currently in pilot with 3 school districts affecting ~500 students. Early indicators show 25% improvement in concept retention for visually-supported lessons.",
    metrics: [
      {
        label: "Models fine-tuned",
        value: "7 across different artistic styles",
      },
      {
        label: "Training dataset size",
        value: "2,000+ curated images",
      },
      {
        label: "Pilot schools",
        value: "3 districts, 500+ students",
      },
      {
        label: "Concept retention improvement",
        value: "+25% in early testing",
      },
      {
        label: "Human review adjustment rate",
        value: "~15% of outputs",
      },
    ],
    reflection:
      "I focused too heavily on model quality metrics early on and not enough on the actual user workflow. Educators cared more about generation speed and ease of customization than minor quality improvements. If I started over, I'd spend more time understanding how teachers would actually integrate this into their workflow. Also, don't wait for perfect results—we should've piloted with real classrooms 6 months earlier.",
    technologies: ["Python", "Stable Diffusion", "DALL-E", "TensorFlow", "PyTorch"],
    category: "Machine Learning Research",
    images: {
      hero: "/work/ai-education-hero.jpg",
    },
  },
};
