import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-violet-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-rose-400 flex items-center justify-center">
            <span className="text-white text-sm">🌸</span>
          </div>
          <span className="font-bold text-violet-900 text-lg">Innerly</span>
        </div>
        <Button size="sm" asChild>
          <a href="https://t.me/innerly_helper_bot" target="_blank" rel="noreferrer" onClick={() => ym(108444641, 'reachGoal', 'menu-button')}>
            Попробовать бесплатно
          </a>
        </Button>
      </div>
    </header>
  )
}
