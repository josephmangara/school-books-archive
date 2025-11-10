

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center">
        <p>
          © 2025 Joseph Mang'ara - All rights reserved.
        </p>
        <p>
          Licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            CC BY-NC 4.0
          </a>
        </p>
      </div>
    </footer>
  );
}
