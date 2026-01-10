import Link from "next/link";

export default function LendItOutProject() {
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
          {/* <Image src="/path-to-image.jpg" alt="LendItOut Project Header" fill className="object-cover rounded-lg" /> */}
          <p className="text-zinc-400 dark:text-zinc-600 text-sm">Project Header Image</p>
        </div>

        <article className="space-y-12">
          <div>
            <h1 className="text-4xl font-light tracking-tight text-black dark:text-zinc-50 mb-4 sm:text-5xl">
              LendItOut
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
              A peer-to-peer marketplace app designed to make it easier to <strong>borrow everyday items instead of buying them</strong>. Many people purchase tools, equipment, or hobby items they only use once or twice, resulting in financial waste and clutter. LendItOut allows users to <strong>rent items for a set period of time</strong> (for example, borrowing a drill for one day), with an optional <strong>"try before you buy"</strong> feature that lets users purchase the item after rental if they like it.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-200">My Roles:</span> UI/UX Designer, UX Researcher
              </div>
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Team Size:</span> 7
              </div>
              <div>
                <span className="font-medium text-zinc-900 dark:text-zinc-200">Timeline:</span> January 2025 – May 2025
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                Figma
              </span>
              <span className="text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                FigJam
              </span>
              <span className="text-xs px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded">
                Google Forms
              </span>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Problem</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              People frequently need items only <strong>temporarily</strong>, such as tools, camping gear, or specialty equipment:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Buying rarely used items is <strong>expensive and wasteful</strong></li>
              <li>Borrowing from friends isn't always possible or convenient</li>
              <li>Existing rental businesses are often costly and limited in inventory</li>
              <li>Many items sit unused in homes, even though others nearby could benefit from them</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4 italic border-l-4 border-zinc-300 dark:border-zinc-700 pl-4">
              These challenges revealed a clear gap: <strong>There is no easy, community-driven way to temporarily borrow everyday items and only purchase them if they're truly worth owning.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Solution</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              LendItOut addresses this need through a <strong>localized lending marketplace</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Users can <strong>list items they own</strong> and rent them out for a daily/weekly fee</li>
              <li>Borrowers can <strong>rent instead of buying</strong>, saving money and storage space</li>
              <li>After the trial period, users have the <strong>option to purchase</strong> the item directly</li>
              <li>Built-in messaging and reviews support <strong>trust and safety between users</strong></li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4">
              By combining renting and optional purchasing, LendItOut encourages <strong>sustainable consumption</strong>, reduces clutter, and makes access to useful items easier and more affordable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Target Audience</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Students, renters, and young adults with limited storage space</li>
              <li>People who only need tools or equipment occasionally</li>
              <li>Budget-conscious users trying to avoid unnecessary purchases</li>
              <li>Environmentally-aware users interested in reuse and sharing economies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Persona</h2>
            
            <div className="bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-4">Alex — Budget-conscious student</h3>
              <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4 mb-4">
                <li><strong className="text-zinc-900 dark:text-zinc-100">Age:</strong> 20</li>
                <li><strong className="text-zinc-900 dark:text-zinc-100">Lives in small apartment</strong> with limited storage</li>
                <li>Often needs tools for DIY projects and school assignments</li>
                <li>Hesitant to buy expensive items he'll use once or twice</li>
              </ul>
              
              <div className="mt-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Goals</h4>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>Save money</li>
                  <li>Avoid clutter</li>
                  <li>Try items before committing to buying</li>
                  <li>Find items nearby quickly</li>
                </ul>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Frustrations</h4>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>Buying items he barely uses</li>
                  <li>Rentals from big companies are too expensive</li>
                  <li>Hard to know if something is worth buying without trying it first</li>
                </ul>
              </div>
            </div>

            {/* Image placeholder for Persona */}
            <div className="w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
              <p className="text-zinc-400 dark:text-zinc-600 text-sm">Persona Image</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">User Stories</h2>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex items-start">
                <span className="text-zinc-400 dark:text-zinc-600 mr-2">•</span>
                <span><em>As a borrower</em>, I want to <strong>rent an item for a short period</strong> so I don't have to buy it.</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-400 dark:text-zinc-600 mr-2">•</span>
                <span><em>As an owner</em>, I want to <strong>earn money by lending things I rarely use</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-400 dark:text-zinc-600 mr-2">•</span>
                <span><em>As a borrower</em>, I want the option to <strong>buy an item after renting</strong> if I end up liking it.</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-400 dark:text-zinc-600 mr-2">•</span>
                <span><em>As a user</em>, I want to <strong>see reviews and ratings</strong> so I can trust the person I'm renting from.</span>
              </li>
              <li className="flex items-start">
                <span className="text-zinc-400 dark:text-zinc-600 mr-2">•</span>
                <span><em>As a user</em>, I want <strong>clear pricing and timeframes</strong> so I know exactly what I'm paying for.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">My Approach</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">UX Research</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  I led research activities to understand how people currently access rarely used items. Methods included:
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4 mb-2">
                  <li>Surveys to identify borrowing vs buying behaviours</li>
                  <li>Interviews exploring frustrations with purchases and rentals</li>
                  <li>Affinity mapping to synthesize patterns</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                  From research, I learned:
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>Many users regret impulse purchases of tools and equipment</li>
                  <li>Storage space is a major concern for renters and students</li>
                  <li>People like "try before you buy" when committing to expensive items</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                  These insights shaped the direction of our core features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">Conceptualization & Prototyping</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  Working with the team, I:
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4 mb-2">
                  <li>Created <strong>task flows</strong> for item browsing, renting, and purchasing</li>
                  <li>Designed <strong>low-fidelity wireframes</strong> in Figma</li>
                  <li>Iterated to <strong>mid- and high-fidelity prototypes</strong> based on feedback</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2 mb-2">
                  Every iteration focused on clarity:
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>Simple pricing breakdown</li>
                  <li>Clear rental timeframe selection</li>
                  <li>Visible "Buy after trial" option</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">Usability Testing</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                  We conducted testing sessions with peers and potential users to evaluate:
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4 mb-2">
                  <li>Clarity of renting vs buying</li>
                  <li>Trust and safety perceptions</li>
                  <li>Ease of finding specific items</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2 mb-2">
                  Key improvements after testing:
                </p>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>Added clearer <strong>callouts for trial-to-purchase flow</strong></li>
                  <li>Simplified item listing form</li>
                  <li>Added <strong>visual indicators of item condition & reviews</strong></li>
                </ul>
              </div>
            </div>

            {/* Image placeholder for Wireframes and Prototypes */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Task Flows</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Key Features & Rationale</h2>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <li>
                <strong className="text-black dark:text-zinc-50">Rent for a set time</strong>
                <br />
                <span className="text-sm">Prevents unnecessary purchases. Ideal for one-time or short-term use items.</span>
              </li>
              <li>
                <strong className="text-black dark:text-zinc-50">Try-before-you-buy option</strong>
                <br />
                <span className="text-sm">Reduces buyer's remorse. Lets users test items realistically.</span>
              </li>
              <li>
                <strong className="text-black dark:text-zinc-50">Peer-to-peer marketplace</strong>
                <br />
                <span className="text-sm">Enables community sharing. Allows owners to earn passive income.</span>
              </li>
              <li>
                <strong className="text-black dark:text-zinc-50">Messaging and reviews</strong>
                <br />
                <span className="text-sm">Builds trust between users. Encourages responsible behaviour.</span>
              </li>
              <li>
                <strong className="text-black dark:text-zinc-50">Transparent pricing</strong>
                <br />
                <span className="text-sm">Shows rental cost vs purchase cost. Helps users make informed decisions.</span>
              </li>
            </ul>

            {/* Image placeholder for UI Screens */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Item Browsing</p>
              </div>
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Rental Selection</p>
              </div>
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Try-Before-You-Buy Flow</p>
              </div>
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Messaging & Reviews</p>
              </div>
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">Item Listing</p>
              </div>
              <div className="w-full h-80 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">User Dashboard</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Process Highlights</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">Research & Discovery</h3>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>Conducted surveys and interviews</li>
                  <li>Identified user pain points</li>
                  <li>Defined primary persona(s)</li>
                  <li>Analyzed existing marketplace apps</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">Ideation & Design</h3>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>Brainstormed feature ideas with the team</li>
                  <li>Designed core flows (borrow, lend, buy-after-trial)</li>
                  <li>Created wireframes and clickable prototypes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black dark:text-zinc-50 mb-2">Testing & Iteration</h3>
                <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400 ml-4">
                  <li>Ran usability tests</li>
                  <li>Collected qualitative feedback</li>
                  <li>Improved clarity and navigation</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Outcome</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Delivered a <strong>functional high-fidelity prototype</strong> in Figma</li>
              <li>Built a clear <strong>end-to-end user journey</strong> for renting and trial-purchase</li>
              <li>Strengthened my experience in <strong>UX research and marketplace design</strong></li>
              <li>Practiced collaboration in a <strong>team of 7 with shared design responsibilities</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black dark:text-zinc-50 mb-3">Learnings</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 ml-4">
              <li>Marketplace design requires <strong>balancing user trust and convenience</strong></li>
              <li>Research insights are crucial for prioritizing core features</li>
              <li>Clear communication is essential when designing in a larger team</li>
              <li>Iteration through testing greatly improves usability</li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
}

