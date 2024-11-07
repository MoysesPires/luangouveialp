import { tv, type VariantProps } from "tailwind-variants";

import React from "react";
import { useTailwindMerge } from "@/hooks/useTailwindMerge";
import { Paragraph } from "../../Typograpy/Paragraph";

const button = tv({
  base: "flex items-center px-6 py-3 rounded-1 cursor-pointer transition-all disabled:cursor-default disabled:hover:!shadow-none",
  defaultVariants: {
    color: "primary",
  },
  variants: {
    color: {
      primary:
        "bg-[#3957A5] text-base-white hover:shadow-primaryButton",
    },
    full: {
      true: "w-full",
    },
    align: {
      left: "justify-left",
      center: "justify-center",
      right: "justify-right",
    },
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants["color"];
  full?: ButtonVariants["full"];
  align?: ButtonVariants["align"];
}

export default function ButtonComponent({
  variant,
  full,
  align = "center",
  ...props
}: ButtonComponentProps) {
  const className = useTailwindMerge({
    baseStyles: button({
      color: variant,
      full,
      align,
    }),
    className: props.className,
  });

  return (
    <button
      name="button"
      aria-label="Button component"
      id="Button"
      {...props}
      className={className}
    >
      <div className="flex flex-row gap-1">
        <Paragraph type="p4">{props.children}</Paragraph>
      </div>
    </button>
  );
}