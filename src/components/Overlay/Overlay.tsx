import React from "react";
import { Wrapper } from "./Overlay.styles";
import { OverlayProps } from "./Overlay.types";

const Overlay = ({ openSidebar }: OverlayProps) => (
  <Wrapper className={openSidebar ? "openSidebar" : ""} />
);

export default React.memo(Overlay);
