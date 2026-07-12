import React from 'react'

const HeroTitle = () => {
  return (
<>
    <h1 className="text-6xl font-bold text-white">Mac MacBook Pro</h1>

    <div className="relative flex items-center justify-center py-20 bg-black overflow-hidden">
      {/* Glow layer */}
      <div
        className="absolute w-[900px] h-[300px] blur-3xl opacity-90"
        style={{
          background:
            "linear-gradient(90deg, #00c6ff, #8b5cf6, #ec4899, #f97316)",
        }}
      />
      {/* Text on top */}
      <h1 className="relative text-6xl font-bold text-white">
        Built for Apple Intelligence.
      </h1>
    </div>

    <div className="relative flex items-center justify-center py-20 bg-black overflow-hidden">
      {/* Glow layer */}
      <div
        className="absolute w-[900px] h-[300px] blur-3xl opacity-90"
        style={{
          background:
            "linear-gradient(90deg, #00c6ff, #8b5cf6, #ec4899, #f97316)",
        }}
      />
      {/* Text on top */}
      <h1 className="relative text-6xl font-regular text-white">
        Built for Apple Intelligence.
      </h1>
    </div>
  </>
  )
}

export default HeroTitle