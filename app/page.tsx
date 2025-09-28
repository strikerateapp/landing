"use client";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "./components/tilt-card";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[98dvh] max-h-[1080px] max-w-[1920px] mx-auto">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[-1]">
          <img
            src="/assets/hand-of-god.png"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[30%] h-full bg-[var(--background)]/75">
          <div className="flex py-[96px] px-5 flex-col items-center h-full justify-between">
            <div className="space-y-8 text-center relative z-[2]">
              <div className="gap-2 flex items-center justify-center flex-col">
                <div className="flex items-center jusfity-center gap-3">
                  <Image
                    src="/assets/strikerate-logo.png"
                    alt="strikerate"
                    width={78}
                    height={78}
                  />
                  <h1 className="text-[48px] font-bold text-[var(--primary)] font-[SpaceGrotesk]">
                    strikerate
                  </h1>
                </div>
                <h3 className="text-[32px] text-center font-bold text-[var(--primary)] font-[SpaceGrotesk] uppercase">
                  Win with Precision
                </h3>
              </div>
              <p className="text-[15px] text-center italic text-[var(--text-color)]/60">
                Settle every <b>Argument</b> and make <b>Instinct</b> your
                weapon on the only <b>sports prediction</b> platform that
                matters
              </p>
            </div>
            <div className="max-w-[600px] w-full z-[2] space-y-6 text-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  className="w-full bg-[var(--background)] hover:border-[var(--primary)] transition-colors duration-300 font-lexend p-3 sm:p-2 rounded-md border-[0.5px] border-color outline-none focus:outline-none text-sm sm:text-base"
                />
                <button className="cursor-pointer w-full p-3 sm:p-2 rounded-md btn-hover-gradient text-white font-[SpaceGrotesk] font-medium text-sm sm:text-base">
                  GET EARLY ACCESS
                </button>
              </div>
              <span className="text-[15px] text-center text-[var(--text-color)]/60">
                Are you a fan club?&nbsp;
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)]/75 hover:text-[var(--primary)] transition-colors duration-300 cursor-pointer font-[SpaceGrotesk] text-xs sm:text-sm underline z-[2] bg-[var(--background)]/75"
                >
                  Partner with us
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-[96px]">
        <h2 className="text-[40px] font-bold text-[var(--primary)] font-[SpaceGrotesk] mb-12 relative z-[2] uppercase">
          Predict. Score. Win!
        </h2>
        <div className="flex items-stretch justify-center gap-10 mb-24">
          <TiltCard className="bg-[var(--background)] rounded-md p-3 relative z-[2] w-[160px] shadow-card-hover">
            <Image
              src="/assets/fixture.png"
              alt="fixture"
              width={24}
              height={24}
              className="mb-2"
            />
            <p className="text-[18px] text-[var(--primary)] font-[SpaceGrotesk] font-semibold mb-6">
              Choose a Fixture
            </p>
            <p className="text-[13px] text-[var(--text-color)]/60 font-medium">
              Pick from an upcoming list of fixtures.
            </p>
          </TiltCard>
          <TiltCard className="bg-[var(--background)] rounded-md p-3 relative z-[2] w-[160px] shadow-card-hover">
            <Image
              src="/assets/challenge.png"
              alt="challenge"
              width={24}
              height={24}
              className="mb-2"
            />
            <p className="text-[18px] text-[var(--primary)] font-[SpaceGrotesk] font-semibold mb-6">
              Select a Challenge
            </p>
            <p className="text-[13px] text-[var(--text-color)]/60 font-medium">
              Predict scorelines, points, runs, goals, etc.
            </p>
          </TiltCard>
          <TiltCard className="bg-[var(--background)] rounded-md p-3 relative z-[2] w-[160px] shadow-card-hover">
            <Image
              src="/assets/pot.png"
              alt="pot"
              width={24}
              height={24}
              className="mb-2"
            />
            <p className="text-[18px] text-[var(--primary)] font-[SpaceGrotesk] font-semibold mb-6">
              Join your friends
            </p>
            <p className="text-[13px] text-[var(--text-color)]/60 font-medium">
              Create or enter a pot with 2, or more players.
            </p>
          </TiltCard>
          <TiltCard className="bg-[var(--background)] rounded-md p-3 relative z-[2] w-[160px] shadow-card-hover">
            <Image
              src="/assets/win.png"
              alt="win"
              width={24}
              height={24}
              className="mb-2"
            />
            <p className="text-[18px] text-[var(--primary)] font-[SpaceGrotesk] font-semibold mb-6">
              Closest Call Wins
            </p>
            <p className="text-[13px] text-[var(--text-color)]/60 font-medium">
              When the match ends, the nearest prediction takes the pot.
            </p>
          </TiltCard>
        </div>
        <p className="text-[15px] text-[var(--text-color)]/60 text-center italic">
          "The closest call is the only call that counts."
        </p>
      </div>
      <div className="flex flex-col items-center justify-center py-[96px] relative z-[2]">
        <Image
          src="/assets/crest.png"
          alt="crest"
          width={320}
          height={320}
          className="absolute opacity-[0.15]"
        />
        <h2 className="text-[40px] font-bold text-[var(--primary)] font-[SpaceGrotesk] mb-6 relative z-[2] uppercase">
          Leagues for the{" "}
          <span className="p-2 rounded-md bg-[var(--primary)] text-[var(--background)] uppercase">
            true fans
          </span>
        </h2>
        <p className="text-[24px] font-[SpaceGrotesk] text-[var(--text-color)]/75 text-center mb-8">
          One team. One challenge. One competition.
        </p>
        <p className="text-[18px] text-[var(--text-color)]/60 text-center">
          Fan clubs can host leagues, invite members and crown the most loyal
          ones.
        </p>
        <p className="text-[18px] text-[var(--text-color)]/60 text-center mb-32">
          Fans can brag about knowing their team better than anyone else.
        </p>
        <button className="max-w-[600px] mx-auto cursor-pointer w-full p-3 sm:p-2 rounded-md btn-hover-gradient text-white font-[SpaceGrotesk] font-medium text-sm sm:text-base">
          HOST YOUR LEAGUE
        </button>
      </div>
      <div className="flex flex-col items-center justify-between pt-[96px] pb-[84px] relative h-[80dvh] overflow-hidden">
        <img
          src="/assets/tunnel.png"
          className="w-full h-full absolute object-cover top-0 left-0 z-[-1] opacity-[0.95]"
        />
        <h2 className="text-[48px] font-bold text-[var(--background)] font-[SpaceGrotesk] mb-6 relative z-[2] uppercase text-center">
          <div>Think you see it</div>
          <div className="text-[124px] leading-[100px]">coming?</div>
        </h2>
        <div className="space-y-4 text-center relative z-[2]">
          <p className="text-[48px] font-bold text-[var(--background)] font-[SpaceGrotesk] uppercase">
            Enter The Arena
          </p>
          <div className="flex flex-col items-center justify-center gap-2 max-w-[400px] w-full">
            <input
              type="email"
              placeholder="john@gmail.com"
              className="w-full bg-[var(--background)] hover:border-[var(--primary)] transition-colors duration-300 font-lexend p-3 sm:p-2 rounded-md border-[0.5px] border-color outline-none focus:outline-none text-sm sm:text-base"
            />
            <button className="cursor-pointer w-full p-3 sm:p-2 rounded-md alt-btn-hover-gradient text-[var(--primary)] font-[SpaceGrotesk] font-medium text-sm sm:text-base">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <Link
          href="https://x.com/strikerateapp"
          target="_blank"
          className="text-[var(--primary)]/75 hover:text-[var(--primary)] transition-colors duration-300 cursor-pointer font-space-grotesk text-xs sm:text-sm underline"
          rel="noopener noreferrer"
        >
          Twitter (X)
        </Link>
      </div>
    </>
  );
}
