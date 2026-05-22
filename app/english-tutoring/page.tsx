import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "English Tutoring Online | 1:1 English Classes for Students Worldwide",
  description:
    "Improve grammar, reading, writing, vocabulary, speaking, and communication skills with personalized 1:1 online English tutoring for USA and international students.",
  keywords: [
    "online english tutor",
    "english tutoring",
    "english classes online",
    "english tutor for kids",
    "english speaking classes",
    "reading comprehension tutor",
    "writing tutor online",
    "grammar tutor",
    "english tutor usa",
    "1:1 english tutoring",
  ],
};

export default function EnglishTutoringPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-pink-50 px-6 py-28 overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-5 py-2 rounded-full font-semibold text-sm">

            🌍 Trusted by USA & International Students

          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">

            Personalized
            <span className="text-pink-600"> English Tutoring </span>
            Online

          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed">

            Improve grammar, vocabulary, reading comprehension,
            writing, speaking confidence, and communication skills
            through engaging one-to-one online English classes.

          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <a
              href="https://tally.so/r/q4oe18"
              target="_blank"
              rel="noopener noreferrer"
            >

              <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl hover:scale-105">

                Book Free Demo

              </button>

            </a>

            <Link href="/courses">

              <button className="border-2 border-pink-600 text-pink-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-pink-600 hover:text-white transition">

                Explore Courses

              </button>

            </Link>

          </div>

          {/* TAGS */}
          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Grammar",
              "Vocabulary",
              "Writing",
              "Reading",
              "Speaking",
              "Creative Writing",
              "Public Speaking",
              "Communication Skills",
            ].map((item, index) => (

              <span
                key={index}
                className="bg-white border px-4 py-2 rounded-full text-sm text-gray-700 shadow-sm"
              >
                {item}
              </span>

            ))}

          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="relative">

          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-[40px] blur-2xl opacity-30"></div>

          <div className="relative bg-white rounded-[40px] shadow-2xl p-10 border">

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-pink-50 rounded-3xl p-6">

                <h3 className="text-4xl font-extrabold text-pink-600">
                  Grammar
                </h3>

                <p className="mt-2 text-gray-600">
                  Learn sentence structure
                </p>

              </div>

              <div className="bg-rose-50 rounded-3xl p-6">

                <h3 className="text-4xl font-extrabold text-rose-600">
                  Reading
                </h3>

                <p className="mt-2 text-gray-600">
                  Improve comprehension
                </p>

              </div>

              <div className="bg-purple-50 rounded-3xl p-6">

                <h3 className="text-4xl font-extrabold text-purple-600">
                  Writing
                </h3>

                <p className="mt-2 text-gray-600">
                  Creative & academic writing
                </p>

              </div>

              <div className="bg-orange-50 rounded-3xl p-6">

                <h3 className="text-4xl font-extrabold text-orange-600">
                  Speaking
                </h3>

                <p className="mt-2 text-gray-600">
                  Build confidence & fluency
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}
      <section className="mt-32 max-w-7xl mx-auto">

        <div className="text-center">

          <h2 className="text-5xl font-extrabold text-gray-900">
            Why Students Love Our English Classes
          </h2>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">

            Interactive online English tutoring designed to make
            learning enjoyable, effective, and confidence-building.

          </p>

        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-[35px] p-10 shadow-xl border">

            <div className="text-5xl">
              📖
            </div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Reading Skills
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Improve reading fluency, comprehension,
              vocabulary, and understanding through guided practice.
            </p>

          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl border">

            <div className="text-5xl">
              ✍️
            </div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Writing Practice
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Learn sentence building, paragraph writing,
              essays, storytelling, and creative expression.
            </p>

          </div>

          <div className="bg-white rounded-[35px] p-10 shadow-xl border">

            <div className="text-5xl">
              🎤
            </div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Speaking Confidence
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Build communication confidence through speaking,
              pronunciation, and interactive live sessions.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="mt-32">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-600 to-rose-500 rounded-[40px] p-14 text-center text-white shadow-2xl">

          <h2 className="text-5xl font-extrabold leading-tight">

            Start Learning English With Confidence

          </h2>

          <p className="mt-6 text-xl text-white/90 max-w-3xl mx-auto">

            Join engaging one-to-one online English tutoring
            designed for students worldwide.

          </p>

          <a
            href="https://tally.so/r/q4oe18"
            target="_blank"
            rel="noopener noreferrer"
          >

            <button className="mt-10 bg-white text-pink-600 px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition shadow-xl">

              Book Free Demo

            </button>

          </a>

        </div>

      </section>

    </main>
  );
}