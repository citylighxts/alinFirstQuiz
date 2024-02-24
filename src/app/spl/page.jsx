'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

function page() {

  const [firstOption, setFirstOption] = useState("2x + 3y = 0")
  const [secondOption, setSecondOption] = useState("3x - 4 = 0")

  const changeFirstOption = () => {
    setFirstOption("That's Right! 🎉")
  }

  const changeSecondOption = () => {
    setSecondOption("Not quite right! 🤔")
  }

  return (
      <main className="flex items-center justify-center h-screen flex-col bg-black">
        <div className="flex grid-cols-1 sm:grid-cols-12 container mx-auto px-12 items-center justify-center">
          <div className="col-span-7 place-self-center text-center">

            <h1 className="text-transparent text-5xl sm:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">
              Sistem Persamaan Linier
            </h1>

            <div className="text-white text-l sm:text-xl lg:text-xl mt-2 mb-4">
              <div className="text-transparent font-bold text-2xl sm:text-3xl lg:text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 pb-2">
                  What did you learn in high school?
              </div>
                Sistem Persamaan Linier adalah suatu sistem persamaan yang memiliki 2 atau lebih variabel.
              <div className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 pt-2">
                Apakah persamaan di bawah ini merupakan SPL?
              </div>
              <div className="text-pink-400 pt-1 pb-1">
                <i>Klik untuk mengetahui jawabannya!</i>
              </div>
              <div onClick={changeFirstOption}>
                {firstOption}
              </div>
              <div onClick={changeSecondOption}>
                {secondOption}
              </div>

            </div>

            {/* <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
              Let's start studying <i>aljabar linier</i> with me! 🚀
            </p> */}

            <div className="flex space-x-4">
              <button className="bg-gradient-to-br from-blue-500 to-pink-600 text-white px-1 py-1 w-full rounded-full transition-all duration-300">
                  <span className="block bg-[#181818] hover:bg-[#333] rounded-full px-5 py-2">    
                    <Link href="/tableOfContents">
                      Table of Contents 📚
                    </Link>
                  </span>
              </button>
            </div>
              
          </div>
        </div>

      </main>
  );
}

export default page