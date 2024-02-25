'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Chart from 'chart.js/auto';


function Page() {
  const graphRef = useRef(null);

  useEffect(() => {
    if (graphRef.current) {
      const ctx = graphRef.current.getContext('2d');

      if (!graphRef.current.chart) {
        graphRef.current.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [0, 1, 2, 3, 4, 5],
            datasets: [
              {
                label: 'g₁: x + y = 3',
                data: [-0.2, 0.4, 1, 1.6, 2.2, 2.8],
                borderColor: 'pink',
                fill: false,
              },
              {
                label: 'g₂: 3x - 5y = 1',
                data: [0.8, 0.2, -0.4, -1, -1.6, -2.2],
                borderColor: 'purple',
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    }
  }, []);

  return (
    <main className="flex items-center justify-center h-screen flex-col bg-black">
      <div className="flex grid-cols-1 sm:grid-cols-12 container mx-auto px-12 items-center justify-center">
        <div className="col-span-7 place-self-center text-center">

        <h1 className="pb-4 text-transparent text-5xl sm:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">
            Interpretasi Geometrik
        </h1>

        <div className="text-white text-l sm:text-xl lg:text-xl mb-4">
            <div className="text-transparent font-bold text-2xl sm:text-3xl lg:text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 pb-2">
            Sistem menggambarkan 2 garis lurus pada sebuah bidang datar
            </div>
            g₁ : x + y = 3 <br />
            g₂ : 3x - 5y = 1 <br />
            <div className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 pt-2">
              g₁ dan g₂ berpotongan pada titik (2, 1)
            </div>
        </div>


        <div className="mb-6">
          <canvas ref={graphRef} width="200" height="200"></canvas>
        </div>

        <div className="flex space-x-4 mb-4">
            <button className="bg-gradient-to-br from-blue-500 to-pink-600 text-white px-1 py-1 w-full rounded-full transition-all duration-300">
                <span className="block bg-[#181818] hover:bg-[#333] rounded-full px-5 py-2">    
                  <Link href="/./spl/penyimpanganSpl">
                    Go back a page 🚀
                  </Link>
                </span>
            </button>
            <button className="bg-gradient-to-br from-blue-500 to-pink-600 text-white px-1 py-1 w-full rounded-full transition-all duration-300">
                <span className="block bg-[#181818] hover:bg-[#333] rounded-full px-5 py-2">    
                  <Link href="/./finished">
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

export default Page;
