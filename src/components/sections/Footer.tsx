export function Footer() {
  return (
    <footer className="py-8 px-6 bg-stone-900 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <img src="/image.png" alt="Innerly" className="w-full h-full object-cover" />
        </div>
        <span className="font-bold text-white">Innerly</span>
      </div>
      <p className="text-stone-400 text-sm">
        © 2026 Innerly · Дневник с поддержкой ИИ
      </p>
    </footer>
  );
}
