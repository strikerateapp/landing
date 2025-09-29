"use client";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "./components/tilt-card";
import { useState } from "react";
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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setEmailStatus("idle");
      setMessage("");
    } else if (validateEmail(value)) {
      setEmailStatus("valid");
      setMessage("");
    } else {
      setEmailStatus("invalid");
      setMessage("Please enter a valid email address");
    }
  };

  const handleEmailChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail2(value);

    if (value === "") {
      setEmailStatus2("idle");
      setMessage2("");
    } else if (validateEmail(value)) {
      setEmailStatus2("valid");
      setMessage2("");
    } else {
      setEmailStatus2("invalid");
      setMessage2("Please enter a valid email address");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setEmailStatus("invalid");
      setMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setEmailStatus("invalid");
      setMessage("Please enter a valid email address");
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
      setMessage2("Please enter your email address");
      return;
    }

    if (!validateEmail(email2)) {
      setEmailStatus2("invalid");
      setMessage2("Please enter a valid email address");
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
        return `${baseClasses} border-[var(--success)] hover:border-[var(--success)]`;
      case "invalid":
        return `${baseClasses} border-[var(--error)] hover:border-[var(--error)]`;
      case "success":
        return `${baseClasses} border-[var(--success)]`;
      case "error":
        return `${baseClasses} border-[var(--error)]`;
      default:
        return `${baseClasses} border-[var(--border-color)] hover:border-[var(--primary)]`;
    }
  };

  const getInputClasses2 = () => {
    const baseClasses =
      "w-full bg-[var(--background)] transition-colors duration-300 font-lexend p-2 md:p-3 rounded-md border-[0.5px] outline-none focus:outline-none text-xs md:text-sm";

    switch (emailStatus2) {
      case "valid":
        return `${baseClasses} border-[var(--success)] hover:border-[var(--success)]`;
      case "invalid":
        return `${baseClasses} border-[var(--error)] hover:border-[var(--error)]`;
      case "success":
        return `${baseClasses} border-[var(--success)]`;
      case "error":
        return `${baseClasses} border-[var(--error)]`;
      default:
        return `${baseClasses} border-[var(--border-color)] hover:border-[var(--primary)]`;
    }
  };

  return (
    <>
      <div className="relative w-full h-[98dvh] max-h-[1080px] max-w-[1920px] mx-auto">
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
                <h3 className="text-[20px] md:text-[28px] lg:text-[32px] text-center font-bold text-[var(--primary)] font-[SpaceGrotesk] uppercase">
                  Win with Precision
                </h3>
              </div>
              <p className="text-[12px] md:text-[14px] lg:text-[15px] text-center italic text-[var(--text-color)]/60 px-2">
                Settle every <b>Argument</b> and make <b>Instinct</b> your
                weapon on the only <b>sports prediction</b> platform that
                matters
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
                <button
                  type="submit"
                  disabled={
                    emailStatus === "loading" || emailStatus === "success"
                  }
                  className="cursor-pointer w-full p-2 md:p-3 rounded-md btn-hover-gradient text-white font-[SpaceGrotesk] font-medium text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {emailStatus === "loading"
                    ? "SUBMITTING..."
                    : "GET EARLY ACCESS"}
                </button>
                <div className="h-6 flex items-center justify-center">
                  <motion.p
                    animate={{
                      opacity: message ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`text-xs md:text-sm text-center ${
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
      <div className="flex flex-col items-center justify-center py-[96px] px-5">
        <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-bold text-[var(--primary)] font-[SpaceGrotesk] mb-8 md:mb-10 lg:mb-12 relative z-[2] uppercase">
          Predict. Score. Win!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 mb-24 max-w-4xl mx-auto">
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
      <div className="flex flex-col items-center justify-center py-[96px] relative z-[2] px-5">
        <Image
          src="/assets/crest.png"
          alt="crest"
          width={320}
          height={320}
          className="absolute opacity-[0.15]"
        />
        <h2 className="text-[24px] md:text-[28px] lg:text-[40px] font-bold text-[var(--primary)] font-[SpaceGrotesk] mb-4 md:mb-5 lg:mb-6 relative z-[2] uppercase text-center">
          Leagues for the{" "}
          <span className="inline-block p-1 md:p-2 rounded-md bg-[var(--primary)] text-[var(--background)] uppercase whitespace-nowrap">
            true fans
          </span>
        </h2>
        <p className="text-[18px] md:text-[20px] lg:text-[24px] font-[SpaceGrotesk] text-[var(--text-color)]/75 text-center mb-6 md:mb-7 lg:mb-8">
          One team. One challenge. One competition.
        </p>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[var(--text-color)]/60 text-center">
          Fan clubs can host leagues, invite members and crown the most loyal
          ones.
        </p>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[var(--text-color)]/60 text-center mb-16 md:mb-24 lg:mb-32">
          Fans can brag about knowing their team better than anyone else.
        </p>
        <Link
          href="https://r6zrifb2t9y.typeform.com/to/M0aFLjPQ"
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-[400px] w-full mx-auto relative z-[2]"
        >
          <button className="cursor-pointer w-full p-3 sm:p-2 rounded-md btn-hover-gradient text-white font-[SpaceGrotesk] font-medium text-sm sm:text-base">
            HOST YOUR LEAGUE
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-between pt-[96px] pb-[84px] relative h-[100dvh] overflow-hidden px-5">
        <img
          src="/assets/tunnel.png"
          className="w-full h-full absolute object-cover top-0 left-0 z-[-2] opacity-[0.95]"
          style={{
            filter: "saturate(0.01)",
            opacity: 0.8
          }}
        />
        <div className="absolute inset-0 bg-[var(--primary)] z-[-1] opacity-60"></div>
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[var(--background)] font-[SpaceGrotesk] mb-4 md:mb-5 lg:mb-6 relative z-[2] uppercase text-center">
          <div>Think you see it</div>
          <div className="text-[80px] md:text-[100px] lg:text-[124px] leading-[60px] md:leading-[80px] lg:leading-[100px]">
            coming?
          </div>
        </h2>
        <div className="space-y-3 md:space-y-4 text-center relative z-[2]">
          <p className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[var(--background)] font-[SpaceGrotesk] uppercase">
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
            <button
              type="submit"
              disabled={
                emailStatus2 === "loading" || emailStatus2 === "success"
              }
              className="cursor-pointer w-full p-2 md:p-3 rounded-md alt-btn-hover-gradient text-[var(--primary)] font-[SpaceGrotesk] font-medium text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {emailStatus2 === "loading" ? "SUBMITTING..." : "SUBMIT"}
            </button>
            <div className="h-6 flex items-center justify-center">
              <motion.p
                animate={{
                  opacity: message2 ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`text-xs md:text-sm text-center ${
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
      <div className="flex items-center justify-center p-8">
        <Link
          href="https://x.com/strikerateapp"
          target="_blank"
          className="text-[var(--primary)]/90 font-medium hover:text-[var(--primary)] transition-colors duration-300 cursor-pointer font-[SpaceGrotesk] text-xs md:text-sm underline relative z-[2]"
          rel="noopener noreferrer"
        >
          Twitter (X)
        </Link>
      </div>
    </>
  );
}
