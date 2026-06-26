"use client";

export default function Footer() {
  return (
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Muhammad Shoaban. All rights reserved.
        </div>
  );
}