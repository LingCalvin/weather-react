import { Menu, MenuProps } from "@material-ui/core";
import { ReactNode } from "react";

interface UnitMenuProps {
  open?: boolean;
  anchorEl?: MenuProps["anchorEl"];
  anchorOrigin?: MenuProps["anchorOrigin"];
  children?: ReactNode;
  onClose?: MenuProps["onClose"];
}

export default function UnitMenu({
  open = false,
  anchorEl,
  anchorOrigin,
  children,
  onClose,
}: UnitMenuProps) {
  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      onClose={onClose}
    >
      {children}
    </Menu>
  );
}
