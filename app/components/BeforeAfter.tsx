export default function BeforeAfter() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            See Sample Transformations
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Illustrative before/after placeholders demonstrating typical outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="grid grid-cols-2">
              <div className="h-56 flex items-center justify-center bg-rose-100 dark:bg-rose-900/20">
                <div className="text-center">
                  <div className="text-5xl">📷</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Before</div>
                </div>
              </div>
              <div className="h-56 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/20">
                <div className="text-center">
                  <div className="text-5xl">📷</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">After</div>
                </div>
              </div>
            </div>
            <div className="p-4 text-sm text-zinc-600 dark:text-zinc-400">
              Acne management example: reduced inflammation and improved clarity
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="grid grid-cols-2">
              <div className="h-56 flex items-center justify-center bg-rose-100 dark:bg-rose-900/20">
                <div className="text-center">
                  <div className="text-5xl">📷</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Before</div>
                </div>
              </div>
              <div className="h-56 flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/20">
                <div className="text-center">
                  <div className="text-5xl">📷</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">After</div>
                </div>
              </div>
            </div>
            <div className="p-4 text-sm text-zinc-600 dark:text-zinc-400">
              Pigmentation care example: more even tone and radiance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
