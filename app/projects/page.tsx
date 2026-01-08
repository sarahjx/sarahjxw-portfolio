import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <nav className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-light tracking-tight text-black dark:text-zinc-50 hover:opacity-70 transition-opacity"
            >
              Sarah J.X. Wang
            </Link>
            <div className="flex gap-6 text-sm">
              <Link
                href="/"
                className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-black dark:text-zinc-50 font-medium"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-4xl font-light tracking-tight text-black dark:text-zinc-50 mb-4 sm:text-5xl">
            Projects
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            A collection of UI/UX design and frontend development work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will go here */}
          {/* Example placeholder card structure */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
            <h2 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">
              Project Title
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Project description goes here.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                React
              </span>
              <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
