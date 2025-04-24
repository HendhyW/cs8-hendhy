import Logo from './assets/Logo.svg'
import Navbar from './components/NavBar'
import './App.css'
import Fortnite from './assets/fortnite.svg'
import Sekiro from './assets/sekiro.svg'
import EldenRing from './assets/eldenring.svg'
import Forza from './assets/forza.svg'
import { CarouselGame } from './components/Carousel.jsx'


function App() {
  const slides = [
    { image: EldenRing, text: "Elden Ring" },
    { image: Forza, text: "Forza Horizon 5" },
    { image: Sekiro, text: "Sekiro: Shadow Die Twice" },
    { image: Fortnite, text: "Fortnite" }
];

  return (
    // Gradient background mencakup seluruh page
    <div className='relative bg-gradient-to-b from-black to-color min-h-screen w-full'>
      
      {/* Background logo hanya di layar pertama */}
      <div className="relative h-screen w-full bg-logo bg-no-repeat bg-center bg-contain text-white">
        <Navbar />
      </div>

      {/* Semua konten */}
      <div className='w-full'>

        {/* konten1 */}
        <div className='flex flex-col items-center justify-center  h-screen'>
          <h1 className='text-4xl font-bold text-white'>About Us</h1>
          <p className='text-lg text-gray-300 mt-4'>Founded in 1991, Epic Games is an American company founded by CEO Tim Sweeney. The company is headquartered in Cary, North Carolina and has dozens of offices worldwide. Epic is a leading interactive entertainment company and provider of 3D engine technology. Epic operates one of the world’s largest games, Fortnite, which is a vibrant ecosystem of social entertainment experiences including first-party games like Fortnite Battle Royale, LEGO® Fortnite, Rocket Racing, and Fortnite Festival, as well as creator-made experiences. Epic has over 800 million accounts and over 6 billion friend connections across Fortnite, Fall Guys, Rocket League, and the Epic Games Store. The company also develops Unreal Engine, which powers many of the world’s leading games and is also adopted across industries such as film and television, broadcast and live events, architecture, automotive, and simulation. Through Fortnite, Unreal Engine, Epic Games Store, and Epic Online Services, Epic provides an end-to-end digital ecosystem for developers and creators to build, distribute, and operate games and other content.</p>
        </div>

        {/* konten2 */}
        <div className='flex flex-col items-center justify-center h-screen p-5'>
          <h1 className='text-4xl font-bold text-white p-10'>Our Featured Games</h1>
          <CarouselGame slides={slides} />
        </div>

      </div>
    </div>
  )
}

export default App
