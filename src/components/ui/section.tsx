import { cn } from "@/lib/utils";
import React from "react";

const Section = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
    ({ className, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-12 md:py-16 lg:py-24", className)}
                {...props}
            />
        );
    }
);

Section.displayName = "Section";

export { Section };
