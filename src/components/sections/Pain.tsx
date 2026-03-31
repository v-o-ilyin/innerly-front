const pains = [
  {
    emoji: '😰',
    title: 'Тревога накрывает внезапно',
    desc: 'Ты не знаешь, что делать прямо сейчас — дышать глубже не помогает, а мысли крутятся по кругу',
  },
  {
    emoji: '🤯',
    title: 'Эмоции захлёстывают в общении',
    desc: 'После конфликта с коллегой или близким ты долго не можешь прийти в себя и прокручиваешь ситуацию снова и снова',
  },
  {
    emoji: '📖',
    title: 'Дневник — но нет отклика',
    desc: 'Ты пишешь мысли, но бумага молчит. Хочется, чтобы кто-то помог разобраться, а не просто выслушал',
  },
  {
    emoji: '💸',
    title: 'Психолог — дорого и не всегда доступен',
    desc: 'Сессия раз в неделю, а тяжело прямо сейчас. Нужна поддержка здесь и сейчас, а не через три дня',
  },
]

export function Pain() {
  return (
    <section className="py-20 px-6 bg-rose-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-violet-950 mb-4">
            Тебе знакомо это?
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Большинство из нас не знают, как справляться с эмоциями прямо в
            моменте. И это нормально — просто раньше не было нужного инструмента
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pains.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-6 flex gap-4 shadow-sm border border-rose-100"
            >
              <span className="text-3xl flex-shrink-0">{p.emoji}</span>
              <div>
                <h3 className="font-semibold text-violet-900 mb-1">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
