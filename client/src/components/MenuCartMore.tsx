import DeleteIcon from "@mui/icons-material/Delete";
import LinkIcon from '@mui/icons-material/Link';
import { MoreVert } from "@mui/icons-material";
import { FC, useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useRemoveLinkMutation } from "../store/api/linkApi";

interface MenuCartMoreProps {
  id: number,
  link_short: string
}

const MenuCartMore: FC<MenuCartMoreProps> = ({ id, link_short }: MenuCartMoreProps) => {

  const [deleteLink] = useRemoveLinkMutation()


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const redirectToLink = () => {
    window.open(`${process.env.REACT_APP_API_URL}redirect/${link_short}`, "_blank");
    setAnchorEl(null);
  };

  const Delete = () => {
    deleteLink(id)
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={redirectToLink}>
          <IconButton>
            <LinkIcon sx={{ mr: 1 }} />
          </IconButton>
          Redirect
        </MenuItem>

        <MenuItem onClick={Delete}>
          <IconButton>
            <DeleteIcon sx={{ mr: 1 }} />
          </IconButton>
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}

export default MenuCartMore