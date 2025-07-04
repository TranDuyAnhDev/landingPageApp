import Image from "next/image"
import { useState } from "react"

export default function ItemCollapse() {
  const features = [
    {
      title: "Grammar",
      image: "/grammar.png",
      content: "Understand the logic and structure of the language, everything will start to make sense.",
    },
    {
      title: "Pronunciation",
      image: "/balloon.png",
      content: "You will master Spanish sounds and speak with confidence.",
    },
    {
      title: "Vocabulary",
      image: "/pool.png",
      content: "Expand your word knowledge and express yourself clearly.",
    },
    {
      title: "Culture",
      image: "/culture.png",
      content: "Discover Spanish culture, traditions, and real-life use cases.",
    },
  ]

  const [openIndexes, setOpenIndexes] = useState([])

  const handleToggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <div className="py-10 bg-[#FFF2E0] flex flex-col items-center w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-[#E74C3C] text-center mb-8">
        What YOU will be able to do after my <br /> Spanish MasterCourse
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 px-4 md:px-0 w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center w-full">
            
            <div className="w-40 h-40 relative">
              <Image src={feature.image} alt={feature.title} fill className="object-cover rounded-md" />
            </div>

            <div
              className="mt-4 px-6 py-2 border-2 border-[#E74C3C] rounded-3xl bg-[#FFEFD6] w-[180px] font-semibold text-center cursor-pointer transition-all duration-300"
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center">
                {feature.title}
                <span className="text-[#E74C3C] text-xl ml-2">
                  {openIndexes.includes(index) ? "−" : "+"}
                </span>
              </div>

              <div
                className={`transition-all duration-600 overflow-hidden text-sm mt-2 ${
                  openIndexes.includes(index) ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
                }`}
              >
                <p className="mt-2">{feature.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="px-8 py-2 bg-[#E74C3C] text-white rounded-full font-bold shadow-lg hover:bg-red-600 transition">
        Learn More
      </button>
    </div>
  )
}
