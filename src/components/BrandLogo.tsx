export function BrandLogo({ className = "h-20 w-20" }: { className?: string }) {
    return (
        <div className={`relative flex items-center justify-center ${className} group`}>
            {/* Outer Decorative Glow/Shadow */}
            <div className="absolute inset-0 bg-accent-pink/10 rounded-full blur-xl group-hover:bg-accent-pink/20 transition-all duration-700"></div>

            {/* Main Circle - Soft Background */}
            <div className="absolute inset-2 bg-white rounded-full border border-soft-pink/50 shadow-inner flex items-center justify-center overflow-hidden">
                {/* Subtle Botanical Pattern Background */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-[0.03] text-deep-brown pointer-events-none">
                    <path d="M 20,80 Q 50,20 80,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M 30,70 Q 50,30 70,70" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>

                {/* The Central 'S' Botanical Emblem */}
                <div className="relative flex items-center justify-center w-[65%] h-[65%]">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-accent-pink drop-shadow-sm">
                        {/* Botanical line 1 */}
                        <path
                            d="M 50,10 C 20,10 20,45 50,45 C 80,45 80,90 50,90 C 20,90 20,70 20,70"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeLinecap="round"
                            className="transition-all duration-500 group-hover:stroke-[10]"
                        />
                        {/* Decorative leaf 1 */}
                        <circle cx="50" cy="10" r="4" className="fill-accent-pink" />
                        {/* Decorative leaf 2 */}
                        <circle cx="20" cy="70" r="4" className="fill-accent-pink" />

                        {/* Middle curve leaf detail */}
                        <path d="M 45,45 L 35,35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                        <path d="M 55,45 L 65,55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                    </svg>
                </div>
            </div>

            {/* Concentric Accent Ring */}
            <div className="absolute inset-0 border-2 border-accent-pink/20 rounded-full group-hover:scale-110 transition-transform duration-1000"></div>
            <div className="absolute inset-4 border border-deep-brown/5 rounded-full"></div>

            {/* Rotating Branding Label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                    <path
                        id="logoCurve"
                        d="M 12, 50 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        fill="transparent"
                    />
                    <text className="text-[5px] font-black uppercase tracking-[0.3em] fill-deep-brown/40">
                        <textPath xlinkHref="#logoCurve" startOffset="0%">
                            • SMAL MERIDA • BOUTIQUE • ESTETICA DEPORTIVA •
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
}
