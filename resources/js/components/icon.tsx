import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface IconProps {
    iconNode: LucideIcon
    className?: string
}

export function Icon({ iconNode: IconComponent, className }: IconProps) {
    return <IconComponent className={cn("h-4 w-4", className)} />
}
