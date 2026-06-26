"use client";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Muhammad Shoaban. All rights reserved.
        </div>
    </footer>
  );
}