interface AppLogoIconProps {
    className?: string
}

export default function AppLogoIcon({ className }: AppLogoIconProps) {
    return (
        <div className={`h-6 w-6 rounded bg-primary flex items-center justify-center ${className}`}>
            <span className="text-primary-foreground font-bold text-xs">C</span>
        </div>
    )
}
