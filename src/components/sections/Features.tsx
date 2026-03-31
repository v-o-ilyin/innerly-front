import { BookOpen, Brain, BarChart3, Moon } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    color: 'bg-violet-100 text-violet-600',
    title: 'Умный дневник',
    desc: 'Записывай ситуации и получай обратную связь от ИИ. Все записи хранятся и доступны в любой момент',
    tag: 'Основное',
  },
  {
    icon: Brain,
    color: 'bg-rose-100 text-rose-500',
    title: 'Помощь в моменте',
    desc: 'Не знаешь, как справиться с тревогой прямо сейчас? Бот проведёт через проверенные техники',
    tag: 'Для острых ситуаций',
  },
  {
    icon: Moon,
    color: 'bg-indigo-100 text-indigo-600',
    title: 'Медитации и упражнения',
    desc: 'Мини-приложение с медитациями и упражнениями для саморефлексии прямо внутри бота',
    tag: 'Практика',
  },
  {
    icon: BarChart3,
    color: 'bg-emerald-100 text-emerald-600',
    title: 'Прогресс и аналитика',
    desc: 'Еженедельная сводка с динамикой твоего состояния и саммари по записям за неделю',
    tag: 'Отслеживание',
  },
]

export function Features() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-violet-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-violet-500 uppercase tracking-widest">
            Возможности
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-violet-950 mt-2 mb-4">
            Всё, что нужно для эмоционального здоровья
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-violet-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${f.color} flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-violet-900">{f.title}</h3>
                      <span className="text-[10px] bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full font-medium">
                        {f.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Phone demo row */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-violet-500 uppercase tracking-widest">
            Скриншоты
          </span>
          <h3 className="text-2xl font-bold text-violet-950 mt-2">
            Как выглядит изнутри
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: 'Помощь в моменте', bg: 'from-violet-600 to-indigo-600', msgs: ['Что ты сейчас чувствуешь?', 'Тревога', 'Давай попробуем технику заземления...'] },
            { label: 'Запись ситуации', bg: 'from-rose-500 to-pink-600', msgs: ['Расскажи, что произошло?', 'Поспорила с подругой', 'Какие эмоции ты заметила?'] },
            { label: 'Еженедельная сводка', bg: 'from-emerald-500 to-teal-600', msgs: ['📊 Итоги недели', '7 записей сделано', 'Тревога ↓ 30% по сравнению с прошлой неделей'] },
          ].map((screen) => (
            <div key={screen.label} className="flex flex-col items-center gap-3">
              <div className="w-44 h-80 bg-gradient-to-b from-slate-900 to-slate-950 rounded-[30px] shadow-xl p-2">
                <div className="w-full h-full bg-white rounded-[24px] overflow-hidden flex flex-col">
                  <div className={`bg-gradient-to-r ${screen.bg} px-3 pt-2 pb-3`}>
                    <p className="text-white text-[10px] font-semibold">{screen.label}</p>
                  </div>
                  <div className="flex-1 bg-[#f0ece8] p-2 flex flex-col gap-2">
                    {screen.msgs.map((m, i) => (
                      <div
                        key={m}
                        className={`rounded-xl px-2 py-1.5 text-[9px] leading-snug max-w-[85%] ${
                          i % 2 === 0
                            ? 'bg-white text-slate-700 shadow-sm'
                            : 'ml-auto bg-violet-600 text-white'
                        }`}
                      >
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">{screen.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
