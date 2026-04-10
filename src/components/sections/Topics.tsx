const topics = [
  { emoji: '😮‍💨', label: 'Тревожность', color: 'bg-brand-100 border-brand-200 text-brand-800' },
  { emoji: '🔥', label: 'Стресс', color: 'bg-amber-100 border-amber-200 text-amber-800' },
  { emoji: '💛', label: 'Самооценка', color: 'bg-yellow-100 border-yellow-200 text-yellow-800' },
  { emoji: '⚡', label: 'Продуктивность', color: 'bg-stone-100 border-stone-200 text-stone-800' },
]

export function Topics() {
  return (
    <section className="py-16 px-6 bg-amber-50">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest">
          Темы работы
        </span>
        <h2 className="text-3xl font-bold text-stone-900 mt-2 mb-4">
          Выбери, над чем работать
        </h2>
        <p className="text-stone-500 mb-10 max-w-md mx-auto">
          В зависимости от темы бот адаптирует утренние советы, вечерние
          вопросы и упражнения именно для тебя
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((t) => (
            <div
              key={t.label}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border-2 ${t.color} font-semibold text-lg shadow-sm`}
            >
              <span className="text-2xl">{t.emoji}</span>
              {t.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
