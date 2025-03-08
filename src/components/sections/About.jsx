export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Hi, I'm a passionate web developer with a love for creating
            interactive and user-friendly web applications. I have experience in
            both front-end and back-end development, and I enjoy working with
            modern technologies to build efficient and scalable solutions.
          </p>
          <p className="text-gray-300 mb-6">
            In my free time, I love to explore new technologies and work on
            personal projects that challenge my skills. I'm always eager to
            learn and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};
