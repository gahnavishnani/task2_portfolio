function About() {
  return (
    <div className="min-h-screen pt-20 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <div className="max-w-3xl mx-auto text-lg space-y-4">
        <p>
          I'm <span className="text-green-400 font-semibold">Gahna Vishnani</span>, a passionate Full Stack AI Web Developer who loves building smart, accessible, and user-friendly applications.
        </p>
        <p>
          I enjoy combining technologies like React, Tailwind CSS, and Python with AI tools to solve real-world problems. I'm currently working on projects like "Sukhi Suvidha", an AI-based medical simplifier for rural India.
        </p>
        <p>
          I believe in continuous learning and I'm always excited to explore new ideas, build innovative projects, and grow as a developer.
        </p>
      </div>

      <div className="mt-10 text-left max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>React.js, JavaScript, HTML5, CSS3</li>
            <li>Tailwind CSS, Bootstrap</li>
            <li>Java (OOP), Git & GitHub</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">Soft Skills</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Team Collaboration</li>
            <li>Time Management</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-green-400 mb-2">AI Tools</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>OpenAI (ChatGPT API)</li>
            <li>EasyOCR (text extraction)</li>
            <li>Google Translate API</li>
            <li>gTTS / Coqui TTS (Text-to-Speech)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;