"use client"

import AppLayout from "@/layouts/app-layout"
import type { HomePageProps } from "@/types"
import { Head } from "@inertiajs/react"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home({ advantages, aboutUs, motto, contact, procedures, certifications }: HomePageProps) {
  const [currentProcedureIndex, setCurrentProcedureIndex] = useState(0)

  const nextProcedure = () => {
    setCurrentProcedureIndex((prev) => (prev + 1) % procedures.length)
  }

  const prevProcedure = () => {
    setCurrentProcedureIndex((prev) => (prev - 1 + procedures.length) % procedures.length)
  }

  return (
    <AppLayout contact={contact} motto={motto}>
      <Head title="Home" />
      <div className="min-h-screen">
        {/* First Section: Motto */}
        {motto && (
          <section className="relative min-h-[70vh] md:h-[85vh] flex items-center overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8 h-full">
              <div className="flex-1 z-10 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">{motto.motto}</h1>
                <p className="text-base md:text-xl text-black-100 max-w-2xl leading-relaxed mx-auto md:mx-0">
                  {motto.description}
                </p>
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <img
                  src={`/storage/${motto.image}`}
                  alt="Motto"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
            <div className="absolute inset-0"></div>
          </section>
        )}

        {/* Second Section: Certifications */}
        {certifications && certifications.length > 0 && (
          <section className="py-14 md:py-20 rounded-xl bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Our Certifications</h2>
                <p className="text-gray-600 text-base md:text-lg">Trusted quality assurance</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex flex-col items-center group">
                    <img
                      src={`/storage/${cert.logo}`}
                      alt={cert.name}
                      className="h-20 md:h-24 w-auto object-contain transition-all duration-300"
                    />
                    <p className="mt-3 text-sm text-gray-600 text-center">{cert.name}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 md:mt-12">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  See More Details
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Third Section: Why Choose Us (Advantages) */}
        {advantages && advantages.length > 0 && (
          <section className="py-14 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Why Choose Us</h2>
                <p className="text-gray-600 text-base md:text-lg">Discover what makes us different</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {advantages.map((advantage) => (
                  <div
                    key={advantage.id}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={`/storage/${advantage.icon}`}
                          alt={advantage.title}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                        {advantage.description && (
                          <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Fourth Section: How Coconut Sugar Is Made (Procedures Slider) */}
        {procedures && procedures.length > 0 && (
          <section className="py-14 md:py-20 rounded-xl bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">How Coconut Sugar Is Made</h2>
                <p className="text-gray-600 text-base md:text-lg">Step by step process</p>
              </div>

              <div className="relative max-w-6xl mx-auto">
                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentProcedureIndex * 100}%)` }}
                  >
                    {procedures.map((procedure) => (
                      <div key={procedure.id} className="w-full flex-shrink-0">
                        <div className="flex flex-col md:flex-row items-center justify-around md:min-h-96 gap-6 md:gap-0">
                          <div className="w-full md:flex-1">
                            <img
                              src={`/storage/${procedure.image}`}
                              alt={procedure.title}
                              className="w-full max-h-64 md:max-h-[50vh] object-contain"
                            />
                          </div>
                          <div className="w-full md:flex-1 md:pl-8 text-center md:text-left">
                            <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-3 md:mb-4 inline-block">
                              Step {procedure.order}
                            </div>
                            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                              {procedure.title}
                            </h3>
                            {procedure.description && (
                              <p className="text-gray-700 text-base md:text-xl leading-relaxed">
                                {procedure.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {procedures.length > 1 && (
                  <>
                    <button
                      onClick={prevProcedure}
                      aria-label="Previous slide"
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                      onClick={nextProcedure}
                      aria-label="Next slide"
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </>
                )}

                {procedures.length > 1 && (
                  <div className="flex justify-center mt-6 md:mt-8 space-x-2">
                    {procedures.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProcedureIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        title={`Slide ${index + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentProcedureIndex ? "bg-orange-500 scale-110" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Fifth Section: About Us */}
        {aboutUs && (
            <section className="py-14 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
                    About Coco Sugar
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {aboutUs.image && (
                        <div className="order-1 lg:order-1">
                        <img
                            src={`/storage/${aboutUs.image}`}
                            alt="About Coco Sugar"
                            className="w-full h-auto rounded-xl shadow-lg object-cover"
                        />
                        </div>
                    )}
                    <div
                        className={`order-2 lg:order-2 ${
                        !aboutUs.image ? "lg:col-span-2 text-center" : ""
                        }`}
                    >
                        <div className="prose prose-lg text-gray-700 leading-relaxed">
                        <p className="text-xl">{aboutUs.description}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            )}
      </div>
    </AppLayout>
  )
}
