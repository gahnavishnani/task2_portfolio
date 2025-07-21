function Projects() {
  return (
    <div className="min-h-screen pt-20 px-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Project 1: Sukhi Suvidha */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-green-400 mb-2">Sukhi Suvidha</h3>
          <p>
            An AI-powered medical info simplifier for rural India. Supports OCR, translation into 5 local languages, and voice output for better accessibility.
          </p>
        </div>

        {/* Project 2: Bank Management System */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold text-green-400 mb-2">Bank Management System</h3>
          <p>
            A Java-based console project to manage customer banking operations like account creation, balance check, deposit, and withdrawal using OOP concepts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;