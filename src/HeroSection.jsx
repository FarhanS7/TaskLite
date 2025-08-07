import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const mockTasks = [
    "Complete project proposal",
    "Review team feedback",
    "Schedule client meeting",
    "Update documentation",
    "Prepare presentation",
  ];

  useEffect(() => {
    setIsVisible(true);

    const taskInterval = setInterval(() => {
      setCurrentTaskIndex((prev) => (prev + 1) % mockTasks.length);
    }, 2000);

    return () => clearInterval(taskInterval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce opacity-20"
            style={{
              top: `${15 + i * 10}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i * 0.2}s`,
            }}
          >
            {i % 4 === 0 && (
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            )}
            {i % 4 === 1 && (
              <div className="w-4 h-4 border border-purple-400 rounded rotate-45"></div>
            )}
            {i % 4 === 2 && (
              <div className="w-2 h-6 bg-green-400 rounded-full"></div>
            )}
            {i % 4 === 3 && (
              <div className="w-5 h-1 bg-gray-400 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Logo */}
          <div
            className={`mb-8 transform transition-all duration-1000 ${
              isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-gray-900 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div
            className={`mb-12 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TASK
              </span>
              <span className="font-thin text-gray-400">lite</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
              Simplify your workflow. Amplify your productivity.
            </p>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The minimalist task management solution that adapts to your pace.
              Stay organized without the complexity.
            </p>
          </div>

          {/* Animated Task Preview */}
          <div
            className={`mb-12 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="max-w-md mx-auto bg-gray-800/30 backdrop-blur-md rounded-xl border border-gray-700/50 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">
                  Currently working on:
                </span>
              </div>
              <div className="text-white font-medium text-lg h-8 flex items-center">
                <span key={currentTaskIndex} className="animate-fade-in">
                  {mockTasks[currentTaskIndex]}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
            <button className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 hover:border-gray-500/50 text-white font-semibold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div
            className={`mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto transform transition-all duration-1000 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">10K+</div>
              <div className="text-gray-400 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">500K+</div>
              <div className="text-gray-400 text-sm">Tasks Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
