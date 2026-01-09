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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Solace Project */}
          <Link
            href="/projects/solace"
            className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group flex flex-col"
          >
            {/* Cover Photo */}
            <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center overflow-hidden">
              {/* Replace this div with Next.js Image component when adding actual image */}
              {/* <Image src="/path-to-cover.jpg" alt="Solace" fill className="object-cover group-hover:scale-105 transition-transform duration-300" /> */}
              <p className="text-zinc-400 dark:text-zinc-600 text-xs">Cover Photo</p>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-light tracking-tight text-black dark:text-zinc-50 mb-2 group-hover:opacity-70 transition-opacity">
                Solace
              </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
              A gamified wellness app designed to support iron workers in recovering their physical and mental well‑being.
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                Figma
              </span>
              <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                Expo
              </span>
              <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                React
              </span>
              <span className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                Next.js
              </span>
            </div>
              <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-500 flex items-center group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors mt-auto">
                View case study
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}

