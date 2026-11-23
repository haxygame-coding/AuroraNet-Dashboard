import * as React from "react";
import { memo } from "react";
import AuroraNetIcon from "@/assets/icons/AuroraNetIcon";

const MemoizedAuroraNetIcon = () => {
  return <AuroraNetIcon size={14} />;
};

export default memo(MemoizedAuroraNetIcon);
