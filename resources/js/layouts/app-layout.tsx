import { AppHeader } from "@/components/app-header"
import { AppContent } from "@/components/app-content"
import { AppFooter } from "@/components/app-footer"
import type { BreadcrumbItem, Contact, Motto } from "@/types"
import type { ReactNode } from "react"

interface AppLayoutProps {
    children: ReactNode
    breadcrumbs?: BreadcrumbItem[]
    contact?: Contact | null
    motto?: Motto | null
}

export default function AppLayout({ children, breadcrumbs, contact, motto }: AppLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <AppHeader breadcrumbs={breadcrumbs} />
            <AppContent>{children}</AppContent>
            <AppFooter contact={contact} motto={motto} />
        </div>
    )
}
