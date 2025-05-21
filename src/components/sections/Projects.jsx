import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                OpenAI Powered Resume Enhancer
              </h3>
              <p className="text-gray-400 mb-4">
                ResumePilot is an intelligent resume enhancement tool that
                leverages AI technology to help users create compelling,
                professional resumes. By combining React's powerful UI
                capabilities with an LLM model from OpenAI, ResumePilot helps
                job seekers optimize their resumes for better results.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "TypeScript",
                  "Express.js",
                  "API Development",
                  "JWT",
                  "PostgreSQL",
                  "Prompt Engineering",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Jarred13D/ResumePilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Hampton Lawn Solutions</h3>
              <p className="text-gray-400 mb-4">
                Hampton Lawn Solutions is a modern, mobile-friendly website I
                built for my brother’s lawn care business to help establish his
                brand and attract local clients. The site features a clean
                design, responsive layout and clear service breakdowns — all
                optimized for speed and accessibility. It was built with Astro
                and React, and deployed for fast, lightweight performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Astro",
                  "MDX",
                  "CSS",
                  "TypeScript",
                  "Netlify",
                  "CloudFlare",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"> Weather Dashboard</h3>
              <p className="text-gray-400 mb-4">
                Web application that allows user to search for current weather
                conditions and a 5-day forecast for any city. Fetches weather
                data from the OpenWeatherMap API.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "CSS", "HTML", "TypeScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Jarred13D/Weather-Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
