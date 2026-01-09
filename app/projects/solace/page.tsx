import Link from "next/link";

export default function SolaceProject() {
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
                className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Header Image */}
        <div className="w-full h-80 md:h-[500px] lg:h-[600px] bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 mb-12 flex items-center justify-center overflow-hidden">
          {/* Replace this div with Next.js Image component when adding actual image */}
          {/* <Image src="/path-to-image.jpg" alt="Solace Project Header" fill className="object-cover rounded-lg" /> */}
          <p className="text-zinc-400 dark:text-zinc-600 text-sm">Project Header Image</p>
        </div>

        <article className="space-y-12">
          <div>
            <h1 className="text-4xl font-light tracking-tight text-black dark:text-zinc-50 mb-4 sm:text-5xl">
              Solace
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
              A gamified wellness app designed to support iron workers in recovering their physical and mental well‑being. Iron work often involves intense physical strain, unpredictable schedules, and cultural pressure to "tough it out," leading many workers to unhealthy coping mechanisms like painkillers or alcohol. Solace addresses these challenges with an engaging, AI‑personalized recovery experience built around daily exercises and a responsive mascot system.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-200">My Roles:</span> Project Manager, UX Researcher, Full‑Stack Developer
              </div>
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Team Size:</span> 7
              </div>
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Timeline:</span> September 2025 – December 2025
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                Figma
              </span>
              <span className="text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                Expo
              </span>
              <span className="text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                React
              </span>
              <span className="text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                Next.js
              </span>
              <span className="text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                JavaScript
              </span>
              <span className="text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                OpenAI
              </span>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Problem</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Iron workers face unique physical and mental challenges for which most wellness tools are poorly suited:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Recovery advice often assumes predictable work schedules.</li>
              <li>Generic wellness apps do not address chronic physical strain.</li>
              <li>There's cultural stigma around self‑care in trade environments.</li>
              <li>Workers resort to harmful coping strategies due to lack of better options.</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4 italic">
              These factors revealed a clear gap: <strong>no existing tools provide engaging, practical, and personalized recovery support for this specific audience.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Solution</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Solace fills this gap by transforming recovery into a <strong>gamified, AI-personalized experience</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Users complete daily physical and mental exercises to <strong>earn XP, build streaks, and strengthen a mascot</strong>, which mirrors their wellness progress.</li>
              <li>Missing a day injures the mascot, providing a visual and motivational reminder to engage.</li>
              <li>The app adapts recovery routines to match the user's type of work, pain areas, and energy levels.</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4">
              By making wellness engaging, rewarding, and practical, Solace encourages sustainable, healthy habits instead of short-term fixes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Target Audience</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Iron workers aged 20–40</li>
              <li>Experiencing chronic pain, fatigue, and stress</li>
              <li>May have developed unhealthy coping habits due to time constraints and lack of resources</li>
              <li>Looking for accessible, motivating, and practical ways to recover physically and mentally</li>
            </ul>
            
            {/* Image placeholder for Personas */}
            <div className="mt-6 space-y-4">
              <div className="w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Persona Image</p>
              </div>
              <div className="w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">User Stories</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">My Approach</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">Leadership & Project Management</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  I structured our workflow around <strong>weekly sprint standups</strong> and meetings with instructors and advisors, ensuring the team stayed coordinated and on track. I aimed to create an environment where progress was clear but creative experimentation was encouraged. I documented decisions and feedback in a shared Google Drive and Notion, which helped us track progress and reflect on learned insights as we pivoted or refined features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">Curiosity-Driven UX Research</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  I invested heavily in UX research to truly understand iron workers' lived experiences. Through interviews, surveys, and empathy mapping, I learned:
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>What recovery looks like in the context of long shifts</li>
                  <li>How workers think about "self‑care"</li>
                  <li>What motivates them and what feels like extra work</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                  This curiosity shaped feature prioritization and ensured our designs responded to real needs, not assumptions. Every feature decision was informed by questions like: <em>Will this fit into their day? Will it feel motivating rather than like another task?</em>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">Conceptualization & Prototyping</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  We walked through low‑fidelity wireframes, mid‑fidelity flows, and high‑fidelity interactive prototypes. Every design decision was backed by research insights — not just aesthetic preferences. Where possible, we included user quotes and validation points to support decisions.
                </p>
                
                {/* Image placeholder for Wireframes and Prototypes */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <p className="text-zinc-400 dark:text-zinc-600 text-sm">Low-Fidelity Wireframes</p>
                  </div>
                  <div className="w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <p className="text-zinc-400 dark:text-zinc-600 text-sm">Mid-Fidelity Prototypes</p>
                  </div>
                  <div className="w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <p className="text-zinc-400 dark:text-zinc-600 text-sm">High-Fidelity Prototypes</p>
                  </div>
                  <div className="w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <p className="text-zinc-400 dark:text-zinc-600 text-sm">User Flow Diagrams</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">Design & Development Integration</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  I helped implement the app in <strong>Expo</strong> and connected our AI systems using <strong>OpenAI APIs</strong> to deliver personalized prompts and mascot speech interactions. Bridging UX thinking with real implementation ensured our vision wasn't lost in translation between design and code. This collaboration improved feasibility and helped us refine designs with engineering constraints in mind.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Process Highlights</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">Research & Discovery</h3>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>Interviewed target users</li>
                  <li>Defined personas</li>
                  <li>Researched competitors</li>
                  <li>Synthesized research insights into design opportunities</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                  This phase shaped the core mechanics of the app (XP/streak system and mascot), showing how emotional engagement could drive behavioral changes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">Ideation & Design</h3>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>Developed wireframes for key screens</li>
                  <li>Designed flows illustrating how users would discover and complete activities</li>
                  <li>Iterated designs based on feedback and usability testing</li>
                </ul>
                
                {/* Image placeholder for Design Iterations */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <p className="text-zinc-400 dark:text-zinc-600 text-xs">Design Iteration 1</p>
                  </div>
                  <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <p className="text-zinc-400 dark:text-zinc-600 text-xs">Design Iteration 2</p>
                  </div>
                  <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                    <p className="text-zinc-400 dark:text-zinc-600 text-xs">Final Design</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">Testing & Iteration</h3>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>Conducted usability tests with peers, mentors, and target users</li>
                  <li>Refined interactions based on observed friction or confusion</li>
                  <li>Improved clarity and feedback loops (e.g., streak breaks, XP rewards)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Key Features & Rationale</h2>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li>
                <strong className="text-black dark:text-zinc-50">Mascot System</strong>
                <br />
                <span className="text-sm">Reinforces emotional connection to progress. Visual feedback motivates daily engagement.</span>
              </li>
              <li>
                <strong className="text-black dark:text-zinc-50">Personalized Daily Checklist</strong>
                <br />
                <span className="text-sm">AI‑generated routines based on user context. Reduces decision fatigue.</span>
              </li>
              <li>
                <strong className="text-black dark:text-zinc-50">Exercise Catalogue</strong>
                <br />
                <span className="text-sm">Gives users autonomy and variety. Encourages exploration beyond minimum requirements.</span>
              </li>
              <li>
                <strong className="text-black dark:text-zinc-50">Mental Recovery Tools</strong>
                <br />
                <span className="text-sm">Supports emotional wellness with low‑effort practices.</span>
              </li>
              <li>
                <strong className="text-black dark:text-zinc-50">XP & Streak System</strong>
                <br />
                <span className="text-sm">Engages users through progression and game mechanics.</span>
              </li>
            </ul>
            
            {/* Image placeholder for UI Screens */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Mascot System UI</p>
              </div>
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Daily Checklist Screen</p>
              </div>
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Exercise Catalogue</p>
              </div>
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">XP & Streak Dashboard</p>
              </div>
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Mental Recovery Tools</p>
              </div>
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">User Flow Diagram</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Outcome</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Delivered a <strong>fully functional, gamified prototype</strong> integrating both physical and mental wellness routines</li>
              <li>Successfully <strong>translated user research into engaging design and development features</strong></li>
              <li>The project was developed for the BCIT D3 FSWD Annual Showcase, where it was presented as a polished, end-to-end product concept and <strong>earned 2nd place overall</strong></li>
              <li>Demonstrated that trade-specific wellness tools can be both practical and motivating</li>
            </ul>
            
            {/* Image placeholder for Metrics and Feedback */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Metrics & Analytics</p>
              </div>
              <div className="w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">User Feedback & Testimonials</p>
              </div>
              <div className="w-full h-48 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center md:col-span-2">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Showcase Presentation / Awards</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Learnings</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Balancing multiple roles — project management, UX research, and full-stack development — strengthened my ability to connect <strong>user insights to technical execution</strong></li>
              <li>Deep curiosity about the user group was critical in shaping meaningful features</li>
              <li>The importance of aligning <strong>research insights with development</strong></li>
              <li>Clear communication and structured sprints are essential for cross-functional collaboration</li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}

