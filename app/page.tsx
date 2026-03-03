export default function PlaygroundHome() {
  return (
    <main className="min-h-screen bg-slate-50 p-10 space-y-10">
      <h1 className="text-4xl font-semibold tracking-tight">UI Playground</h1>

      <p className="max-w-xl text-slate-600">
        Tempat eksperimen style: card, border, shadow, layout, spacing, typography.
      </p>

      <div className="flex flex-wrap gap-3">
        <a className="rounded-xl border bg-white px-4 py-2 text-sm font-semibold" href="/cards">
          Cards
        </a>
        <a className="rounded-xl border bg-white px-4 py-2 text-sm font-semibold" href="/layout">
          Layout
        </a>
        <a className="rounded-xl border bg-white px-4 py-2 text-sm font-semibold" href="/typography">
          Typography
        </a>
      </div>
    </main>
  );
}
