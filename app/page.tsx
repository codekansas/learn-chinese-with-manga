import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center sm:text-left">
        Learn Chinese with Manga
      </h1>
      <p className="text-center sm:text-left max-w-xl">
        Upload manga images, automatically extract Chinese characters using OCR, and instantly view translations and pinyin. Hover over text segments to see translations or pinyin pronunciation.
      </p>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/mangas"
        >
          View Mangas
        </Link>
        <Link
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="/upload"
        >
          Upload Manga
        </Link>
      </div>
    </div>
  );
}
