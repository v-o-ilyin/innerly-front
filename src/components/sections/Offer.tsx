import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: 'Месяц',
    price: '799',
    period: '/ месяц',
    highlight: false,
    features: [
      'Помощь в тревожных ситуациях прямо в моменте',
      'Ежедневные советы под твою тему',
      'Персональная обратная связь от ИИ',
      'Медитации и упражнения для саморефлексии',
      'Еженедельная аналитика твоего прогресса',
      'Всё в Telegram, без лишних приложений',
    ],
  },
  {
    name: '3 месяца',
    price: '1 999',
    period: '/ 3 месяца',
    badge: 'Выгоднее на 17%',
    highlight: true,
    features: [
      'Помощь в тревожных ситуациях прямо в моменте',
      'Ежедневные советы под твою тему',
      'Персональная обратная связь от ИИ',
      'Медитации и упражнения для саморефлексии',
      'Еженедельная аналитика твоего прогресса',
      'Приоритетная поддержка',
    ],
  },
];

export function Offer() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block text-violet-200 text-sm font-semibold uppercase tracking-widest mb-4">
          Начни прямо сейчас
        </span>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Твоё эмоциональное здоровье
          <br />
          важнее, чем ты думаешь
        </h2>
        <p className="text-violet-200 mb-4 max-w-xl mx-auto">
          Innerly — это не замена психологу. Это дневник с живым откликом,
          который помогает понять себя и не оставаться один на один с эмоциями
        </p>
        <p className="text-white/70 text-sm mb-10">
          Первые <span className="text-white font-semibold">7 дней бесплатно</span> — без привязки карты
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col gap-6 border text-left ${
                plan.highlight
                  ? 'bg-white border-white shadow-2xl shadow-black/20'
                  : 'bg-white/10 border-white/20'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <div>
                <p className={`text-sm font-semibold mb-2 ${plan.highlight ? 'text-violet-500' : 'text-violet-200'}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-black ${plan.highlight ? 'text-violet-950' : 'text-white'}`}>
                    {plan.price} ₽
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? 'text-slate-400' : 'text-violet-300'}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-violet-500' : 'text-violet-300'}`} />
                    <span className={plan.highlight ? 'text-slate-600' : 'text-white/90'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={
                  plan.highlight
                    ? 'w-full bg-violet-600 text-white hover:bg-violet-700'
                    : 'w-full bg-white text-violet-700 hover:bg-violet-50'
                }
                asChild
              >
                <a href="https://t.me/" target="_blank" rel="noreferrer">
                  Попробовать бесплатно
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-violet-300/70 text-xs mt-8">
          После триала — выбери удобный тариф. Никаких скрытых платежей
        </p>
      </div>
    </section>
  );
}
