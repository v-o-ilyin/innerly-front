import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const benefits = [
  "Помощь в тревожных ситуациях прямо в моменте",
  "Ежедневные советы под твою тему",
  "Персональная обратная связь от ИИ",
  "Медитации и упражнения для саморефлексии",
  "Еженедельная аналитика твоего прогресса",
  "Удобно — всё в Telegram, без лишних приложений",
];

export function Offer() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-violet-200 text-sm font-semibold uppercase tracking-widest mb-4">
          Начни прямо сейчас
        </span>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Твоё эмоциональное здоровье
          <br />
          важнее, чем ты думаешь
        </h2>
        <p className="text-violet-200 mb-10 max-w-xl mx-auto text-lg">
          Innerly — это не замена психологу. Это дневник с живым откликом,
          который помогает понять себя и не оставаться один на один с эмоциями
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-lg mx-auto mb-10 border border-white/20">
          <p className="text-violet-200 text-sm mb-5 font-medium">
            Что ты получаешь:
          </p>
          <ul className="space-y-3 text-left mb-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-violet-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-white text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className="w-full bg-white text-violet-700 hover:bg-violet-50 shadow-lg text-base font-bold"
            asChild
          >
            <a href="https://t.me/" target="_blank" rel="noreferrer">
              Открыть Innerly в Telegram
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
