'use client';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100dvh] flex flex-col items-center justify-between w-full lg:py-16 py-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <Image src="/assets/strikerate-logo.png" alt="strikerate" width={48} height={48} />
          <h1 className="text-2xl font-bold font-space-grotesk text-primary">strikerate</h1>
        </div>
        <div className="space-y-8 px-4 max-w-[600px] text-center">
          <h3 className="text-lg font-space-grotesk bg-gradient-to-r from-[var(--tertiary)] to-[var(--secondary)] bg-clip-text text-transparent font-medium">Win with Precision</h3>
          <p className="font-lexend text-default-50 italic text-md">"The closest call is the only call that counts"</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="space-y-2 text-center max-w-[600px] max-md:px-4 max-md:w-full">
          <input type="email" placeholder="john@gmail.com" className="w-full bg-[var(--background)] hover:border-[var(--primary)] transition-colors duration-300 font-lexend p-2 rounded-md border-[0.5px] border-color outline-none focus:outline-none" />
          <button className="cursor-pointer w-full p-2 rounded-md btn-hover-gradient text-white font-space-grotesk font-medium">Get Early Access</button>
        </div>
        <Link href="https://x.com/strikerateapp" target="_blank" className="text-[var(--primary)]/75 hover:text-[var(--primary)] transition-colors duration-300 cursor-pointer font-space-grotesk text-sm underline">Twitter (X)</Link>
      </div>
    </div>
  );
}
