'use client';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[-1]">
        <div className="container mx-auto relative">
          <div className="absolute inset-0 color-overlay"></div>
          <img src="/assets/hand-of-god.jpg" className="w-full h-full object-contain" style={{
            filter: "saturate(0.01)",
            opacity: 0.8,
          }} />
          <div className="absolute inset-0 fade-overlay"></div>
        </div>
      </div>
      <div className="h-[100dvh] flex flex-col items-center justify-between w-full lg:py-16 py-4 px-4 relative z-10">
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-4">
          <div className="flex items-center justify-center gap-2">
            <Image src="/assets/strikerate-logo.png" alt="strikerate" width={40} height={40} className="sm:w-12 sm:h-12" />
            <h1 className="text-xl sm:text-2xl font-bold font-space-grotesk text-primary">strikerate</h1>
          </div>
          <div className="space-y-4 sm:space-y-8 px-2 sm:px-4 max-w-[600px] text-center">
            <h3 className="text-base sm:text-lg font-space-grotesk bg-gradient-to-r from-[var(--tertiary)] to-[var(--secondary)] bg-clip-text text-transparent font-medium">Win with Precision</h3>
            <p className="font-lexend text-default-50 italic text-sm sm:text-md">"The closest call is the only call that counts"</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-2 text-center max-w-[600px] w-full px-2 sm:px-4">
            <input type="email" placeholder="john@gmail.com" className="w-full bg-[var(--background)] hover:border-[var(--primary)] transition-colors duration-300 font-lexend p-3 sm:p-2 rounded-md border-[0.5px] border-color outline-none focus:outline-none text-sm sm:text-base" />
            <button className="cursor-pointer w-full p-3 sm:p-2 rounded-md btn-hover-gradient text-white font-space-grotesk font-medium text-sm sm:text-base">Get Early Access</button>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <Link href="/about" className="text-[var(--primary)]/75 hover:text-[var(--primary)] transition-colors duration-300 cursor-pointer font-space-grotesk text-xs sm:text-sm underline">About</Link>
            <Link href="https://x.com/strikerateapp" target="_blank" className="text-[var(--primary)]/75 hover:text-[var(--primary)] transition-colors duration-300 cursor-pointer font-space-grotesk text-xs sm:text-sm underline" rel="noopener noreferrer">Twitter (X)</Link>
          </div>
        </div>
      </div>
    </>
  );
}
