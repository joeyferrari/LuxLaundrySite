'use client';

import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Menu, ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Marquee = dynamic(() => import('react-fast-marquee'), {
  ssr: false
});

const PopupForm = dynamic(() => import('../components/PopupForm'), {
  ssr: false
});

export default function Home() {
  const [weight, setWeight] = useState('');
  const [costResult, setCostResult] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [zipcode, setZipcode] = useState('');
  const [zipcodeResult, setZipcodeResult] = useState('');

  const testimonials = [
    {
      name: "Sara Srogi",
      since: "AUGUST 2024",
      quote: "I own a salon and use Lux Laundry delivery service for my salon towels. I schedule pick up/delivery through the app. Towels are delivered back clean and folded. Lux goes above and beyond sorting them by color! They smell fantastic. Easy communication, text notifications before pickup/drop off. Cost is extremely reasonable."
    },
    {
      name: "Kevin Kirkwood",
      since: "AUGUST 2024",
      quote: "Prompt, professional pickups/drop offs. Clothes arrive perfectly clean and perfectly folded. Their service saves me a lot of time. I highly recommend them!"
    },
    {
      name: "Naika Baptiste",
      since: "MARCH 2024",
      quote: "This place gets a 5 star times 10. Joey was very helpful, accommodated me at the very last minute. This will for sure continue to receive business from me. Well deserved! Thank you so much Joey very professional continue being kind."
    }
  ];

  const servicedZipCodes = ["18001", "18002", "18010", "18013", "18014", "18015", "18016", "18017", 
    "18020", "18035", "18038", "18040", "18042", "18043", "18044", "18045", 
    "18050", "18055", "18063", "18064", "18067", "18072", "18083", "18085", 
    "18086", "18088", "18091", "18343", "18351", "18011", "18018", "18031", 
    "18032", "18034", "18036", "18037", "18046", "18049", "18051", "18052", 
    "18053", "18059", "18060", "18062", "18065", "18066", "18068", "18069", 
    "18078", "18079", "18080", "18087", "18092", "18101", "18102", "18103", 
    "18104", "18105", "18106", "18109", "18195"];

  const handlePrevSlide = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Get the indices for the three visible testimonials
  const prevIndex = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
  const nextIndex = currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1;

  const calculateCost = () => {
    const pricePerPound = 1.88;
    if (weight && parseFloat(weight) > 0) {
      const totalCost = (parseFloat(weight) * pricePerPound).toFixed(2);
      setCostResult(`Your laundry cost is $${totalCost}.`);
    } else {
      setCostResult("Please enter a valid weight.");
    }
  };

  const checkZipcode = () => {
    if (servicedZipCodes.includes(zipcode.trim())) {
      setZipcodeResult({ text: "Great news! We service your area.", color: "green" });
    } else {
      setZipcodeResult({ text: "Sorry, we do not service your area at this time.", color: "red" });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
              <a href="tel:484-246-9163" className="text-gray-600 hover:text-[#F38BA3] transition-colors">
                <Button variant="ghost" className="font-semibold">
                  CALL US
                </Button>
              </a>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="font-mono text-2xl text-[#F38BA3]">
                Lux Laundry
              </div>
            </div>
            <a 
              href="https://cleancloudapp.com/s3/23175#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#F38BA3] hover:bg-[#F38BA3]/90 text-white rounded-full px-6">
                CREATE ACCOUNT
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <div className="pt-16 bg-white text-xs tracking-wider uppercase">
        <Marquee speed={50} className="py-3">
          <span className="mx-4">Get $15 off your first order with code $15OFF!</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Get $15 off your first order with code $15OFF!</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Get $15 off your first order with code $15OFF!</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Get $15 off your first order with code $15OFF!</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Get $15 off your first order with code $15OFF!</span>
          <span className="mx-4">•</span>
        </Marquee>
      </div>

      <section className="bg-[#F38BA3]">
        <div className="flex h-[60vh]">
          <div className="w-1/2 pl-20 flex items-center">
            <h1 className="font-mono text-[5rem] leading-tight tracking-wide text-white">
              The smart<br />
              way to do<br />
              laundry.
            </h1>
          </div>
          <div className="w-1/2 relative">
            <Image
              src="/phone.png"
              alt="Lux Laundry mobile app"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-mono text-4xl md:text-5xl text-center mb-8">
            Don&apos;t just take our word for it
          </h2>
          <p className="text-center text-gray-600 mb-16">See what our customers are saying</p>
          
          {/* Testimonial Slider */}
          <div className="relative px-12">
            <div className="flex items-stretch justify-center gap-8">
              {/* Left Card */}
              <div className="w-[400px] flex transform scale-90 opacity-70 transition-all duration-300">
                <div className="bg-white rounded-xl border-2 border-[#F38BA2]/30 p-8 flex flex-col items-center w-full">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-[#F38BA2]">
                    <Image
                      src="/placeholder.svg"
                      alt={testimonials[prevIndex].name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className="font-mono text-xl mb-2">{testimonials[prevIndex].name}</h3>
                  <div className="bg-[#F38BA2]/10 text-[#F38BA2] px-4 py-2 rounded-full text-sm mb-6">
                    CUSTOMER SINCE {testimonials[prevIndex].since}
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">
                    &ldquo;{testimonials[prevIndex].quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Center Card */}
              <div className="w-[400px] flex transform scale-100 z-10 transition-all duration-300">
                <div className="bg-white rounded-xl border-2 border-[#F38BA2] p-8 flex flex-col items-center w-full shadow-lg">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-[#F38BA2]">
                    <Image
                      src="/placeholder.svg"
                      alt={testimonials[currentTestimonial].name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className="font-mono text-xl mb-2">{testimonials[currentTestimonial].name}</h3>
                  <div className="bg-[#F38BA2]/20 text-[#F38BA2] px-4 py-2 rounded-full text-sm mb-6">
                    CUSTOMER SINCE {testimonials[currentTestimonial].since}
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">
                    &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Card */}
              <div className="w-[400px] flex transform scale-90 opacity-70 transition-all duration-300">
                <div className="bg-white rounded-xl border-2 border-[#F38BA2]/30 p-8 flex flex-col items-center w-full">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-[#F38BA2]">
                    <Image
                      src="/placeholder.svg"
                      alt={testimonials[nextIndex].name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className="font-mono text-xl mb-2">{testimonials[nextIndex].name}</h3>
                  <div className="bg-[#F38BA2]/10 text-[#F38BA2] px-4 py-2 rounded-full text-sm mb-6">
                    CUSTOMER SINCE {testimonials[nextIndex].since}
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">
                    &ldquo;{testimonials[nextIndex].quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
              onClick={handlePrevSlide}
            >
              <ChevronLeft className="w-6 h-6 text-[#F38BA2]" />
            </button>
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50"
              onClick={handleNextSlide}
            >
              <ChevronRight className="w-6 h-6 text-[#F38BA2]" />
            </button>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center mt-12 gap-2">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-[#F38BA2]' : 'bg-[#F38BA2]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-20 bg-[#F38BA3]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-mono text-5xl text-white mb-16">
            Laundry is our love language
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Washing Machine */}
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 text-[#F38BA3]">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M20 4H4C2.89543 4 2 4.89543 2 6V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6H6.01M10 6H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-mono text-xl mb-4">Expert Cleaning</h4>
              <p className="text-gray-600">Professional washing and drying with care for every fabric type</p>
            </div>

            {/* Folded Clothes */}
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 text-[#F38BA3]">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M21 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V21M12 3L7 8M12 3L17 8M12 21L7 16M12 21L17 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-mono text-xl mb-4">Perfect Folding</h4>
              <p className="text-gray-600">Meticulously folded and organized for your convenience</p>
            </div>

            {/* Delivery Truck */}
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 text-[#F38BA3]">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path d="M16 16V3H1V16H16ZM16 16H23V11L20 8H16V16ZM5.5 19C6.88071 19 8 17.8807 8 16.5C8 15.1193 6.88071 14 5.5 14C4.11929 14 3 15.1193 3 16.5C3 17.8807 4.11929 19 5.5 19ZM18.5 19C19.8807 19 21 17.8807 21 16.5C21 15.1193 19.8807 14 18.5 14C17.1193 14 16 15.1193 16 16.5C16 17.8807 17.1193 19 18.5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="font-mono text-xl mb-4">Fast Delivery</h4>
              <p className="text-gray-600">Convenient pickup and delivery right to your door</p>
            </div>
          </div>
        </div>
      </section>

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
                  placeholder="Enter your LBS"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="text-4xl border-none p-4 w-full max-w-[600px] text-center bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ fontSize: '2.5rem' }}
                />
                <br /><br />
                <button
                  onClick={calculateCost}
                  className="w-full px-10 py-4 bg-white border border-gray-300 rounded-full text-xl cursor-pointer hover:bg-gray-100 transition-colors duration-200"
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

      <section className="bg-[#F38BA3] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-mono text-5xl text-white mb-4">
            enjoy free pickup & delivery
          </h2>
        </div>
      </section>

      {/* Service Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Schedule Online */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 text-[#F38BA3]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3 className="text-2xl font-mono mb-4">Schedule Online</h3>
              <p className="text-gray-600">Choose pickup and drop-off times that works best for you in our mobile or web app.</p>
            </div>

            {/* We Pickup */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 text-[#F38BA3]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-mono mb-4">We Pickup</h3>
              <p className="text-gray-600">A delivery agent will pick up your laundry during your scheduled pickup time.</p>
            </div>

            {/* Expert Cleaning */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 text-[#F38BA3]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h3 className="text-2xl font-mono mb-4">Expert Cleaning</h3>
              <p className="text-gray-600">Sit back and relax. Never worry about laundry or dry cleaning again.</p>
            </div>

            {/* We Deliver */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-6 text-[#F38BA3]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"/>
                  <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-mono mb-4">We Deliver</h3>
              <p className="text-gray-600">Your clothes come back clean and wrinkle-free on your scheduled drop-off date.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zip Code Checker Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="font-mono text-4xl text-center mb-12">
              Personal laundry service in<br />
              Lehigh and Northampton County
            </h2>
            <input
              type="text"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              placeholder="Type your zip code"
              className="text-4xl border-2 border-[#F38BA3]/30 rounded-lg p-4 w-full max-w-[600px] text-center bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F38BA3] focus:border-transparent"
              style={{ fontSize: '2.5rem' }}
            />
            <br />
            <button
              onClick={checkZipcode}
              className="px-10 py-4 bg-white border border-gray-300 rounded-full text-xl cursor-pointer hover:bg-gray-100 transition-colors duration-200"
            >
              CHECK YOUR AREA
            </button>
            {zipcodeResult && (
              <p 
                className="mt-5 text-lg transition-all duration-300"
                style={{ color: zipcodeResult.color }}
              >
                {zipcodeResult.text}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-mono text-4xl text-center mb-4">FAQs</h2>
          <h3 className="text-center text-xl mb-16">Want to know more?</h3>

          <div className="space-y-4">
            {[
              {
                q: "We have a business that offers towels to our guests, can we send just towels in?",
                a: "Yes! We launder towels for both residential and commercial pickups."
              },
              {
                q: "Can I send in my shoes to be washed?",
                a: "Any machine washable shoes may be sent in."
              },
              {
                q: "Do you launder coats?",
                a: "Yes, any machine washable coats may be sent in with your regular laundry."
              },
              {
                q: "Do you treat stains?",
                a: "Certainly, we do offer stain removal services. Please segregate all stained clothing and place them in the designated \"Special Attention\" bag. Kindly inform us of the stained items by leaving a note in the bag or updating your laundry profile, and we will endeavor to remove the stains to the best of our ability. However, please note that although we have a good track record of stain removal, we cannot guarantee that all stains will be completely eliminated. For optimal results, we recommend pre-treating the stains before placing the garment in the bag."
              },
              {
                q: "Do you launder items that are soiled?",
                a: "Lux Laundry reserves the right to refuse service of items soiled with bodily fluids, chemicals, or garbage. If we are unable to launder, items will be returned unwashed. In the event that we can launder, laundry is subject to a sanitation fee."
              },
              {
                q: "Does Lux Laundry wash, dry, and fold bedding?",
                a: "Yes, we do!"
              },
              {
                q: "What happens if you lose/damage some garments?",
                a: "We strive to provide high-quality care and we work hard to keep up with those standards. If we lose or damage an article, please notify customer service within 24 hours of the laundry being returned to you.\n\nUnfortunately, we cannot be responsible for laundry that is lost or damaged by the weather after it is dropped off at your home."
              },
              {
                q: "Will my clothes be washed or dried with other customer's clothes?",
                a: "No. We wash and dry our customers' laundry individually in separate machines!"
              },
              {
                q: "Can I add special instructions for my laundry?",
                a: "Yes!"
              },
              {
                q: "What steps do you take to accommodate customers with allergies?",
                a: "Kindly note that if you have a hypersensitivity to scents from laundry products, we may not be able to guarantee that your order will be returned in accordance with your needs. However, we will make every effort to adhere to your specified preferences for your laundry. If you have any concerns or queries regarding this matter, please do not hesitate to contact us before scheduling a pickup."
              },
              {
                q: "What detergents, softeners, dryer sheets and bleaches does Lux Laundry offer?",
                a: "Detergents: Tide, Gain, Cheer, All Free & Clear, Seventh Generation\nSofteners: Downy, White Vinegar\nDryer Sheets: Bounce\nBleaches: Clorox, Oxi-Clean"
              },
              {
                q: "Can I choose if my items are folded or hung?",
                a: "Absolutely! When customizing your preferences, you can select this option for both shirts and pants. Additionally, you have the flexibility to modify or update these preferences at any time via your account.\n\nHowever, please be aware that we are currently facing supply shortages of metal hangers due to national constraints. As a result, some facilities may levy a fee of up to $1 per hanger used.\n\nWe encourage you to send in your own hangers, which should be labeled with your name for ease of identification, or return any wire hangers to be recycled."
              },
              {
                q: "Can I choose my dryer temperature?",
                a: "Yes! You can select low, medium or high when you set up your preferences. These can also be changed and updated anytime in your account."
              },
              {
                q: "Who is doing my laundry?",
                a: "We employ W2 professional staff who complete your laundry in our professional facilities. Laundry is not done by gig workers in their private residences."
              },
              {
                q: "Do you offer pickups on weekends?",
                a: "For your convenience, some of our facilities offer services on weekends."
              },
              {
                q: "Are you closed on Federal Holidays?",
                a: "New Year's Day – January 1\nMemorial Day – Last Monday in May\nIndependence Day – July 4\nLabor Day – First Monday in September\nThanksgiving Day – Fourth Thursday in November\nChristmas Day – December 25"
              },
              {
                q: "I received a bag of laundry that is not mine, what do I do?",
                a: "If you have received items that are not yours, please text, or call the Lux Laundry Customer Service team at 484-246-9163. We thank you in advance!"
              },
              {
                q: "Where is laundry left for pickup/drop-off?",
                a: "It is advised that you choose a pickup and drop-off location that is sheltered from weather conditions, if feasible. Majority of our customers prefer having their laundry left at a front or back porch, garage or handed over to their building manager. It is important that you specify the exact pickup and drop-off location in your account's instructions."
              },
              {
                q: "How do I schedule my next laundry pickup?",
                a: "Simply click on schedule tab and fill out the form"
              },
              {
                q: "What do I put my laundry in?",
                a: "For your first pick up, any type of plastic or fabric bag will do! Please do not use hampers or boxes."
              },
              {
                q: "Is there a limit to how much I can send in to be washed?",
                a: "No! You can send all your laundry in at one time. Please note orders over 75 pounds make take an additional day to process."
              },
              {
                q: "I forgot to leave my laundry out on my scheduled pickup day. What should I do?",
                a: "Lux Laundry has incorporated email pickup tool in its software to help you remember your laundry pickup day. However, if you do forget to leave your laundry out, we will charge a missed pickup fee ($35) to cover the cost of a driver going to your home or business.\n\nTo Avoid Missed Pickup Fees: Please cancel the pickup on your account by 4 am ET the day of your scheduled pickup. Any cancellations after 4am ET are subject to Missed Pickup fees."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full flex justify-between items-center py-4 text-left"
                  onClick={() => {
                    const element = document.getElementById(`faq-${index}`);
                    if (element) {
                      element.classList.toggle('hidden');
                    }
                  }}
                >
                  <span className="font-mono text-lg">{faq.q}</span>
                  <span className="text-2xl">+</span>
                </button>
                <div id={`faq-${index}`} className="hidden pb-4 text-gray-600 whitespace-pre-line">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>

          {/* Map Image */}
          <div className="mt-20 mb-20">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/map.png"
                alt="Map showing Lux Laundry location"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Address Section */}
          <div className="text-center">
            <a 
              href="https://maps.google.com/?q=411+front+street+Catasauqua+PA+18032" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:text-[#F38BA3] transition-colors"
            >
              <h3 className="font-mono text-2xl mb-2">Visit Us</h3>
              <p className="text-gray-600">
                411 Front Street<br />
                Catasauqua, PA 18032
              </p>
            </a>
            <div className="mt-4">
              <a 
                href="tel:484-246-9163"
                className="inline-block text-gray-600 hover:text-[#F38BA3] transition-colors"
              >
                484-246-9163
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#F38BA3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 text-sm text-white">
            <a 
              href="/terms" 
              className="hover:text-white/80 transition-colors"
            >
              Terms of Service
            </a>
            <span>•</span>
            <a 
              href="/privacy" 
              className="hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
          <div className="text-center mt-4 text-sm text-white/90">
            © {new Date().getFullYear()} Lux Laundry. All rights reserved.
          </div>
        </div>
      </footer>

      <PopupForm />
    </main>
  );
} 