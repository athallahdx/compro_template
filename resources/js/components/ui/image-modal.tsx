"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, User, Calendar, Hash, CheckCircle, XCircle, ImagesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Portofolio } from "@/types"

interface ImageModalProps {
    isOpen: boolean
    onClose: () => void
    portfolio: Portofolio
}

export function ImageModal({ isOpen, onClose, portfolio }: ImageModalProps) {
    const [activeIndex, setActiveIndex] = useState(0)

    if (!isOpen) return null

    const images = portfolio.images || []

    const nextImage = () => {
        setActiveIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
            <div className="relative max-h-[95vh] max-w-7xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">{portfolio.client_name}</h2>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 hover:cursor-pointer hover:bg-gray-100"
                    >
                        <X className="h-6 w-6" />
                    </Button>
                </div>

                <div className="flex flex-col lg:flex-row max-h-[calc(95vh-120px)]">
                    <div className="flex-1 relative bg-gray-50">
                        {images.length > 0 ? (
                            <>
                                <div className="relative aspect-video bg-gray-100 flex items-center justify-center">
                                    <img
                                        src={`/storage/${images[activeIndex]}`}
                                        alt={`${portfolio.client_name} - Image ${activeIndex + 1}`}
                                        className="max-w-full max-h-full object-contain"
                                    />

                                    {/* Navigation Arrows */}
                                    {images.length > 1 && (
                                        <>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 shadow-lg"
                                            >
                                                <ChevronLeft className="h-6 w-6" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 shadow-lg"
                                            >
                                                <ChevronRight className="h-6 w-6" />
                                            </Button>
                                        </>
                                    )}

                                    {/* Image Counter */}
                                    {images.length > 1 && (
                                        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {activeIndex + 1} / {images.length}
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnail Navigation */}
                                {images.length > 1 && (
                                    <div className="p-4 bg-white border-t border-gray-200">
                                        <div className="flex gap-2 overflow-x-auto pb-2">
                                            {images.map((image, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setActiveIndex(index)}
                                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                                                        index === activeIndex
                                                            ? "border-orange-500 opacity-100 shadow-lg"
                                                            : "border-gray-200 opacity-70 hover:opacity-90 hover:border-orange-300"
                                                    }`}
                                                >
                                                    <img
                                                        src={`/storage/${image}`}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="aspect-video bg-gray-100 flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <ImagesIcon className="h-16 w-16 mx-auto mb-4 opacity-50" />
                                    <p>No images available</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="w-full lg:w-96 bg-white border-l border-gray-200 overflow-y-auto">
                        <div className="p-6 space-y-6">
                            {/* Project Details */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                    <Hash className="h-5 w-5 text-orange-500" />
                                    Detail Portofolio
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <User className="h-5 w-5 text-orange-500 mt-0.5" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-700">Klien</p>
                                            <p className="text-gray-900 font-semibold">{portfolio.client_name}</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            {/* Description */}
                            {portfolio.description && (
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi</h3>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <p className="text-gray-700 leading-relaxed">{portfolio.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
