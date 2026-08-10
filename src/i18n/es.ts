const es = {
  nav: {
    services: 'Servicios',
    products: 'Productos',
    clients: 'Clientes',
    team: 'Equipo',
    contact: 'Contacto',
    cta: 'Hablemos',
  },
  hero: {
    badge: 'Ingeniería de Software · IA · Cloud',
    headline1: 'Construimos software',
    headline2: 'que realmente se lanza.',
    sub: 'Kafer Labs es un estudio de software que transforma ideas complejas en productos listos para producción—apps móviles, plataformas web y soluciones con IA que escalan.',
    cta_primary: 'Iniciar un proyecto',
    cta_secondary: 'Ver nuestro trabajo',
    badge_software: 'Software a medida',
    badge_ai: 'Integración de IA',
    badge_cloud: 'Cloud & AWS',
  },
  services: {
    label: 'Lo que hacemos',
    title1: 'Servicios hechos para',
    title2: 'productos reales',
    sub: 'No solo escribimos código—arquitectamos, construimos, probamos y lanzamos soluciones que resuelven problemas reales para usuarios reales.',
    items: [
      {
        title: 'Apps Móviles',
        desc: 'Apps multiplataforma para iOS y Android con React Native—desde el concepto hasta ambas tiendas, incluyendo pipelines de CI/CD y despliegue en stores.',
        tag: 'iOS · Android · React Native',
      },
      {
        title: 'Plataformas Web',
        desc: 'Aplicaciones web rápidas y escalables con frontends modernos y APIs robustas. Desde landing pages hasta dashboards SaaS complejos.',
        tag: 'React · Next.js · TypeScript',
      },
      {
        title: 'Integración de IA',
        desc: 'Incorporamos IA en tu producto—recomendaciones inteligentes, interfaces de lenguaje natural, flujos automatizados y analítica predictiva.',
        tag: 'LLMs · OpenAI · ML APIs',
      },
      {
        title: 'Cloud & AWS',
        desc: 'Arquitecturas serverless, microservicios contenerizados y despliegues completos en AWS diseñados para alta disponibilidad y costo mínimo en reposo.',
        tag: 'AWS · Lambda · S3 · CloudFront',
      },
      {
        title: 'Ingeniería Full-Stack',
        desc: 'Ownership total del desarrollo—arquitectura, backend, frontend, diseño de base de datos y entrega lista para producción.',
        tag: 'Node.js · PostgreSQL · GraphQL',
      },
      {
        title: 'Consultoría Técnica',
        desc: 'Auditamos tu stack actual, identificamos cuellos de botella y entregamos un roadmap claro para mejorar rendimiento, escalabilidad y velocidad de desarrollo.',
        tag: 'Arquitectura · Code Review',
      },
    ],
  },
  products: {
    label: 'Nuestros productos',
    title1: 'Somos nuestros',
    title2: 'propios clientes',
    sub: 'Construimos nuestros propios productos internamente—una prueba viva de nuestros estándares de ingeniería.',
    fudd_tagline: 'Gestor inteligente de despensa',
    fudd_desc:
      'Un ingeniero frustrado resolviendo un problema real: el desperdicio de comida en casa. Fudd es una app de consumo completa que ayuda a los hogares a rastrear inventario, reducir gastos y comer más fresco—diseñada e ingeniada desde cero.',
    features: [
      { title: 'Cero Desperdicio', desc: 'Rastrea fechas de vencimiento e inventario en tiempo real.' },
      { title: 'Ahorro Inteligente', desc: 'Analiza patrones de consumo para dejar de comprar de más.' },
      { title: 'Listas Automáticas', desc: 'Genera listas de compras inteligentes según lo que necesitas.' },
      { title: 'Métricas Accionables', desc: 'Insights claros sobre hábitos y dinero ahorrado.' },
    ],
    google_play: 'Google Play',
    app_store: 'App Store',
  },
  whyus: {
    label: 'Cómo trabajamos',
    title1: 'Ingeniería primero,',
    title2: 'siempre',
    sub: 'Somos ingenieros que hemos construido productos reales de consumo. Sabemos lo que se necesita para ir de la idea a producción—y llevamos esa disciplina a cada proyecto de cliente.',
    steps: [
      {
        title: 'Descubrimiento',
        desc: 'Comenzamos con un análisis profundo de tu problema, objetivos y restricciones—luego diseñamos la arquitectura antes de escribir una sola línea de código.',
      },
      {
        title: 'Ingeniería',
        desc: 'Construimos de forma iterativa con comunicación constante. Sin desarrollo opaco—ves el progreso desde el primer día.',
      },
      {
        title: 'Despliegue',
        desc: 'Desde envíos a tiendas hasta despliegues en la nube, gestionamos el pipeline de release completo con CI/CD, monitoreo y estrategias de rollback.',
      },
      {
        title: 'Soporte',
        desc: 'No desaparecemos después del lanzamiento. Nos quedamos para monitorear el rendimiento, resolver problemas rápido e iterar con datos reales de usuarios.',
      },
    ],
    cta_title: '¿Listo para construir tu próximo producto?',
    cta_sub: 'Únete a las empresas que eligieron Kafer Labs para hacer realidad su visión.',
    cta_btn: 'Iniciar una conversación',
  },
  clients: {
    label: 'Confían en nosotros',
    title1: 'Clientes que',
    title2: 'lanzan con nosotros',
    sub: 'Hemos colaborado con startups, empresas en crecimiento y compañías establecidas en múltiples industrias para convertir ideas en productos.',
    stats: [
      { value: '15+', label: 'Proyectos entregados' },
      { value: '8+', label: 'Clientes satisfechos' },
      { value: '3', label: 'Países' },
      { value: '100%', label: 'Entregas a tiempo' },
    ],
    testimonials: [
      {
        quote:
          'Kafer Labs tomó nuestra idea desde un wireframe básico hasta una app móvil completamente desplegada en tiempo récord. Su profundidad técnica y atención al detalle son excepcionales.',
        name: 'Alejandro R.',
        role: 'Fundador, Startup HealthTech',
      },
      {
        quote:
          'No solo construyen lo que pides—cuestionan supuestos, sugieren mejores soluciones y entregan un producto que realmente funciona en producción.',
        name: 'Maria G.',
        role: 'CTO, Plataforma E-commerce',
      },
      {
        quote:
          'Las funciones de IA que integraron en nuestra plataforma duplicaron el engagement de usuarios. La calidad del código fue sobresaliente y el equipo fue un placer.',
        name: 'James T.',
        role: 'Product Manager, Empresa SaaS',
      },
    ],
    industries_label: 'Industrias en las que hemos trabajado',
    industries: [
      'HealthTech', 'E-commerce', 'FinTech', 'EdTech',
      'Alimentos', 'Logística', 'Apps de Consumo', 'B2B SaaS',
    ],
  },
  team: {
    label: 'Nuestro equipo',
    title1: 'Los ingenieros',
    title2: 'detrás de la magia',
    sub: 'Un equipo compacto de especialistas que se preocupan profundamente por el oficio, la calidad y el lanzamiento de productos que marcan una diferencia real.',
    footer_note: 'Equipo pequeño. Gran resultado. Cada proyecto recibe toda nuestra atención.',
    members: [
      {
        name: 'Kevin Ibarra',
        role: 'Ingeniero QA & Desarrollador Full Stack',
        certBadge: 'AWS Certified',
        bio: 'Garantiza que cada release sea impecable. Kevin combina experiencia profunda en QA con habilidades de full-stack—cubriendo pruebas automatizadas, pipelines de CI y garantía de calidad end-to-end en web y móvil.',
        tag: 'QA · Full Stack',
      },
      {
        name: 'Santiago González',
        role: 'Desarrollador Backend & Ingeniero de IA',
        certBadge: 'Especialista en IA',
        bio: 'Diseña los sistemas que trabajan detrás de escena. Santiago construye APIs robustas y escalables e integra capacidades de IA/ML que hacen los productos más inteligentes—desde pipelines de LLMs hasta procesamiento de datos en tiempo real.',
        tag: 'Backend · IA',
      },
      {
        name: 'Luis Díaz',
        role: 'Desarrollador Frontend & Diseñador UI/UX',
        certBadge: 'Experto UI/UX',
        bio: 'Crea interfaces que los usuarios aman. Luis conecta diseño e ingeniería—convirtiendo requisitos complejos en experiencias fluidas, accesibles y pixel-perfect en web y móvil.',
        tag: 'Frontend · Diseño',
      },
      {
        name: 'Santiago Botero',
        role: 'Desarrollador Móvil & Ingeniero de Seguridad',
        certBadge: 'Experto en Seguridad',
        bio: 'Construye experiencias móviles con seguridad integrada desde el primer día. Santiago entrega apps de alto rendimiento para iOS y Android asegurando que cada capa del stack esté protegida contra amenazas reales.',
        tag: 'Móvil · Seguridad',
      },
    ],
  },
  contact: {
    label: 'Contáctanos',
    title1: 'Construyamos algo',
    title2: 'grande',
    sub: 'Cuéntanos sobre tu proyecto. Te respondemos en menos de 24 horas con una propuesta a tu medida.',
    what_label: '¿Qué necesitas?',
    options: [
      'App Móvil (iOS/Android)',
      'Plataforma Web',
      'Integración de IA',
      'Configuración Cloud & AWS',
      'Consultoría Técnica',
      'Otro',
    ],
    name_label: 'Tu nombre',
    name_placeholder: 'Juan Pérez',
    email_label: 'Correo electrónico',
    email_placeholder: 'juan@empresa.com',
    message_label: 'Cuéntanos sobre tu proyecto',
    message_placeholder: 'Necesitamos una app móvil que...',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    reply: 'Respuesta en menos de 24h',
    success_title: '¡Mensaje recibido!',
    success_sub: 'Gracias por contactarnos. Revisaremos tu mensaje y te responderemos en menos de 24 horas.',
    success_reset: 'Enviar otro mensaje',
    error: 'No pudimos enviar tu mensaje. Escríbenos directo a',
  },
  footer: {
    tagline: 'Estudio de ingeniería de software. Construimos productos que resuelven problemas reales.',
    built: 'Construido con React · Desplegado en GitHub Pages',
    rights: 'Todos los derechos reservados.',
  },
  whatsapp: {
    label: 'Chatea con nosotros por WhatsApp',
    tooltip: 'Chatear por WhatsApp',
  },
}

export default es
