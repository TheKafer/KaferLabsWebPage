import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Smartphone, Globe, Brain, Cloud, Layers, ShieldCheck } from 'lucide-react'

const icons = [
  <Smartphone size={24} />,
  <Globe size={24} />,
  <Brain size={24} />,
  <Cloud size={24} />,
  <Layers size={24} />,
  <ShieldCheck size={24} />,
]

const colors = ['indigo', 'purple', 'pink', 'indigo', 'purple', 'pink']

const colorMap: Record<string, { bg: string; text: string; border: string; tagBg: string }> = {
  indigo: {
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    border: 'hover:border-indigo-500/40',
    tagBg: 'bg-indigo-500/10 text-indigo-400',
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'hover:border-purple-500/40',
    tagBg: 'bg-purple-500/10 text-purple-400',
  },
  pink: {
    bg: 'bg-pink-500/10',
    text: 'text-pink-400',
    border: 'hover:border-pink-500/40',
    tagBg: 'bg-pink-500/10 text-pink-400',
  },
}

function ServiceCard({ index }: { index: number }) {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const color = colors[index]
  const c = colorMap[color]
  const item = t(`services.items.${index}`, { returnObjects: true }) as {
    title: string; desc: string; tag: string
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group p-6 rounded-2xl bg-[#0f1117] border border-[#1e2030] ${c.border} card-hover cursor-default`}
    >
      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center ${c.text} mb-5`}>
        {icons[index]}
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
      <span className={`inline-block text-xs px-2.5 py-1 rounded-md font-mono ${c.tagBg}`}>
        {item.tag}
      </span>
    </motion.div>
  )
}

export default function Services() {
  const { t } = useTranslation()
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">
            {t('services.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('services.title1')} <span className="gradient-text">{t('services.title2')}</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">{t('services.sub')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <ServiceCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
