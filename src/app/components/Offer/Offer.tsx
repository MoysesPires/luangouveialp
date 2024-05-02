import { tv, type VariantProps } from "tailwind-variants";

import React, { ReactNode } from "react";
import { useTailwindMerge } from "@/hooks/useTailwindMerge";
import { Paragraph } from "../Typograpy/Paragraph";

const offer = tv({
  base: "w-[86px] h-[26px] p-[7px] rounded-[3px] justify-center items-center gap-2.5 inline-flex cursor-pointer transition-all disabled:cursor-default",
  defaultVariants: {
    color: "primary"
  },
  variants: {
    color: {
      primary:
        "bg-emerald-400 text-white",
      secondary:
        "bg-amber-200 text-white",
    },
  },
});

type OfferVariants = VariantProps<typeof offer>;

interface OfferComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant: OfferVariants["color"];
  children: ReactNode;
}

export default function OfferComponent({
  children,
  variant,
  ...props
}: OfferComponentProps) {
  const className = useTailwindMerge({
    baseStyles: offer({
      color: variant,
    }),
    className: props.className,
  });

  return (
    <div
      className={className}
    >
      <Paragraph className="text-[12px]" type="p4">{children}</Paragraph>
    </div>
  );
}

