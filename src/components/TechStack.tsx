import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const categories = [
  {
    title: 'Frontend',
    color: 'indigo',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Expo'],
  },
  {
    title: 'Backend',
    color: 'purple',
    techs: ['Node.js', 'Python', 'GraphQL', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'AI & Data',
    color: 'pink',
    techs: ['OpenAI', 'LangChain', 'TensorFlow', 'Hugging Face', 'Vector DBs', 'ML Pipelines'],
  },
  {
    title: 'Cloud & DevOps',
    color: 'emerald',
    techs: ['AWS Lambda', 'S3 / CloudFront', 'Docker', 'GitHub Actions', 'Terraform', 'Amplify'],
  },
]

const colorMap: Record<string, { border: string; text: string; bg: string; pill: string }> = {
  indigo: { border: 'border-indigo-500/30', text: 'text-indigo-400', bg: 'bg-indigo-500/5', pill: 'bg-indigo-500/10 text-indigo-300' },
  purple: { border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/5', pill: 'bg-purple-500/10 text-purple-300' },
  pink: { border: 'border-pink-500/30', text: 'text-pink-400', bg: 'bg-pink-500/5', pill: 'bg-pink-500/10 text-pink-300' },
  emerald: { border: 'border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-500/5', pill: 'bg-emerald-500/10 text-emerald-300' },
}

export default function TechStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tech" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-400 text-sm font-medium uppercase tracking-widest mb-4">
            Our stack
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Built with <span className="gradient-text">best-in-class tools</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We pick the right tool for the job—not the trendiest one. Our stack is battle-tested, modern, and built for scale.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {categories.map((cat, i) => {
            const c = colorMap[cat.color]
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${c.border} ${c.bg} bg-[#0f1117]`}
              >
                <h3 className={`text-sm font-semibold uppercase tracking-widest ${c.text} mb-5`}>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2.5 py-1 rounded-lg ${c.pill} font-medium`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
