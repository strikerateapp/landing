"use client";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "./components/tilt-card";
import { useState, useEffect, useRef, FC } from "react";
import { motion } from "motion/react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "valid" | "invalid" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  // Second form state
  const [email2, setEmail2] = useState("");
  const [emailStatus2, setEmailStatus2] = useState<
    "idle" | "valid" | "invalid" | "loading" | "success" | "error"
  >("idle");
  const [message2, setMessage2] = useState("");

  // Refs for success message timeouts
  const successTimeoutRef = useRef<number | null>(null);
  const successTimeoutRef2 = useRef<number | null>(null);

  // Auto-clear success message for first form
  useEffect(() => {
    if (emailStatus === "success") {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
      successTimeoutRef.current = window.setTimeout(() => {
        setMessage("");
      }, 3500);
    }

    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
        successTimeoutRef.current = null;
      }
    };
  }, [emailStatus]);

  // Auto-clear success message for second form
  useEffect(() => {
    if (emailStatus2 === "success") {
      if (successTimeoutRef2.current) {
        clearTimeout(successTimeoutRef2.current);
      }
      successTimeoutRef2.current = window.setTimeout(() => {
        setMessage2("");
      }, 3500);
    }

    return () => {
      if (successTimeoutRef2.current) {
        clearTimeout(successTimeoutRef2.current);
        successTimeoutRef2.current = null;
      }
    };
  }, [emailStatus2]);

  // Clear messages and timers on unmount
  useEffect(() => {
    return () => {
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
      }
      if (successTimeoutRef2.current) {
        clearTimeout(successTimeoutRef2.current);
      }
      setMessage("");
      setMessage2("");
    };
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setMessage("");

    if (value === "") {
      setEmailStatus("idle");
      setMessage("");
    } else if (validateEmail(value)) {
      setEmailStatus("valid");
      setMessage("");
    } else {
      setEmailStatus("invalid");
    }
  };

  const handleEmailChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail2(value);
    setMessage2("");

    if (value === "") {
      setEmailStatus2("idle");
      setMessage2("");
    } else if (validateEmail(value)) {
      setEmailStatus2("valid");
      setMessage2("");
    } else {
      setEmailStatus2("invalid");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailStatus("invalid");
      return;
    }

    if (!validateEmail(email)) {
      setEmailStatus("invalid");
      return;
    }

    setEmailStatus("loading");
    setMessage("");

    try {
      const response = await fetch("https://sheetdb.io/api/v1/e840pvu7dkfdc", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              email: email,
            },
          ],
        }),
      });

      if (response.ok) {
        setEmailStatus("success");
        setMessage("You're IN! We'll be in touch soon.");
        setEmail("");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      setEmailStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const handleSubmit2 = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email2.trim()) {
      setEmailStatus2("invalid");
      return;
    }

    if (!validateEmail(email2)) {
      setEmailStatus2("invalid");
      return;
    }

    setEmailStatus2("loading");
    setMessage2("");

    try {
      const response = await fetch("https://sheetdb.io/api/v1/e840pvu7dkfdc", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              email: email2,
            },
          ],
        }),
      });

      if (response.ok) {
        setEmailStatus2("success");
        setMessage2("You're IN! We'll be in touch soon.");
        setEmail2("");
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      setEmailStatus2("error");
      setMessage2("Something went wrong. Please try again.");
    }
  };

  const getInputClasses = () => {
    const baseClasses =
      "w-full bg-[var(--background)] transition-colors duration-300 font-lexend p-2 md:p-3 rounded-md border-[0.5px] outline-none focus:outline-none text-xs md:text-sm";

    switch (emailStatus) {
      case "valid":
        return `${baseClasses} border-[var(--success)] hover:border-[var(--success)] bg-gradient-to-b from-[var(--background)] to-[var(--success)]/5`;
      case "invalid":
        return `${baseClasses} border-[var(--error)] hover:border-[var(--error)] bg-gradient-to-b from-[var(--background)] to-[var(--error)]/5`;
      case "success":
        return `${baseClasses} border-[var(--success)]`;
      case "error":
        return `${baseClasses} border-[var(--error)] bg-gradient-to-b from-[var(--background)] to-[var(--error)]/5`;
      default:
        return `${baseClasses} border-[var(--border-color)] hover:border-[var(--primary)]`;
    }
  };

  const getInputClasses2 = () => {
    const baseClasses =
      "w-full bg-[var(--background)] transition-colors duration-300 font-lexend p-2 md:p-3 rounded-md border-[0.5px] outline-none focus:outline-none text-xs md:text-sm";

    switch (emailStatus2) {
      case "valid":
        return `${baseClasses} border-[var(--success)] hover:border-[var(--success)] bg-gradient-to-b from-[var(--background)] to-[var(--success)]/5`;
      case "invalid":
        return `${baseClasses} border-[var(--error)] hover:border-[var(--error)] bg-gradient-to-b from-[var(--background)] to-[var(--error)]/5`;
      case "success":
        return `${baseClasses} border-[var(--success)]`;
      case "error":
        return `${baseClasses} border-[var(--error)] bg-gradient-to-b from-[var(--background)] to-[var(--error)]/5`;
      default:
        return `${baseClasses} border-[var(--border-color)] hover:border-[var(--primary)]`;
    }
  };

  return (
    <>
      <div className="relative w-full lg:h-[98dvh] lg:max-h-[1080px] max-w-[1920px] mx-auto">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[-1]">
          <img
            src="/assets/hand-of-god.png"
            className="w-full h-full object-cover lg:block hidden"
          />
        </div>
        <div className="lg:w-[30%] w-full h-full bg-[var(--background)]/75">
          <div className="flex lg:py-[96px] py-[32px] px-5 flex-col items-center h-full justify-between gap-5">
            <div className="space-y-8 text-center relative z-[2]">
              <div className="gap-2 flex items-center justify-center flex-col">
                <div className="flex items-center justify-center gap-2 md:gap-3 flex-row">
                  <Image
                    src="/assets/strikerate-logo.png"
                    alt="strikerate"
                    width={60}
                    height={60}
                    className="md:w-[78px] md:h-[78px]"
                  />
                  <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[var(--primary)] font-[SpaceGrotesk] text-center">
                    strikerate
                  </h1>
                </div>
                <h3 className="text-[20px] md:text-[28px] lg:text-[32px] text-center font-normal text-[var(--primary)] font-[SpaceGrotesk] uppercase">
                  Win with Precision
                </h3>
              </div>
              <p className="text-[12px] md:text-[14px] lg:text-[15px] text-center italic text-[var(--text-color)]/60 px-2">
                Every <b>match</b> is a test of <b>instinct</b>.<br />
                Every <b>prediction</b> earns you a <b>score</b>.<br />
                Every <b>score</b> builds your <b>legacy</b>.
              </p>
            </div>
            <img
              src="/assets/hand-of-god.png"
              className="w-full h-full object-contain lg:hidden block"
            />
            <div className="max-w-[600px] w-full z-[2] space-y-6 text-center flex flex-col items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-2 w-full max-w-[400px]"
              >
                <input
                  type="email"
                  placeholder="john@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                  className={getInputClasses()}
                />
                <motion.button
                  type="submit"
                  disabled={emailStatus === "loading"}
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer w-full p-2 md:p-3 rounded-md btn-hover-gradient text-white font-[SpaceGrotesk] font-medium text-sm md:text-lg disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-[1px]"
                >
                  {emailStatus === "loading"
                    ? "SUBMITTING..."
                    : "GET EARLY ACCESS"}
                </motion.button>
                <div className="h-6 flex items-center justify-center">
                  <motion.p
                    animate={{
                      opacity: message ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`text-xs md:text-sm text-center bg-[var(--background)]/75 ${
                      emailStatus === "success"
                        ? "text-[var(--success)]"
                        : emailStatus === "error"
                        ? "text-[var(--error)]"
                        : emailStatus === "invalid"
                        ? "text-[var(--error)]"
                        : "text-[var(--text-color)]/60"
                    }`}
                  >
                    {message}
                  </motion.p>
                </div>
              </form>
              <span className="text-[12px] md:text-[14px] lg:text-[15px] text-center text-[var(--text-color)]/60">
                Are you a fan club?&nbsp;
                <Link
                  href="https://r6zrifb2t9y.typeform.com/to/M0aFLjPQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)]/75 hover:text-[var(--primary)] transition-colors duration-300 cursor-pointer font-[SpaceGrotesk] text-xs md:text-sm underline z-[2] bg-[var(--background)]/75"
                >
                  Partner with us
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="py-[48px] max-w-[666px] mx-auto w-full px-5 text-center text-[var(--text-color)]/60 md:text-lg lg:text-xl text-sm">
        strikerate isn't luck or trivia.
        <br />
        It's a scoring engine that measures how accurately fans can read the
        game, minute by minute. The closer your call, the higher your
        strikerate.
        <br />
        <br />
        Over time, your score becomes proof of how well you truly know your
        team.
      </p>
      <div className="flex flex-col items-center justify-center py-[96px] px-5">
        <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[var(--primary)] font-[SpaceGrotesk] mb-8 md:mb-10 lg:mb-12 relative z-[2] uppercase">
          Predict. Score. Win!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 lg:mb-24 mb-16 max-w-4xl mx-auto">
          <TiltCard className="bg-[var(--background)] rounded-md p-3 relative z-[2] shadow-card-hover">
            <Image
              src="/assets/fixture.png"
              alt="fixture"
              width={24}
              height={24}
              className="mb-2"
            />
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[var(--primary)] font-[SpaceGrotesk] font-semibold mb-4 md:mb-5 lg:mb-6">
              Choose a Fixture
            </p>
            <p className="text-[11px] md:text-[12px] lg:text-[13px] text-[var(--text-color)]/60 font-medium">
              Pick from an upcoming list of fixtures.
            </p>
          </TiltCard>
          <TiltCard className="bg-[var(--background)] rounded-md p-3 relative z-[2] shadow-card-hover">
            <Image
              src="/assets/challenge.png"
              alt="challenge"
              width={24}
              height={24}
              className="mb-2"
            />
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[var(--primary)] font-[SpaceGrotesk] font-semibold mb-4 md:mb-5 lg:mb-6">
              Select a Challenge
            </p>
            <p className="text-[11px] md:text-[12px] lg:text-[13px] text-[var(--text-color)]/60 font-medium">
              Predict scorelines, points, runs, goals, etc.
            </p>
          </TiltCard>
          <TiltCard className="bg-[var(--background)] rounded-md p-3 relative z-[2] shadow-card-hover">
            <Image
              src="/assets/pot.png"
              alt="pot"
              width={24}
              height={24}
              className="mb-2"
            />
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[var(--primary)] font-[SpaceGrotesk] font-semibold mb-4 md:mb-5 lg:mb-6">
              Join your friends
            </p>
            <p className="text-[11px] md:text-[12px] lg:text-[13px] text-[var(--text-color)]/60 font-medium">
              Create or enter a pot with 2, or more players.
            </p>
          </TiltCard>
          <TiltCard className="bg-[var(--background)] rounded-md p-3 relative z-[2] shadow-card-hover">
            <Image
              src="/assets/win.png"
              alt="win"
              width={24}
              height={24}
              className="mb-2"
            />
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[var(--primary)] font-[SpaceGrotesk] font-semibold mb-4 md:mb-5 lg:mb-6">
              Closest Call Wins
            </p>
            <p className="text-[11px] md:text-[12px] lg:text-[13px] text-[var(--text-color)]/60 font-medium">
              When the match ends, the nearest prediction takes the pot.
            </p>
          </TiltCard>
        </div>
        <p className="text-[15px] text-[var(--text-color)]/60 text-center italic">
          "The closest call is the only call that counts."
        </p>
      </div>
      <div className="flex items-center justify-center gap-[96px] max-w-[1920px] mx-auto">
        <div className="flex flex-col items-center justify-center py-[96px] relative z-[2] px-5">
          <h2 className="text-[24px] md:text-[28px] lg:text-[40px] font-bold text-[var(--primary)] font-[SpaceGrotesk] mb-10 md:mb-12 lg:mb-14 relative z-[2] uppercase text-center">
            Leagues for the{" "}
            <span className="inline-block p-1 md:p-2 rounded-md bg-[var(--primary)] text-[var(--background)] uppercase whitespace-nowrap">
              true fans
            </span>
          </h2>
          <p className="text-[18px] md:text-[20px] lg:text-[24px] font-[SpaceGrotesk] text-[var(--text-color)]/75 text-center mb-12 md:mb-14 lg:mb-16">
            One team. One challenge. One competition.
          </p>
          <p className="max-w-[666px] mx-auto w-full px-5 text-[14px] md:text-[16px] lg:text-[18px] text-[var(--text-color)]/60 text-center">
            Invite members, host leagues, and reward your most precise and loyal
            fans. We'll handle the heavy lifting.
          </p>
          <p className="max-w-[666px] mx-auto w-full px-5 text-[14px] md:text-[16px] lg:text-[18px] text-[var(--text-color)]/60 text-center mb-20 md:mb-32">
            Powered by our scoring engine, every league stays fair, real-time,
            and global.
          </p>
          <Crest className="lg:hidden block !absolute opacity-25 z-[-1]" />
          <Link
            href="https://r6zrifb2t9y.typeform.com/to/M0aFLjPQ"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-[400px] w-full mx-auto relative z-[2]"
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer w-full p-3 sm:p-2 rounded-md btn-hover-gradient text-white font-[SpaceGrotesk] font-medium text-sm md:text-lg active:translate-y-[1px]"
            >
              HOST YOUR LEAGUE
            </motion.button>
          </Link>
        </div>
        <Crest className="lg:block hidden" />
      </div>
      <div className="flex flex-col items-center justify-between pt-[96px] pb-[84px] relative h-[98dvh] max-h-[1080px] max-w-[1920px] mx-auto overflow-hidden px-5">
        <img
          src="/assets/tunnel.png"
          className="w-full h-full absolute object-cover top-0 left-0 z-[-2] opacity-[0.95]"
          style={{
            filter: "saturate(0.01)",
            opacity: 0.8,
          }}
        />
        <div className="absolute inset-0 bg-[var(--primary)] z-[-1] opacity-60"></div>
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[var(--background)] font-[SpaceGrotesk] mb-4 md:mb-5 lg:mb-6 relative z-[2] uppercase text-center">
          <div className="font-normal">Think you see it</div>
          <div className="text-[80px] md:text-[100px] lg:text-[124px] leading-[60px] md:leading-[80px] lg:leading-[100px]">
            coming?
          </div>
        </h2>
        <div className="space-y-2 md:space-y-3 text-center relative z-[2]">
          <p className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[var(--background)] font-[SpaceGrotesk] uppercase leading-[0.9]">
            Enter The Arena
          </p>
          <form
            onSubmit={handleSubmit2}
            className="flex flex-col items-center justify-center gap-2 max-w-[300px] md:max-w-[400px] w-full"
          >
            <input
              type="email"
              placeholder="john@gmail.com"
              value={email2}
              onChange={handleEmailChange2}
              className={getInputClasses2()}
            />
            <motion.button
              type="submit"
              disabled={emailStatus2 === "loading"}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer w-full p-2 md:p-3 rounded-md alt-btn-hover-gradient text-[var(--primary)] font-[SpaceGrotesk] font-medium text-sm md:text-lg disabled:opacity-50 disabled:cursor-not-allowed active:translate-y-[1px]"
            >
              {emailStatus2 === "loading" ? "SUBMITTING..." : "SUBMIT"}
            </motion.button>
            <div className="h-6 flex items-center justify-center">
              <motion.p
                animate={{
                  opacity: message2 ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`text-xs md:text-sm text-center bg-[var(--background)]/50 ${
                  emailStatus2 === "success"
                    ? "text-[var(--success)]"
                    : emailStatus2 === "error"
                    ? "text-[var(--error)]"
                    : emailStatus2 === "invalid"
                    ? "text-[var(--error)]"
                    : "text-[var(--text-color)]/60"
                }`}
              >
                {message2}
              </motion.p>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-[14px] italic md:text-[16px] lg:text-[18px] text-[var(--text-color)]/60 text-center mb-4">
          The only place to prove you are your team's <b>greatest fan</b>!
        </p>
        <Link
          href="https://x.com/strikerateapp"
          target="_blank"
          className="text-[var(--primary)]/90 font-medium hover:text-[var(--primary)] transition-colors duration-300 cursor-pointer font-[SpaceGrotesk] text-xs md:text-sm underline relative z-[2] bg-[var(--background)]/75"
          rel="noopener noreferrer"
        >
          Twitter (X)
        </Link>
      </div>
    </>
  );
}

const Crest: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center relative ${className}`}>
      <div className={`w-[320px] h-[320px] relative z-[2]`}>
        <Image
          src="/assets/crest.png"
          alt="crest"
          width={320}
          height={320}
          style={{
            filter: "saturate(0.01)",
            opacity: 0.8,
          }}
        />
        <div
          className="absolute inset-0 bg-[var(--primary)] opacity-60"
          style={{
            maskImage: 'url("/assets/crest.png")',
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: 'url("/assets/crest.png")',
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};
