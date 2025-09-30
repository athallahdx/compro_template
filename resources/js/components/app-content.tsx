import type * as React from "react"

interface AppContentProps extends React.ComponentProps<"main"> {
    variant?: "header" | "sidebar"
}

export function AppContent({ children, ...props }: AppContentProps) {
    return (
        <main className="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl p-4" {...props}>
            {children}
        </main>
    )
}
