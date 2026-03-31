export function Footer() {
  return (
    <footer className="py-8 px-6 bg-violet-950 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-rose-400 flex items-center justify-center">
          <span className="text-white text-xs">🌸</span>
        </div>
        <span className="font-bold text-white">Innerly</span>
      </div>
      <p className="text-violet-400 text-sm">
        © 2026 Innerly · Дневник с поддержкой ИИ
      </p>
    </footer>
  );
}
