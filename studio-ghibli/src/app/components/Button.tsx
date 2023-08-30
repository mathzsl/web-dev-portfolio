import { tv, type VariantProps } from "tailwind-variants";
import { ComponentProps } from "react";

const link = tv({
  base: "text-zinc-100 font-medium skew-skew-app border-2 border-green-app-500 py-2 px-6 skew-x-skew-app shadow-sm transition-colors duration-700",

  variants: {
    variant: {
      primary: "bg-green-app-500 hover:border-gray-100",
      secondary: "bg-transparent hover:bg-green-app-500",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = ComponentProps<"a"> & VariantProps<typeof link>;

export function Button({ variant, ...props }: ButtonProps) {
  return <a {...props} className={link({ variant })} />;
}
