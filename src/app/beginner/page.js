'use client'

import Image from "next/image"
import CountdownTimer from "../components/countdowntime"
import { useState } from "react"
import ItemCollapse from "../components/itemCollapse"

export default function Beginner() {
  const features = [
    {
      title: "Grammar",
      image: "/grammar.png",
      content: "Understand the logic and the structure of the language, you will realize how everything will start to make sense."
    },
    {
      title: "Pronunciation",
      image: "/balloon.png",
      content: "You will master Spanish sounds and speak with confidence."
    },
    {
      title: "Vocabulary",
      image: "/pool.png",
      content: "Expand your word knowledge and express yourself clearly."
    },
    {
      title: "Culture",
      image: "/culture.png",
      content: "Discover Spanish culture, traditions, and real-life use cases."
    }
  ]

  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }


  return (
    <div className="min-h-screen bg-[#F55C26] flex flex-col items-center justify-start relative overflow-hidden">

      {/* Hot Air Balloons background */}
      <div className="absolute inset-0 bg-[url('/bg-balloons.png')] bg-contain bg-repeat opacity-20 pointer-events-none"></div>

      {/* Countdown Section */}
      <div className="w-full bg-yellow-400 text-center">
        <div className="text-white uppercase font-bold mb-2">Registrations Close Soon</div>
        <div className="h-[300px]">
          <CountdownTimer targetDate="2025-07-01T00:00:00" />
        </div>

      </div>

      {/* Course Info */}
      <div className="mt-10 bg-[#FBE7C6] border border-yellow-400 px-6 py-4 rounded-lg max-w-xl text-center z-10">
        <h2 className="text-2xl font-extrabold text-red-600 uppercase mb-2">Beginner Mastercourse</h2>
        <p className="text-lg font-medium">
          A comprehensive Spanish MasterCourse with over +70 videos for 14 hours of content that will empower your Spanish!
        </p>
      </div>

      {/* Video Section */}
      <div className="w-[100%] sm:w-[45%] h-[350px] mx-auto relative">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/tjkOYzYazAw"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button className="h-[50px] px-6 bg-blue-900 text-white font-semibold mt-3 hover:bg-blue-800 rounded-[40px] cursor-pointer"
        onClick={() => window.scrollTo({ top: document.body.scrollHeight - 1400, behavior: "smooth" })}
      >
        DISCOVER MY COURSES
      </button>
      <ItemCollapse />
    </div>
  )
}
