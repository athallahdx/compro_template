"use client"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { Icon } from "@/components/icon"
import { Button } from "@/components/ui/button"
import { Link, usePage } from "@inertiajs/react"
import type { BreadcrumbItem, NavItem } from "@/types"
import { Menu, X } from "lucide-react"
import AppLogo from "./app-logo"
import { cn } from "@/lib/utils"
import { useState } from "react"

const mainNavItems: NavItem[] = [
    {
        title: "ABOUT US",
        href: '/about-us',
    },
    {
        title: "PRODUCTS",
        href: '/products',
    },
    {
        title: "NEWS & BLOG",
        href: '/news',
    },
    {
        title: "RECIPES",
        href: '/recipes',
    }

]

interface AppHeaderProps {
    breadcrumbs?: BreadcrumbItem[]
}

export function AppHeader({ breadcrumbs = [] }: AppHeaderProps) {
    const { url } = usePage()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <>
            <div className="sticky top-0 z-50 shadow-md bg-white backdrop-blur-sm border-b border-gray-200">
                <div className="mx-auto flex h-20 items-center justify-between px-10 lg:px-6 md:max-w-7xl">
                    {/* Logo */}
                    <Link href='/' className="flex items-center mr-12">
                        <div className="scale-125">
                            <AppLogo />
                        </div>
                    </Link>

                    <div className="hidden lg:flex">
                        <nav className="flex items-center space-x-12">
                            {mainNavItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center space-x-2 text-xl font-semibold tracking-wide transition-all duration-300 ease-in-out hover:scale-105",
                                        url === item.href
                                            ? "text-white drop-shadow-md"
                                            : "text-black hover:text-orange-500 hover:drop-shadow-sm",
                                    )}
                                >
                                    {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-16 w-16"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="text-black h-16 w-16" /> : <Menu className="text-black h-16 w-16" />}
                        </Button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t bg-white backdrop-blur-sm">
                        <div className="px-6 py-3 space-y-2">
                            {mainNavItems.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center space-x-3 px-4 py-3 rounded-lg text-lg font-medium tracking-wide transition-all duration-300 ease-in-out",
                                        url === item.href
                                            ? "text-orange-900 bg-white/90 shadow-md font-semibold"
                                            : "text-black hover:text-orange-900 hover:bg-white/80 hover:shadow-sm",
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {breadcrumbs.length > 1 && (
                <div className="sticky top-20 z-40 flex w-full border-b border-orange-400 bg-orange-200/95 backdrop-blur-sm">
                    <div className="mx-auto flex h-12 w-full items-center justify-start px-6 text-white md:max-w-7xl font-semibold">
                        <Breadcrumbs breadcrumbs={breadcrumbs} />
                    </div>
                </div>
            )}
        </>
    )
}
