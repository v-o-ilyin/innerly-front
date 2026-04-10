import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img src="/image.png" alt="Innerly" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-brand-900 text-lg">Innerly</span>
        </div>
        <Button size="sm" asChild>
          <a href="https://t.me/innerly_ai_bot" target="_blank" rel="noreferrer" onClick={() => ym(108444641, 'reachGoal', 'menu-button')}>
            Попробовать бесплатно
          </a>
        </Button>
      </div>
    </header>
  )
}
