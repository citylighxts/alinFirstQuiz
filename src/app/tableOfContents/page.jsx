import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <main className="flex items-center justify-center h-screen flex-col bg-black">
      <div className="flex grid-cols-1 sm:grid-cols-12 container mx-auto px-12 items-center justify-center"></div>
        <div className="col-span-7 place-self-center text-center">

        <h1 className="text-transparent text-5xl sm:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 font-extrabold">
          Table of Contents
        </h1>

          <div className="flex space-x-4 py-2">
            <button className="bg-gradient-to-br from-blue-500 to-pink-600 text-white px-1 py-1 w-full rounded-full transition-all duration-300">
                <span className="block bg-[#181818] hover:bg-[#333] rounded-full px-5 py-2">    
                    <Link href="/spl">
                    Spl 📚
                    </Link>
                </span>
            </button>
          </div>

          <div className="flex space-x-4 py-2">
            <button className="bg-gradient-to-br from-blue-500 to-pink-600 text-white px-1 py-1 w-full rounded-full transition-all duration-300">
                <span className="block bg-[#181818] hover:bg-[#333] rounded-full px-5 py-2">    
                    {/* <Link href="/tableOfContents"> */}
                    Matrix 📚
                    {/* </Link> */}
                </span>
            </button>
          </div>

          <div className="flex space-x-4 py-2">
            <button className="bg-gradient-to-br from-blue-500 to-pink-600 text-white px-1 py-1 w-full rounded-full transition-all duration-300">
                <span className="block bg-[#181818] hover:bg-[#333] rounded-full px-5 py-2">    
                    {/* <Link href="/tableOfContents"> */}
                    Determinan 📚
                    {/* </Link> */}
                </span>
            </button>
              
          </div>
      </div>

    </main>
  );
}

export default page