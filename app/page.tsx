import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[780px] mx-auto">
        <h1 className="text-6xl mb-5">Unveil Your Inner Emotions</h1>
        <p className="text-2xl text-white/60 mb-5">Explore your feelings, gain insights, and embrace self-discovery with ReflectifyMe, your personal AI companion for emotional well-being.</p>
        <div>
          <Link href="/journal">
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
