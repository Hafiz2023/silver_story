"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BackgroundVideoProps {
    videoId: string;
    className?: string;
}

export function BackgroundVideo({ videoId, className }: BackgroundVideoProps) {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className={cn("absolute inset-0 z-0 select-none pointer-events-none overflow-hidden", className)}>
            <div
                className={cn(
                    "absolute inset-0 bg-black transition-opacity duration-1000 z-10",
                    isVideoLoaded ? 'opacity-0' : 'opacity-100'
                )}
            />

            <div className="absolute inset-0 w-full h-full">
                {isMounted && (
                    <iframe
                        className="w-full h-full scale-[1.35] object-cover pointer-events-none"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                        title="Background Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        onLoad={() => setIsVideoLoaded(true)}
                        style={{ width: '300%', height: '300%', transform: 'translate(-33.33%, -33.33%)' }}
                    />
                )}
            </div>

            <div className="absolute inset-0 bg-black/40 z-20" />
        </div>
    );
}
