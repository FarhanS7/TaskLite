const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-black to-gray-900 px-6 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side - Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-3">
              {/* Mini Logo */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </div>
              </div>
              <span className="text-white text-lg font-bold">
                TASK<span className="font-thin text-gray-400">lite</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 TaskLite. All rights reserved.
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              Support
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              About
            </a>
          </div>

          {/* Right Side - Social/Contact */}
          <div className="flex items-center space-x-4">
            <div className="text-gray-400 text-sm">
              Stay organized, stay productive
            </div>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200">
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200">
                <svg
                  className="w-4 h-4 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
