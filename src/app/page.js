import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen flex-col bg-black">
      <div className="flex grid-cols-1 sm:grid-cols-12 container mx-auto px-12 items-center justify-center">
        <div className="col-span-7 place-self-center text-center">

          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <div className="text-transparent text-5xl sm:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-2">
                Hello,
            </div>
            Welcome to my page!
          </h1>

          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            Let's start studying <i>Aljabar Linier</i> with me! 🚀
          </p>

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
