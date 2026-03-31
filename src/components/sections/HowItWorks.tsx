const steps = [
  {
    step: '01',
    emoji: '🎯',
    title: 'Выбери тему',
    desc: 'Выбери тему, над которой хочешь поработать: тревожность, стресс, самооценка или продуктивность',
  },
  {
    step: '02',
    emoji: '☀️',
    title: 'Утренний совет',
    desc: 'Каждое утро бот присылает персональный совет на день, подобранный под твою тему',
  },
  {
    step: '03',
    emoji: '📝',
    title: 'Записывай ситуации',
    desc: 'Вечером фиксируй, что произошло. Бот задаёт вопросы и помогает структурировать мысли',
  },
  {
    step: '04',
    emoji: '🤖',
    title: 'Получай обратную связь',
    desc: 'ИИ анализирует запись и даёт тебе конкретный, поддерживающий отклик — не общие фразы',
  },
  {
    step: '05',
    emoji: '🆘',
    title: 'Помощь в моменте',
    desc: 'Тревожно прямо сейчас? Бот проведёт тебя через упражнение и поможет успокоиться',
  },
  {
    step: '06',
    emoji: '📊',
    title: 'Еженедельная сводка',
    desc: 'Каждую неделю получай статистику и саммари: как изменялось твоё состояние, что помогало',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white" id="how">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-violet-500 uppercase tracking-widest">
            Как это работает
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-violet-950 mt-2 mb-4">
            Поддержка каждый день
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Innerly встраивается в твой день — утром, вечером и в любой момент,
            когда нужна помощь
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative bg-gradient-to-br from-violet-50 to-white border border-violet-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <span className="absolute top-4 right-4 text-violet-200 text-4xl font-black select-none">
                {s.step}
              </span>
              <span className="text-3xl mb-3 block">{s.emoji}</span>
              <h3 className="font-bold text-violet-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
