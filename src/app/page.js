'use client'
import { useEffect, useState } from "react"
import CountdownTimer from "./components/countdowntime"
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-contain bg-center"
      style={{ backgroundImage: "url('/vinh-ha-long.jpg')" }}
    >
      {/* Thanh thông báo trên cùng */}
      <div className="bg-blue-900 text-white text-center py-2 text-sm font-semibold">
        REGISTRATIONS CLOSE SOON
      </div>

      {/* Phần nền ảnh và nội dung chính */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-4 py-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-vietnam.jpg')" }}
      >
        {/* Hộp thông tin */}
        <div className="bg-white/80 rounded-lg p-6 max-w-[60%] mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">Let's Speak Vietnamese!</h1>
          <p className="text-gray-700">
            Check my <span className="font-bold">Vietnamese MasterCourses</span>, visit their pages and pick your level. Remember, I can always switch you from one to another, in case it's needed!
          </p>
        </div>

        {/* Video hoặc hình ảnh người dạy */}
        <div className="w-[40%] h-[350px] mx-auto relative">
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
      </div>
      <div className="h-[300px]">
        <CountdownTimer targetDate="2025-07-01T00:00:00" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-start p-4">
        <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-start p-4">
          {/* Card 1 */}
          <motion.div
            className="border rounded-lg shadow-lg p-4 bg-white text-center space-y-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <img src="/beginner.jpg" alt="Beginner Course" className="w-full rounded" />
            <h3 className="text-lg md:text-xl font-bold text-blue-900">
              VIETNAMESE MADE EASY: BEGINNER COURSE
            </h3>
            <p className="text-gray-700 text-sm h-[80px]">
              This course is perfect for beginners! We’ll start with the fundamentals, building a solid foundation
              in Vietnamese so you can understand and have basic conversations in no time.
            </p>
            <p className="font-semibold">Let’s start!</p>
            <button className="h-[40px] rounded-[40px] bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 cursor-pointer">
              FIND OUT MORE
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="border rounded-lg shadow-lg p-4 bg-white text-center space-y-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <img src="/beginner.jpg" alt="Intermediate Course" className="w-full rounded" />
            <h3 className="text-lg md:text-xl font-bold text-blue-900">
              VIETNAMESE MADE EASY: INTERMEDIATE COURSE
            </h3>
            <p className="text-gray-700 text-sm h-[80px]">
              Ready to level up your Vietnamese? This intermediate course is perfect for those who’ve got the basics
              down and are eager to speak more confidently and fluently. Let’s take your skills to new heights!
            </p>
            <p className="font-semibold">Let’s go!</p>
            <button className="h-[50px] rounded-[40px] bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 cursor-pointer">
              FIND OUT MORE
            </button>
          </motion.div>

          {/* Card 3 */}
          <div className="md:col-span-2 flex justify-center">
            <motion.div
              className="border rounded-lg shadow-lg p-4 bg-white text-center space-y-4 w-[50%]"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <img src="/beginner.jpg" alt="Intermediate Course" className="w-full rounded" />
              <h3 className="text-lg md:text-xl font-bold text-blue-900">
                VIETNAMESE MADE EASY: INTERMEDIATE COURSE
              </h3>
              <p className="text-gray-700 text-sm h-[80px]">
                Ready to level up your Vietnamese? This intermediate course is perfect for those who’ve got the basics
                down and are eager to speak more confidently and fluently. Let’s take your skills to new heights!
              </p>
              <p className="font-semibold">Let’s go!</p>
              <button className="h-[50px] rounded-[40px] bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 cursor-pointer">
                FIND OUT MORE
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-blue-900 text-white py-4 h-[140px]">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-col md:flex-row space-y-2 md:space-y-0">
          <p className="text-center md:text-left text-sm">
            © 2025 Letsspeakvietnamese
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
