import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <main className="flex flex-col items-center justify-center gap-8 text-center px-8">
        <h1 className="text-4xl font-light tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
          Sarah J.X. Wang
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          UI/UX Designer & Frontend Developer
        </p>
        <div className="pt-8">
          <p className="text-xl text-zinc-500 dark:text-zinc-500 mb-4">
            Under Construction
          </p>
          <Link
            href="/projects"
            className="text-base text-zinc-900 dark:text-zinc-100 hover:underline"
          >
            View Projects →
          </Link>
        </div>
      </main>
    </div>
  );
}
