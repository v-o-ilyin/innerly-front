import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-violet-50 via-white to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-violet-950 leading-tight mb-4">
              ИИ-дневник в Telegram, который помогает понять себя, справиться с{' '}
              <span className="text-shimmer">тревогой</span> и стрессом
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-xl font-medium">
              Разгрузи голову и разберись с эмоциями за 5 минут в день
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="https://t.me/innerly_helper_bot" target="_blank" rel="noreferrer" onClick={() => ym(108444641, 'reachGoal', 'heroButton')}>
                  Начать в Telegram
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0 relative">
            <div className="w-64 h-[540px] bg-gradient-to-b from-violet-900 to-violet-950 rounded-[44px] shadow-2xl shadow-violet-300/60 p-[10px] relative">
              <div className="w-full h-full bg-white rounded-[36px] overflow-hidden flex flex-col">

                {/* iOS status bar */}
                <div className="bg-violet-600 grid grid-cols-3 items-center px-4 pt-2 pb-1">
                  <span className="text-white text-[10px] font-semibold">9:41</span>
                  {/* Dynamic Island */}
                  <div className="w-16 h-4 bg-black rounded-full justify-self-center" />
                  <div className="flex items-center gap-1 justify-self-end">
                    <svg className="w-3 h-2 fill-white" viewBox="0 0 16 12"><rect x="0" y="3" width="3" height="9" rx="1"/><rect x="4.5" y="2" width="3" height="10" rx="1"/><rect x="9" y="0" width="3" height="12" rx="1"/><rect x="13.5" y="1" width="2.5" height="11" rx="1" opacity=".4"/></svg>
                    <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
                    <svg className="w-4 h-3 fill-white" viewBox="0 0 25 12"><rect x="0" y="1" width="21" height="10" rx="2.5" stroke="white" strokeWidth="1.5" fill="none"/><rect x="1.5" y="2.5" width="15" height="7" rx="1.5"/><path d="M23 4.5v3a1.5 1.5 0 0 0 0-3z"/></svg>
                  </div>
                </div>

                {/* Chat header */}
                <div className="bg-violet-600 px-4 pt-1 pb-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-base">🌸</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">Innerly</p>
                    <p className="text-violet-200 text-[10px]">бот онлайн</p>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="flex-1 bg-[#f0ece8] p-3 flex flex-col gap-2 overflow-hidden">
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm max-w-[85%]">
                    <p className="text-[11px] text-slate-700 leading-snug">
                      Доброе утро! ☀️ Совет дня: замечай, когда тело напрягается — это первый сигнал тревоги
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm max-w-[75%]">
                    <p className="text-[11px] text-slate-700">
                      Как ты сейчас? 🌿
                    </p>
                  </div>
                  <div className="ml-auto bg-violet-600 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[70%]">
                    <p className="text-[11px] text-white">Немного тревожно...</p>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm max-w-[88%]">
                    <p className="text-[11px] text-slate-700 leading-snug">
                      Понимаю 💜 Давай разберёмся вместе. Что происходит?
                    </p>
                  </div>
                  <div className="ml-auto bg-violet-600 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[72%]">
                    <p className="text-[11px] text-white">Поспорила с подругой</p>
                  </div>
                </div>

                {/* Input bar */}
                <div className="bg-white px-3 py-2 flex items-center gap-2 border-t border-slate-100">
                  <div className="flex-1 bg-slate-100 rounded-full px-3 py-1.5">
                    <p className="text-[11px] text-slate-400">Написать...</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"><path d="M2 21L23 12 2 3v7l15 2-15 2z"/></svg>
                  </div>
                </div>

              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -right-4 top-20 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2">
              <span className="text-lg">📔</span>
              <div>
                <p className="text-xs font-semibold text-slate-800">
                  12 записей
                </p>
                <p className="text-[10px] text-slate-500">за эту неделю</p>
              </div>
            </div>
            <div className="absolute -left-4 bottom-28 bg-white rounded-2xl shadow-lg px-3 py-2 flex items-center gap-2">
              <span className="text-lg">😌</span>
              <div>
                <p className="text-xs font-semibold text-slate-800">
                  Стало легче
                </p>
                <p className="text-[10px] text-slate-500">настроение ↑</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
