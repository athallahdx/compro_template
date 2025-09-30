"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { Banner, MottoDescription } from "@/types"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SwipeableBannerProps {
    banners: Banner[]
    mottoDescription: MottoDescription | null
}

export default function SwipeableBanner({ banners, mottoDescription }: SwipeableBannerProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    // Filter only active banners
    const activeBanners = banners

    // Auto-play functionality
    useEffect(() => {
        if (activeBanners.length <= 1) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === activeBanners.length - 1 ? 0 : prevIndex + 1))
        }, 6000) // Increased interval to 6 seconds for better UX

        return () => clearInterval(interval)
    }, [activeBanners.length])

    // If no active banners, don't render anything
    if (activeBanners.length === 0) {
        return null
    }

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? activeBanners.length - 1 : currentIndex - 1)
    }

    const goToNext = () => {
        setCurrentIndex(currentIndex === activeBanners.length - 1 ? 0 : currentIndex + 1)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    // Handle touch events for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe && activeBanners.length > 1) {
            goToNext()
        }
        if (isRightSwipe && activeBanners.length > 1) {
            goToPrevious()
        }
    }

    return (
        <div className="relative w-full">
            {/* Banner Container - Full Width */}
            <div
                className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 w-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Banner Images */}
                <div
                    className="flex transition-transform duration-500 ease-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {activeBanners.map((banner, index) => (
                        <div key={banner.id} className="w-full flex-shrink-0 relative">
                            <img
                                src={`/storage/${banner.image}`}
                                alt={banner.title}
                                className="w-full h-full object-cover"
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                        </div>
                    ))}
                </div>

                {mottoDescription && (
                    <div className="absolute inset-0 flex items-center">
                        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
                            <div className="max-w-3xl">
                                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-full uppercase tracking-wider">
                    Jersey Brand
                  </span>
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-2xl text-white font-black mb-6 drop-shadow-2xl leading-tight tracking-tight">
                                    {mottoDescription.motto}
                                </h1>
                                {mottoDescription.description && (
                                    <p className="text-xl md:text-2xl lg:text-xl text-white/95 drop-shadow-lg leading-relaxed font-medium max-w-2xl">
                                        {mottoDescription.description}
                                    </p>
                                )}
                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <button className="px-8 py-4 hover:cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        Lihat Koleksi
                                    </button>
                                    <button className="px-8 py-4 hover:cursor-pointer border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold rounded-lg transition-all duration-300">
                                        Hubungi Kami
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeBanners.length > 1 && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 z-10 group"
                            aria-label="Previous banner"
                        >
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 z-10 group"
                            aria-label="Next banner"
                        >
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
                        </button>
                    </>
                )}
            </div>

            {activeBanners.length > 1 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                    {activeBanners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                                index === currentIndex
                                    ? "bg-orange-500 shadow-lg scale-125"
                                    : "bg-white/50 hover:bg-white/70 hover:scale-110"
                            }`}
                            aria-label={`Go to banner ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
