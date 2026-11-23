import Image from "next/image";
import * as React from "react";
import { memo } from "react";
import AuroraNetLogo from "@/assets/auroranet.svg";

type Props = {
  size?: number;
  className?: string;
};
function AuroraNetIcon({ size = 16, className }: Props) {
  return (
    <Image
      src={AuroraNetLogo}
      alt={"AuroraNet Icon"}
      width={size}
      className={className}
    />
  );
}

export default memo(AuroraNetIcon);
