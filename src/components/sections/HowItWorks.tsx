import { useState, useRef, useEffect } from 'react'

const steps = [
  {
    step: '01',
    emoji: '🎯',
    title: 'Выбери тему',
    desc: 'В начале бот предложит выбрать направление: тревожность, стресс, самооценка или продуктивность. От этого зависит, какие советы и упражнения ты будешь получать каждый день.',
    msgs: [
      { text: 'Привет! Над чем хочешь поработать? 🌸', mine: false },
      { text: 'Тревожность', mine: true },
      { text: 'Отлично, начинаем работу над тревогой 💜', mine: false },
    ],
  },
  {
    step: '02',
    emoji: '☀️',
    title: 'Утренний совет',
    desc: 'Каждое утро — короткий персональный совет под твою тему. Не общие фразы, а конкретное действие на день: что заметить, попробовать или отпустить.',
    msgs: [
      { text: 'Доброе утро! ☀️ Совет дня: замечай, когда тело напрягается — это первый сигнал тревоги', mine: false },
      { text: 'Как ты сегодня? 🌿', mine: false },
      { text: 'Спасибо, буду пробовать!', mine: true },
    ],
  },
  {
    step: '03',
    emoji: '📝',
    title: 'Вечерний дневник',
    desc: 'Вечером бот спрашивает, как прошёл день. Задаёт уточняющие вопросы, помогает сформулировать мысли и понять, что именно вызвало ту или иную эмоцию.',
    msgs: [
      { text: 'Расскажи, что произошло сегодня?', mine: false },
      { text: 'Поспорила с подругой', mine: true },
      { text: 'Какие эмоции ты заметила в этот момент?', mine: false },
      { text: 'Обиду и злость', mine: true },
    ],
  },
  {
    step: '04',
    emoji: '🤖',
    title: 'Обратная связь от ИИ',
    desc: 'После записи бот анализирует текст и даёт конкретный отклик: что стоит отметить, какие паттерны замечает и что можно попробовать в следующий раз.',
    msgs: [
      { text: 'Ты молодец, что заметила свою реакцию 💜', mine: false },
      { text: 'Попробуй сказать подруге: "Мне важно..." — это снизит напряжение', mine: false },
      { text: 'Спасибо, это помогает', mine: true },
    ],
  },
  {
    step: '05',
    emoji: '🆘',
    title: 'Помощь в моменте',
    desc: 'Если тревожно прямо сейчас — напиши боту. Он проведёт тебя через упражнение на заземление или дыхание, чтобы вернуть ощущение опоры.',
    msgs: [
      { text: 'Что ты сейчас чувствуешь?', mine: false },
      { text: 'Тревога, не могу успокоиться', mine: true },
      { text: 'Давай попробуем технику заземления 🌿', mine: false },
      { text: 'Назови 5 вещей, которые видишь вокруг', mine: false },
    ],
  },
  {
    step: '06',
    emoji: '📊',
    title: 'Еженедельная сводка',
    desc: 'Раз в неделю получай личную аналитику: сколько записей сделано, как менялось настроение, что чаще всего вызывало стресс — и что помогало.',
    msgs: [
      { text: '📊 Итоги недели', mine: false },
      { text: '7 записей · Тревога ↓ 30%', mine: false },
      { text: 'Топ триггер: рабочие дедлайны', mine: false },
      { text: 'Ты хорошо справляешься 💜', mine: false },
    ],
  },
]

function PhoneScreen({ step }: { step: typeof steps[0] }) {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Status bar */}
      <div className="bg-white px-4 pt-2 pb-1 flex items-center justify-between">
        <span className="text-[10px] font-semibold text-slate-800">9:41</span>
        <div className="flex items-center gap-1">
          <svg className="w-3 h-2 fill-slate-800" viewBox="0 0 16 12"><rect x="0" y="3" width="3" height="9" rx="1"/><rect x="4.5" y="2" width="3" height="10" rx="1"/><rect x="9" y="0" width="3" height="12" rx="1"/><rect x="13.5" y="1" width="2.5" height="11" rx="1" opacity=".4"/></svg>
          <svg className="w-3 h-3 fill-slate-800" viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
          <svg className="w-4 h-3 fill-slate-800" viewBox="0 0 25 12"><rect x="0" y="1" width="21" height="10" rx="2.5" stroke="currentColor" strokeWidth="1.5" fill="none"/><rect x="1.5" y="2.5" width="15" height="7" rx="1.5"/><path d="M23 4.5v3a1.5 1.5 0 0 0 0-3z"/></svg>
        </div>
      </div>

      {/* Chat header */}
      <div className="bg-white px-3 pb-2 flex items-center gap-2 border-b border-slate-100">
        <button className="text-slate-400 mr-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
          <span className="text-base">🌸</span>
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold text-slate-800 leading-tight">Innerly</p>
          <p className="text-[9px] text-emerald-500 font-medium">● онлайн</p>
        </div>
        <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
      </div>

      {/* Messages */}
      <div className="flex-1 bg-slate-50 p-3 flex flex-col gap-2 overflow-hidden">
        {step.msgs.map((m, i) => (
          <div
            key={i}
            className={`rounded-2xl px-3 py-2 text-[11px] leading-snug max-w-[82%] ${
              m.mine
                ? 'ml-auto bg-violet-600 text-white rounded-br-sm'
                : 'bg-violet-800 text-white shadow-sm rounded-bl-sm'
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white px-3 py-2.5 flex items-center gap-2 border-t border-slate-100">
        <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5">
          <p className="text-[10px] text-slate-400">Ваше сообщение</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
          <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M2 21L23 12 2 3v7l15 2-15 2z" /></svg>
        </div>
      </div>
    </div>
  )
}

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i) },
        { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white" id="how">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-violet-500 uppercase tracking-widest">
            Как это работает
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-violet-950 mt-2 mb-3">
            Поддержка каждый день
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            Innerly встраивается в твой день — утром, вечером и в любой момент,
            когда нужна помощь
          </p>
        </div>

        <div className="flex gap-16 items-start justify-center">
          {/* Sticky phone — desktop only */}
          <div className="hidden lg:block sticky top-24 flex-shrink-0">
            <div className="w-96 h-[720px] bg-gradient-to-b from-violet-900 to-slate-900 rounded-[44px] shadow-2xl shadow-violet-400/30 p-[10px]">
              <div className="w-full h-full rounded-[36px] overflow-hidden">
                <PhoneScreen step={steps[activeIndex]} />
              </div>
            </div>
          </div>

          {/* Steps list */}
          <div className="w-96 flex flex-col">
            {steps.map((s, i) => (
              <div
                key={s.step}
                ref={(el) => { itemRefs.current[i] = el }}
                className="py-12 border-b border-slate-100 last:border-0"
              >
                <div className="text-5xl mb-5">{s.emoji}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
