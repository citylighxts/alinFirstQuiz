import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <main className="flex items-center justify-center h-screen flex-col bg-black">
      <div className="flex grid-cols-1 sm:grid-cols-12 container mx-auto px-12 items-center justify-center">
          <div className="col-span-7 place-self-center text-center">

          <h1 className="pb-4 text-transparent text-5xl sm:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">
              Penyimpangan SPL
          </h1>

          <div className="text-white text-l sm:text-xl lg:text-xl mb-4">
              <div className="text-transparent font-bold text-2xl sm:text-3xl lg:text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 pb-2">
                  Perhatikan persamaan-persamaan berikut :
              </div>
              x₁ + 1/2x₂ + 1/3x₃ = 1 <br />
              1/2x₁ + 1/3x₂ + 1/4x₃ = 0 <br />
              1/3x₁ + 1/4x₂ + 1/5x₃ = 0 <br />
              <div className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 pt-2">
                x₁ = 9, x₂ = -36, dan x₃ = 30
              </div>
              <div className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 pt-2 pb-2">
                  Jika ditulis dalam bentuk desimal menjadi :
              </div>
              0.3333x₁ + 0.5x₂ + 0.6667x₃ = 1 <br />
              0.5x₁ + 0.3333x₂ + 0.25x₃ = 0 <br />
              0.3333x₁ + 0.25x₂ + 0.2x₃ = 0 <br />
              <div className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 pt-2 pb-2">
                x₁ = 55.55, x₂ = -277.778, dan x₃ = 255.556
              </div>
              Maka, dapat kita simpulkan bahwa terdapat beberapa penyimpangan pada SPL tertentu.
          </div>

          <div className="flex space-x-4 mb-4">
              <button className="bg-gradient-to-br from-blue-500 to-pink-600 text-white px-1 py-1 w-full rounded-full transition-all duration-300">
                  <span className="block bg-[#181818] hover:bg-[#333] rounded-full px-5 py-2">    
                    <Link href="/spl">
                      Go back a page 🚀
                    </Link>
                  </span>
              </button>
              <button className="bg-gradient-to-br from-blue-500 to-pink-600 text-white px-1 py-1 w-full rounded-full transition-all duration-300">
                  <span className="block bg-[#181818] hover:bg-[#333] rounded-full px-5 py-2">    
                    <Link href="/./spl/interpretasiGeometrik">
                      Continue learning 🚀
                    </Link>
                  </span>
              </button>
            </div>

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
  )
}

export default page