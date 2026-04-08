import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Месяц",
    price: "799",
    period: "/ месяц",
    highlight: false,
    features: [
      "Утренние советы каждый день",
      "Вечерний дневник с обратной связью",
      "Помощь в момент тревоги",
      "Еженедельная сводка",
      "Медитации и упражнения",
    ],
  },
  {
    name: "3 месяца",
    price: "1 999",
    period: "/ 3 месяца",
    badge: "Выгоднее на 17%",
    highlight: true,
    features: [
      "Всё из тарифа «Месяц»",
      "Приоритетная поддержка",
      "Ранний доступ к новым функциям",
      "Экономия 398 ₽",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-violet-500 uppercase tracking-widest">
            Тарифы
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-violet-950 mt-2 mb-4">
            Попробуй бесплатно
          </h2>
          <p className="text-slate-500 max-w-md mx-auto">
            Первые{" "}
            <span className="font-semibold text-violet-600">
              2 дня бесплатно
            </span>{" "}
            — без привязки карты. Отмени в любой момент
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-violet-600 text-white shadow-2xl shadow-violet-300/50 scale-[1.02]"
                  : "bg-white border border-violet-100 shadow-sm"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}
              <div>
                <p
                  className={`text-sm font-semibold mb-2 ${plan.highlight ? "text-violet-200" : "text-violet-500"}`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-violet-950"}`}
                  >
                    {plan.price} ₽
                  </span>
                  <span
                    className={`text-sm mb-1 ${plan.highlight ? "text-violet-200" : "text-slate-400"}`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-violet-200" : "text-violet-500"}`}
                    />
                    <span
                      className={
                        plan.highlight ? "text-violet-100" : "text-slate-600"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlight ? "secondary" : "default"}
                className={
                  plan.highlight
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : ""
                }
              >
                <a href="https://t.me/innerly_helper_bot" target="_blank" rel="noreferrer">
                  Попробовать бесплатно
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          После триала — выбери удобный тариф. Никаких скрытых платежей
        </p>
      </div>
    </section>
  );
}
