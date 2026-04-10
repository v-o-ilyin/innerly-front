import { BookOpen, Brain, BarChart3, Moon } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    color: 'bg-brand-100 text-brand-600',
    title: 'Умный дневник',
    desc: 'Записывай ситуации и получай обратную связь от ИИ. Все записи хранятся и доступны в любой момент',
    tag: 'Основное',
  },
  {
    icon: Brain,
    color: 'bg-amber-100 text-amber-600',
    title: 'Помощь в моменте',
    desc: 'Не знаешь, как справиться с тревогой прямо сейчас? Бот проведёт через проверенные техники',
    tag: 'Для острых ситуаций',
  },
  {
    icon: Moon,
    color: 'bg-yellow-100 text-yellow-600',
    title: 'Медитации и упражнения',
    desc: 'Мини-приложение с медитациями и упражнениями для саморефлексии прямо внутри бота',
    tag: 'Практика',
  },
  {
    icon: BarChart3,
    color: 'bg-stone-100 text-stone-600',
    title: 'Прогресс и аналитика',
    desc: 'Еженедельная сводка с динамикой твоего состояния и саммари по записям за неделю',
    tag: 'Отслеживание',
  },
]

export function Features() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-brand-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-brand-500 uppercase tracking-widest">
            Возможности
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mt-2 mb-4">
            Всё, что нужно для эмоционального здоровья
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-brand-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${f.color} flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-brand-900">{f.title}</h3>
                      <span className="text-[10px] bg-brand-100 text-brand-600 px-2 py-0.5 rounded-full font-medium">
                        {f.tag}
                      </span>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
