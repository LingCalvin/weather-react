import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  MenuItem,
} from "@material-ui/core";

interface MenuProps {
  open?: boolean;
  anchorEl?: MuiMenuProps["anchorEl"];
  anchorOrigin?: MuiMenuProps["anchorOrigin"];
  onClose?: MuiMenuProps["onClose"];
  onRefreshClicked?: () => void;
}

export default function Menu({
  open = false,
  anchorEl,
  anchorOrigin,
  onClose,
  onRefreshClicked,
}: MenuProps) {
  return (
    <MuiMenu
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      onClose={onClose}
    >
      <MenuItem onClick={onRefreshClicked}>Refresh</MenuItem>
    </MuiMenu>
  );
}
