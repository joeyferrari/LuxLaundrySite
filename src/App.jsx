import { useState, useEffect } from "react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { ChevronLeft, ChevronRight, Menu, Star } from 'lucide-react'
import Marquee from "react-fast-marquee"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PopupForm from "./components/PopupForm"

function App() {
  const [weight, setWeight] = useState('')
  const [costResult, setCostResult] = useState('')
  const [placeholder, setPlaceholder] = useState('')

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  }

  useEffect(() => {
    let currentIndex = 0
    const placeholderText = "Enter your LBS "
    let typingInterval

    const typePlaceholder = () => {
      if (currentIndex < placeholderText.length) {
        setPlaceholder(prev => prev + placeholderText[currentIndex])
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          currentIndex = 0
          setPlaceholder('')
          typingInterval = setInterval(typePlaceholder, 100)
        }, 1000)
      }
    }

    typingInterval = setInterval(typePlaceholder, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const calculateCost = () => {
    const pricePerPound = 1.88
    if (weight && parseFloat(weight) > 0) {
      const totalCost = (parseFloat(weight) * pricePerPound).toFixed(2)
      setCostResult(`Your laundry cost is $${totalCost}.`)
    } else {
      setCostResult("Please enter a valid weight.")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <PopupForm />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
              <Button variant="ghost" className="font-semibold">
                LOG IN
              </Button>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <img src="/placeholder.svg" alt="Poplin" className="w-[100px] h-[40px]" />
            </div>
            <Button className="bg-[#F38BA3] hover:bg-[#F38BA3]/90 text-white rounded-full px-6">
              CREATE ACCOUNT
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="pt-16 bg-white text-xs tracking-wider uppercase">
        <Marquee speed={50} className="py-3">
          <span className="mx-4">Nationwide personal laundry service in over 500 cities</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Nationwide personal laundry service in over 500 cities</span>
          <span className="mx-4">•</span>
        </Marquee>
      </div>

      {/* Hero */}
      <section className="bg-[#F38BA3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="relative z-10">
            <h1 className="font-mono text-6xl md:text-7xl lg:text-8xl text-white max-w-2xl">
              The smart way to do laundry.
            </h1>
          </div>
          <img
            src="/placeholder.svg"
            alt="Yellow towels"
            className="absolute right-0 top-0 h-full w-1/2 object-cover"
          />
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-mono text-4xl md:text-5xl text-center mb-8">
            Don&apos;t just take our word for it
          </h2>
          <p className="text-center mb-8">See why our customers rate us</p>
          <div className="flex justify-center mb-12">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[#F38BA3] fill-[#F38BA3]" />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F38BA3] fill-[#F38BA3]" />
                  ))}
                </div>
                <p className="font-semibold mb-4">Great service!</p>
                <p className="text-gray-600 text-sm">
                  Amazing service, quick turnaround, and perfectly folded clothes!
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-[#F38BA3]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-mono text-3xl text-white mb-4">LAUNDRY PROS</h2>
          <h3 className="font-mono text-5xl text-white mb-12">
            Laundry is our love language
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Folded shirts"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Clean clothes"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Laundry service"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm uppercase mb-4">STARTING AT</p>
          <h2 className="font-mono text-6xl mb-12">$1.88/pound</h2>
          <div className="max-w-xl mx-auto">
            <p className="uppercase text-sm mb-4">HOW MUCH DOES LAUNDRY WEIGH?</p>
            <p className="font-mono text-4xl mb-12">1 hamper ≈ 10 pounds</p>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="font-mono text-2xl mb-8">
                Particular about your laundry? Us too.
              </h3>
              <div className="text-center mt-12 mb-12">
                <input
                  type="number"
                  id="weight"
                  placeholder={placeholder}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="text-4xl border-none p-4 w-full max-w-[600px] text-center bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontSize: '2.5rem' }}
                />
                <br /><br />
                <button
                  onClick={calculateCost}
                  className="px-10 py-4 bg-white border border-gray-300 rounded-full text-xl cursor-pointer hover:bg-gray-100 transition-colors duration-200"
                >
                  CALCULATE COST
                </button>
                <p className="mt-5 text-lg" style={{ color: costResult.includes("Please enter") ? 'red' : 'green' }}>
                  {costResult}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Delivery */}
      <section className="bg-[#F38BA3] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-mono text-5xl text-white mb-4">
            enjoy free pickup & delivery
          </h2>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl border-2 border-[#99C5FA] p-8">
            <div className="flex justify-center">
              <div className="flex-1 flex flex-col items-center px-12">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#99C5FA]">
                  <img
                    src="/placeholder.svg"
                    alt="Ashley A."
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-mono text-2xl mb-4">Ashley A.</h3>
                <div className="bg-[#99C5FA]/20 text-[#3B82F6] px-4 py-2 rounded-full text-sm mb-8">
                  LAUNDRY PRO SINCE JUNE 2022
                </div>
                <p className="text-xl text-center mb-4">
                  "I absolutely love making my customers happy. I try to go above and beyond for them!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App 