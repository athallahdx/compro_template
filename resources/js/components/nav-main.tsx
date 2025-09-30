import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import type { NavItem } from "@/types"
import { Link, usePage } from "@inertiajs/react"

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage()
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                            asChild
                            isActive={page.url.startsWith(typeof item.href === "string" ? item.href : item.href.url)}
                            tooltip={{ children: item.title }}
                            className="font-medium text-lg tracking-wide transition-all duration-200 hover:font-semibold"
                        >
                            <Link href={item.href} prefetch className="flex items-center gap-3">
                                {item.icon && <item.icon className="h-4 w-4" />}
                                <span className="font-medium">{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
