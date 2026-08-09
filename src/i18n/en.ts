const en = {
  nav: {
    services: 'Services',
    products: 'Products',
    clients: 'Clients',
    team: 'Team',
    contact: 'Contact',
    cta: "Let's Talk",
  },
  hero: {
    badge: 'Software Engineering · AI · Cloud',
    headline1: 'We build software',
    headline2: 'that actually ships.',
    sub: 'Kafer Labs is a software studio that turns complex ideas into production-ready products—mobile apps, web platforms, and AI-powered solutions that scale.',
    cta_primary: 'Start a project',
    cta_secondary: 'See our work',
    badge_software: 'Custom Software',
    badge_ai: 'AI Integration',
    badge_cloud: 'Cloud & AWS',
  },
  services: {
    label: 'What we do',
    title1: 'Services built for',
    title2: 'real products',
    sub: "We don't just write code—we architect, build, test, and ship solutions that solve real problems for real users.",
    items: [
      {
        title: 'Mobile Apps',
        desc: 'Cross-platform iOS & Android apps built with React Native—from concept to both stores, including CI/CD pipelines and store deployment.',
        tag: 'iOS · Android · React Native',
      },
      {
        title: 'Web Platforms',
        desc: 'Fast, scalable web applications with modern frontends and robust APIs. From landing pages to complex SaaS dashboards.',
        tag: 'React · Next.js · TypeScript',
      },
      {
        title: 'AI Integration',
        desc: 'We embed AI into your product—intelligent recommendations, natural language interfaces, automated workflows, and predictive analytics.',
        tag: 'LLMs · OpenAI · ML APIs',
      },
      {
        title: 'Cloud & AWS',
        desc: 'Serverless architectures, containerized microservices, and full AWS deployments designed for high availability and near-zero idle cost.',
        tag: 'AWS · Lambda · S3 · CloudFront',
      },
      {
        title: 'Full-Stack Engineering',
        desc: 'End-to-end development ownership—architecture, backend, frontend, database design, and production-ready delivery.',
        tag: 'Node.js · PostgreSQL · GraphQL',
      },
      {
        title: 'Tech Consulting',
        desc: 'We audit your existing stack, identify bottlenecks, and deliver a clear roadmap to improve performance, scalability, and developer velocity.',
        tag: 'Architecture · Code Review',
      },
    ],
  },
  products: {
    label: 'Our products',
    title1: 'We eat our own',
    title2: 'cooking',
    sub: "We build our own products in-house—a living proof of our engineering standards.",
    fudd_tagline: 'Smart Pantry Manager',
    fudd_desc:
      'A frustrated engineer solving a real problem: food waste at home. Fudd is a full-scale consumer app that helps households track inventory, cut expenses, and eat fresher—designed and engineered from scratch.',
    features: [
      { title: 'Zero Food Waste', desc: 'Tracks expiration dates and inventory in real-time.' },
      { title: 'Smart Savings', desc: 'Analyzes consumption patterns to stop overbuying.' },
      { title: 'Automated Lists', desc: 'Generates smart shopping lists based on what you need.' },
      { title: 'Actionable Metrics', desc: 'Clear insights into habits and money saved.' },
    ],
    google_play: 'Google Play',
    app_store: 'App Store',
  },
  whyus: {
    label: 'How we work',
    title1: 'Engineering-first,',
    title2: 'always',
    sub: "We're engineers who've built real consumer products. We know what it takes to go from idea to production—and we bring that discipline to every client project.",
    steps: [
      {
        title: 'Discovery',
        desc: 'We start with a deep-dive into your problem, goals, and constraints—then map out the architecture before writing a single line of code.',
      },
      {
        title: 'Engineering',
        desc: 'We build iteratively with constant communication. No black-box development—you see progress from day one.',
      },
      {
        title: 'Deployment',
        desc: 'From store submissions to cloud deployments, we handle the full release pipeline with CI/CD, monitoring, and rollback strategies.',
      },
      {
        title: 'Support',
        desc: "We don't disappear after launch. We stay on to monitor performance, fix issues fast, and iterate based on real user data.",
      },
    ],
    cta_title: 'Ready to build your next product?',
    cta_sub: 'Join the companies that chose Kafer Labs to bring their vision to life.',
    cta_btn: 'Start a conversation',
  },
  clients: {
    label: 'Trusted by',
    title1: 'Clients who',
    title2: 'ship with us',
    sub: "We've partnered with startups, scale-ups, and established companies across multiple industries to turn ideas into products.",
    stats: [
      { value: '15+', label: 'Projects delivered' },
      { value: '8+', label: 'Happy clients' },
      { value: '3', label: 'Countries' },
      { value: '100%', label: 'On-time delivery' },
    ],
    testimonials: [
      {
        quote:
          'Kafer Labs took our idea from a rough wireframe to a fully deployed mobile app in record time. Their technical depth and attention to detail are exceptional.',
        name: 'Alejandro R.',
        role: 'Founder, HealthTech Startup',
      },
      {
        quote:
          "They don't just build what you ask—they challenge assumptions, suggest better solutions, and deliver a product that actually works in production.",
        name: 'Maria G.',
        role: 'CTO, E-commerce Platform',
      },
      {
        quote:
          'The AI features they integrated into our platform doubled our user engagement. The code quality was outstanding and the team was a pleasure to work with.',
        name: 'James T.',
        role: 'Product Manager, SaaS Company',
      },
    ],
    industries_label: "Industries we've worked in",
    industries: [
      'HealthTech', 'E-commerce', 'FinTech', 'EdTech',
      'Food & Beverage', 'Logistics', 'Consumer Apps', 'B2B SaaS',
    ],
  },
  team: {
    label: 'Our team',
    title1: 'The engineers',
    title2: 'behind the magic',
    sub: 'A tight-knit team of specialists who care deeply about craft, quality, and shipping products that make a real difference.',
    footer_note: 'Small team. Big output. Every project gets our full attention.',
    members: [
      {
        name: 'Kevin Ibarra',
        role: 'QA Engineer & Full Stack Developer',
        certBadge: 'AWS Certified',
        bio: 'Ensures every release is bulletproof. Kevin combines deep QA expertise with full-stack engineering skills—covering automated testing, CI pipelines, and end-to-end quality assurance across web and mobile.',
        tag: 'QA · Full Stack',
      },
      {
        name: 'Santiago González',
        role: 'Backend Developer & AI Engineer',
        certBadge: 'AI Specialist',
        bio: 'Architects the systems behind the scenes. Santiago designs robust, scalable APIs and integrates AI/ML capabilities that make products smarter—from LLM pipelines to real-time data processing.',
        tag: 'Backend · AI',
      },
      {
        name: 'Luis Díaz',
        role: 'Frontend Developer & UI/UX Designer',
        certBadge: 'UI/UX Expert',
        bio: 'Crafts interfaces users love. Luis bridges design and engineering—turning complex requirements into fluid, accessible, pixel-perfect experiences across web and mobile platforms.',
        tag: 'Frontend · Design',
      },
      {
        name: 'Santiago Botero',
        role: 'Mobile Developer & Security Engineer',
        certBadge: 'Security Expert',
        bio: "Builds mobile experiences with security baked in from day one. Santiago delivers high-performance iOS and Android apps while ensuring every layer of the stack is hardened against real-world threats.",
        tag: 'Mobile · Security',
      },
    ],
  },
  contact: {
    label: 'Get in touch',
    title1: "Let's build something",
    title2: 'great',
    sub: "Tell us about your project. We'll get back to you within 24 hours with a tailored proposal.",
    what_label: 'What do you need?',
    options: [
      'Mobile App (iOS/Android)',
      'Web Platform',
      'AI Integration',
      'Cloud & AWS Setup',
      'Tech Consulting',
      'Other',
    ],
    name_label: 'Your name',
    name_placeholder: 'John Doe',
    email_label: 'Email address',
    email_placeholder: 'john@company.com',
    message_label: 'Tell us about your project',
    message_placeholder: 'We need a mobile app that...',
    submit: 'Send message',
    reply: 'Reply within 24h',
    success_title: 'Message received!',
    success_sub: "Thanks for reaching out. We'll review your message and get back to you within 24 hours.",
    success_reset: 'Send another message',
  },
  footer: {
    tagline: 'Software engineering studio. We build products that solve real problems.',
    built: 'Built with React · Deployed on AWS',
    rights: 'All rights reserved.',
  },
  whatsapp: {
    label: 'Chat with us on WhatsApp',
    tooltip: 'Chat on WhatsApp',
  },
}

export default en
