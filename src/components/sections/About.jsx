import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "TailwindCSS",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "API Development",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm an Army veteran, cybersecurity professional and passionate
              developer with 2.5+ years of experience in the industry. Currently
              expanding more into software development through a rigorous
              bootcamp, gaining expertise in full-stack development with an
              emphasis on backend. Passionate about briding cybersecurity with
              software Engineeringto develop scalable and secure applications.
            </p>
            <p className="text-gray-300 mb-6">
              In my free time, I love to game with friends and work on personal
              projects that grow my skills. I'm eager to learn and grow as a
              developer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                🧮 Education & Certifications
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Software Engineering </strong> - Western
                  Governors University (2028)
                </li>
                <li>
                  <strong> Software Development Bootcamp </strong> - University
                  of Central Florida (2025)
                </li>
                <li>
                  <strong> GIAC Security Essentials (GSEC) </strong> - SANS
                  (2023)
                </li>
                <li>
                  <strong> Certified Cybersecurity Bootcamp </strong> - Evolve
                  Security Academy (2022)
                </li>
                <li>
                  <strong> Security+ </strong> - CompTIA (2022)
                </li>
                <li>
                  <strong> A+ </strong> - CompTIA (2022)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                💼 Professional Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong>Cybersecurity Operations Specialist</strong> -
                      Dynasty Financial Partners (2024 - Present)
                    </li>
                    <li>
                      <strong>Cybersecurity Engineer / ISSE</strong> - Systems,
                      Planning & Analysis (2023 - 2024)
                    </li>
                    <li>
                      <strong>Cybersecurity Analyst</strong> - Hensel Phelps
                      (2022 - 2023)
                    </li>
                    <li>
                      <strong>Cloud/Security Engineer Intern</strong> - American
                      Family Insurance (2022 - 2022)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
