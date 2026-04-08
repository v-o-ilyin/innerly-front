import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-violet-950 mb-4 leading-tight">
          Попробуй прямо сейчас — это бесплатно
        </h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          Первые 2 дня без ограничений и без привязки карты.
          Просто открой Telegram и начни.
        </p>
        <Button size="lg" asChild>
          <a href="https://t.me/" target="_blank" rel="noreferrer">
            Начать в Telegram
            <ArrowRight className="w-5 h-5" />
          </a>
        </Button>
      </div>
    </section>
  )
}
