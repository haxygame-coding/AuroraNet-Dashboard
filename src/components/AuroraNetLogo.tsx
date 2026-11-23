import { cn } from "@utils/helpers";
import Image from "next/image";
import * as React from "react";
import AuroraNetLogoMark from "@/assets/auroranet.svg";
import AuroraNetLogoFull from "@/assets/auroranet-full.svg";
import AuroraNetLogoFullLight from "@/assets/auroranet-full-light.svg";

type Props = {
  size?: "default" | "large";
  mobile?: boolean;
};

const sizes = {
  default: {
    desktop: 22,
    mobile: 30,
  },
  large: {
    desktop: 24,
    mobile: 40,
  },
};

export const AuroraNetLogo = ({ size = "default", mobile = true }: Props) => {
  return (
    <>
      {/* Full wordmark — hidden on mobile screens when `mobile` is set.
          Inner images toggle by theme: dark-text variant in light mode,
          light-text variant in dark mode. */}
      <span className={cn("relative", mobile && "hidden md:block")}>
        <Image
          src={AuroraNetLogoFullLight}
          height={sizes[size].desktop}
          alt={"AuroraNet Logo"}
          className={"block dark:hidden"}
        />
        <Image
          src={AuroraNetLogoFull}
          height={sizes[size].desktop}
          alt={"AuroraNet Logo"}
          className={"hidden dark:block"}
        />
      </span>
      {mobile && (
        <Image
          src={AuroraNetLogoMark}
          width={sizes[size].mobile}
          alt={"AuroraNet Logo"}
          className={cn("md:hidden ml-4")}
        />
      )}
    </>
  );
};
