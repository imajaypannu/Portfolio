export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Ajay Pannu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer | Designer | Problem Solver
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences. 
            Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Git', 'AWS'].map((skill) => (
              <div key={skill} className="bg-gray-700/50 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
                <p className="text-white font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Project {project}</h3>
                  <p className="text-gray-400 mb-4">
                    A brief description of this amazing project and the technologies used to build it.
                  </p>
                  <div className="flex gap-2">
                    <a href="#" className="text-blue-400 hover:text-blue-300">View Demo →</a>
                    <a href="#" className="text-gray-400 hover:text-gray-300">GitHub →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            I&apos;m always open to new opportunities and interesting projects.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="mailto:your.email@example.com" className="text-blue-400 hover:text-blue-300 text-lg">
              Email
            </a>
            <a href="https://github.com" className="text-blue-400 hover:text-blue-300 text-lg">
              GitHub
            </a>
            <a href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 text-lg">
              LinkedIn
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300 text-lg">
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-400">
        <p>© 2026 Your Name. All rights reserved.</p>
      </footer>
    </main>
  );
}
