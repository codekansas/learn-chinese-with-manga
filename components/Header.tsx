"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Header() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 sm:p-8 border-b border-gray-200 dark:border-gray-700">
      <Link href="/" className="text-xl font-bold">
        Learn Chinese with Manga
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-current transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Desktop navigation */}
      <nav className="hidden md:flex gap-4 items-center">
        <Link href="/mangas" className="hover:underline">
          Mangas
        </Link>
        <Link href="/upload" className="hover:underline">
          Upload
        </Link>
        {session ? (
          <>
            <Link href="/profile" className="hover:underline">
              Profile
            </Link>
            <button onClick={() => signOut()} className="hover:underline">
              Sign Out
            </button>
          </>
        ) : (
          <button onClick={() => signIn()} className="hover:underline">
            Sign In
          </button>
        )}
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-50 md:hidden">
          <nav className="flex flex-col p-4 gap-4">
            <Link
              href="/mangas"
              className="hover:underline py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mangas
            </Link>
            <Link
              href="/upload"
              className="hover:underline py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Upload
            </Link>
            {session ? (
              <>
                <Link
                  href="/profile"
                  className="hover:underline py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setMobileMenuOpen(false);
                  }}
                  className="hover:underline py-2 text-left"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  signIn();
                  setMobileMenuOpen(false);
                }}
                className="hover:underline py-2 text-left"
              >
                Sign In
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
