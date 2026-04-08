const steps = [
  {
    step: '01',
    emoji: '🎯',
    title: 'Выбери тему',
    desc: 'Бот предложит направление: тревожность, стресс, самооценка или продуктивность.',
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
    desc: 'Каждое утро — короткий персональный совет под твою тему.',
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
    desc: 'Вечером бот спрашивает, как прошёл день, помогает сформулировать мысли.',
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
    desc: 'После записи бот анализирует текст и даёт конкретный отклик.',
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
    desc: 'Если тревожно прямо сейчас — напиши боту, он проведёт через упражнение.',
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
    desc: 'Раз в неделю — личная аналитика: настроение, триггеры, динамика.',
    msgs: [
      { text: '📊 Итоги недели', mine: false },
      { text: '7 записей · Тревога ↓ 30%', mine: false },
      { text: 'Топ триггер: рабочие дедлайны', mine: false },
      { text: 'Ты хорошо справляешься 💜', mine: false },
    ],
  },
]

export function HowItWorks() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-white rounded-2xl border border-violet-100 shadow-sm p-5 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-violet-400 tabular-nums">{s.step}</span>
                <span className="text-2xl">{s.emoji}</span>
                <h3 className="font-bold text-slate-800 text-sm leading-tight">{s.title}</h3>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>

              <div className="flex flex-col gap-1.5 mt-auto pt-2">
                {s.msgs.map((m, i) => (
                  <div
                    key={i}
                    className={`rounded-xl px-3 py-1.5 text-[11px] leading-snug max-w-[90%] ${
                      m.mine
                        ? 'ml-auto bg-violet-600 text-white rounded-br-none'
                        : 'bg-violet-50 text-slate-700 rounded-bl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
