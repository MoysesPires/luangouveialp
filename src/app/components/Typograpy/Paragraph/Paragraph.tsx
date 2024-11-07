import React, { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { useTailwindMerge } from "@/hooks/useTailwindMerge";

const paragraph = tv({
  base: "flex items-center text-base-white",
  defaultVariants: {
    type: "p1",
  },
  variants: {
    type: {
      p1:
        "text-[20px] leading-[20px] subpixel-antialiased",
      p2: 
        "text-[18px] leading-[32px] subpixel-antialiased",
      p3: 
        "text-[16px] leading-[24px] subpixel-antialiased",
      p4: 
        "text-[14px] leading-[20px] subpixel-antialiased",
    }
  }, 
});

type ParagraphVariants = VariantProps<typeof paragraph>;

interface ParagraphComponentProps
extends React.HTMLAttributes<HTMLParagraphElement> {
  type: ParagraphVariants["type"];
  children: ReactNode;
}

function ParagraphComponent({ 
  type,
  children,
   ...props 
}: ParagraphComponentProps) {
  const className = useTailwindMerge({
    baseStyles: paragraph({
      type: type,
    }),
    className: props.className,
  });

  return (
    <p
      {...props}
      className={className}>
      {children}
    </p>
  );
}

export const Paragraph = ParagraphComponent;
