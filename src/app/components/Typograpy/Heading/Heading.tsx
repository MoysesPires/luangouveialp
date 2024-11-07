import React, { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { useTailwindMerge } from "@/hooks/useTailwindMerge";

const heading = tv({
  base: "flex items-center text-base-white",
  defaultVariants: {
    type: "h1",
  },
  variants: {
    type: {
      h1:
        "text-[56px] leading-[24px] subpixel-antialiased",
      h2: 
        "text-[32px] leading-[32px] subpixel-antialiased",
      h3: 
        "text-[28px] leading-[24px] subpixel-antialiased",
      h4: 
        "text-[24px] leading-[20px] subpixel-antialiased",
    }
  }, 
});

type HeadingVariants = VariantProps<typeof heading>;

interface HeadingComponentProps
extends React.HTMLAttributes<HTMLElement> {
  type: HeadingVariants["type"];
  children: ReactNode;
}

function HeadingComponent({ 
  type,
  children,
   ...props 
}: HeadingComponentProps) {
  const className = useTailwindMerge({
    baseStyles: heading({
      type: type,
    }),
    className: props.className,
  });

  return (
    <span
      {...props}
      className={className}>
      {children}
    </span>
  );
}

export const Heading = HeadingComponent;
