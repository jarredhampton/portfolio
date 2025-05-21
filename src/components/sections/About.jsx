import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "CSS",
    "TailwindCSS",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "API Development",
  ];

  const cloudDevOpsSkills = [
    "AWS",
    "Terraform",
    "Docker",
    "GitHub Actions",
    "Kubernetes",
    "CI/CD",
  ];

  const securitySkills = [
    "IAM",
    "Azure Sentinel",
    "SIEM",
    "Key Vaults / Secrets Management",
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
              I’m an Army veteran and cybersecurity professional turned
              full-stack engineer with a focus on backend and cloud-native
              systems. I’ve worked in security automation, cloud infrastructure
              and now I’m building secure, scalable applications using tools
              like Node.js, React, PostgreSQL and AWS.
              <p className="text-gray-300 mb-6">
                My background in cybersecurity gives me a strong foundation in
                building systems that don’t just work — they hold up under
                pressure. I enjoy working with infrastructure, APIs, and
                pipelines as much as writing application logic.
              </p>
            </p>
            <p className="text-gray-300 mb-6">
              Outside of work, I’m usually gaming with friends or building out
              side projects that help me sharpen my skills and explore new tech.
              Always learning, always shipping.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {cloudDevOpsSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Security</h3>
                <div className="flex flex-wrap gap-2">
                  {cloudDevOpsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">
                    🧮 Education & Certifications
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong> B.S. in Computer Science </strong> - Western
                      Governors University (2027)
                    </li>
                    <li>
                      <strong> Software Development Bootcamp </strong> -
                      University of Central Florida (2025)
                    </li>
                    <li>
                      <strong> GIAC Security Essentials (GSEC) </strong> - SANS
                      (2023)
                    </li>
                    <li>
                      <strong> Certified Cybersecurity Bootcamp </strong> -
                      Evolve Security Academy (2022)
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
                          <strong>Cybersecurity Engineer / ISSE</strong> -
                          Systems, Planning & Analysis (2023 - 2024)
                        </li>
                        <li>
                          <strong>Cybersecurity Analyst</strong> - Hensel Phelps
                          (2022 - 2023)
                        </li>
                        <li>
                          <strong>Cloud/Security Engineer Intern</strong> -
                          American Family Insurance (2022 - 2022)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
