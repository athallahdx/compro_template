export default function AppLogo() {
    return (
        <div className="flex items-center space-x-2">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center">
                <img
                    src="/logo.svg"
                    alt="Company Logo"
                    className="h-full w-full object-contain"
                />
            </div>
            <span className="font-semibold text-black text-lg font-jersey"></span>
        </div>
    )
}
