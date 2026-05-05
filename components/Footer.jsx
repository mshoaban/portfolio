export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">

        {/* CENTER */}
        <p className="text-gray-600 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Muhammad Shoaban. All rights reserved.
        </p>

      </div>
    </footer>
  );
}