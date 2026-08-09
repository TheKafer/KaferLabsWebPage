import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ShieldCheck, Code2, Brain, Lock, Award, Sparkles, Palette, Smartphone } from 'lucide-react'

const memberMeta = [
  { photo: '/kevin-ibarra.png',    color: 'indigo',  certIcon: <Award size={12} />,    icon: <ShieldCheck size={16} /> },
  { photo: '/santiago-gonzales.png', color: 'purple', certIcon: <Sparkles size={12} />, icon: <Brain size={16} /> },
  { photo: '/luis-gonzalez.png',       color: 'pink',    certIcon: <Palette size={12} />,   icon: <Code2 size={16} /> },
  { photo: '/santiago-botero.png', color: 'emerald', certIcon: <Lock size={12} />,      icon: <Smartphone size={16} /> },
]

const colorMap: Record<string, {
  tagBg: string; tagText: string; glow: string; badgeBg: string; badgeText: string
}> = {
  indigo:  { tagBg: 'bg-indigo-500/10',  tagText: 'text-indigo-400',  glow: 'group-hover:shadow-indigo-500/20',  badgeBg: 'bg-indigo-500/15 border-indigo-500/30',  badgeText: 'text-indigo-300' },
  purple:  { tagBg: 'bg-purple-500/10',  tagText: 'text-purple-400',  glow: 'group-hover:shadow-purple-500/20',  badgeBg: 'bg-purple-500/15 border-purple-500/30',  badgeText: 'text-purple-300' },
  pink:    { tagBg: 'bg-pink-500/10',    tagText: 'text-pink-400',    glow: 'group-hover:shadow-pink-500/20',    badgeBg: 'bg-pink-500/15 border-pink-500/30',      badgeText: 'text-pink-300' },
  emerald: { tagBg: 'bg-emerald-500/10', tagText: 'text-emerald-400', glow: 'group-hover:shadow-emerald-500/20', badgeBg: 'bg-emerald-500/15 border-emerald-500/30', badgeText: 'text-emerald-300' },
}

function MemberCard({ index, i }: { index: number; i: number }) {
  const { t } = useTranslation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const meta = memberMeta[index]
  const c = colorMap[meta.color]
  const member = t(`team.members.${index}`, { returnObjects: true }) as {
    name: string; role: string; certBadge: string; bio: string; tag: string
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.15 }}
      className={`group relative flex flex-col rounded-3xl bg-[#0f1117] border border-[#1e2030] hover:border-${meta.color}-500/30 overflow-hidden transition-all duration-300 hover:shadow-2xl ${c.glow}`}
    >
      <div className="relative h-64 overflow-hidden bg-[#080a10]">
        <img
          src={meta.photo}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1117] via-[#0f111700] to-transparent" />

        <div className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${c.badgeBg} ${c.badgeText}`}>
          {meta.certIcon}
          {member.certBadge}
        </div>

        <div className="absolute bottom-3 left-4">
          <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg font-mono ${c.tagBg} ${c.tagText}`}>
            <span>{meta.icon}</span>
            {member.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="mb-3">
          <h3 className="text-white text-xl font-bold">{member.name}</h3>
          <p className={`text-sm font-medium ${c.tagText}`}>{member.role}</p>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
      </div>
    </motion.div>
  )
}

export default function Team() {
  const { t } = useTranslation()

  return (
    <section id="team" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-600/6 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-indigo-400 text-sm font-medium uppercase tracking-widest mb-4">
            {t('team.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('team.title1')} <span className="gradient-text">{t('team.title2')}</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">{t('team.sub')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {memberMeta.map((_, i) => (
            <MemberCard key={i} index={i} i={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-600 text-sm mt-10"
        >
          {t('team.footer_note')}
        </motion.p>
      </div>
    </section>
  )
}
