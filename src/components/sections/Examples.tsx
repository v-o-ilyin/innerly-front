import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const groups = [
  {
    id: 'hard',
    tab: 'Трудный момент',
    title: 'Когда не знаешь, что делать',
    desc: 'Одиночество, тревога, ощущение потери — Innerly принимает любое состояние без осуждения',
    dot: 'bg-stone-400',
    images: [
      '/negative/Снимок экрана 2026-04-11 в 12.43.26.png',
      '/negative/Снимок экрана 2026-04-11 в 12.43.41.png',
      '/negative/Снимок экрана 2026-04-11 в 12.44.07.png',
      '/negative/Снимок экрана 2026-04-11 в 12.44.28.png',
    ],
  },
  {
    id: 'positive',
    tab: 'Позитивная ситуация',
    title: 'Разобрать хорошее — тоже важно',
    desc: 'Innerly помогает замечать и осмыслять радостные моменты, не только трудные',
    dot: 'bg-brand-500',
    images: [
      '/positive/Снимок экрана 2026-04-11 в 12.53.04.png',
      '/positive/Снимок экрана 2026-04-11 в 12.53.26.png',
      '/positive/Снимок экрана 2026-04-11 в 12.53.47.png',
      '/positive/Снимок экрана 2026-04-11 в 12.54.04.png',
    ],
  },
]

export function Examples() {
  const [activeGroup, setActiveGroup] = useState(0)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const group = groups[activeGroup]
  const currentIdx = lightboxSrc ? group.images.indexOf(lightboxSrc) : -1

  const close = useCallback(() => setLightboxSrc(null), [])

  const prev = useCallback(() => {
    if (currentIdx < 0) return
    setLightboxSrc(group.images[(currentIdx - 1 + group.images.length) % group.images.length])
  }, [currentIdx, group.images])

  const next = useCallback(() => {
    if (currentIdx < 0) return
    setLightboxSrc(group.images[(currentIdx + 1) % group.images.length])
  }, [currentIdx, group.images])

  useEffect(() => {
    if (!lightboxSrc) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxSrc, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxSrc])

  return (
    <section className="py-20 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest">
            Реальные диалоги
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mt-2">
            Посмотри, как это работает
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-2xl p-1 shadow-sm border border-stone-200 gap-1">
            {groups.map((g, i) => (
              <button
                key={g.id}
                onClick={() => setActiveGroup(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeGroup === i
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${g.dot}`} />
                {g.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="text-center mb-6">
          <h3 className="font-bold text-stone-800 text-lg mb-1">{group.title}</h3>
          <p className="text-sm text-stone-500">{group.desc}</p>
        </div>

        {/* Screenshots grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {group.images.map((src) => (
            <button
              key={src}
              onClick={() => setLightboxSrc(src)}
              className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg hover:scale-[1.01] transition-all cursor-zoom-in bg-white"
            >
              <img
                src={src}
                alt=""
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center"
          onClick={close}
        >
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={lightboxSrc}
            alt=""
            onClick={e => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain"
          />

          <button
            onClick={e => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={close}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {group.images.map((src, i) => (
              <button
                key={src}
                onClick={e => { e.stopPropagation(); setLightboxSrc(group.images[i]) }}
                className={`w-2 h-2 rounded-full transition-colors ${src === lightboxSrc ? 'bg-white' : 'bg-white/35'}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
