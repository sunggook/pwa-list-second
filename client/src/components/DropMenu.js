import React from 'react';

import Button from "@material-ui/core/Button"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { manifest_properties } from '../api/manifest'

const DropMenu = ({ dropMenuCommandSelected }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [title, setTitle] = React.useState("Any (default)");

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setTitle(e.currentTarget.innerText);
  };

  const handleClose = (e) => {
    switch (e.currentTarget.innerText) {
      case 'Any (default)':
        dropMenuCommandSelected(manifest_properties.all);
        break;
      case 'File Handlers':
        dropMenuCommandSelected(manifest_properties.fileHandlers);
        break;
      case 'Protocol Handlers':
        dropMenuCommandSelected(manifest_properties.protocolHandlers);
        break;
      case 'Related Applications':
          dropMenuCommandSelected(manifest_properties.relatedApplications);
          break;
      case 'ShareTarget':
        dropMenuCommandSelected(manifest_properties.sharetarget);
        break;
      case 'ShortcutMenu':
        dropMenuCommandSelected(manifest_properties.shortcutMenu);
        break;
      case 'Window Overlay':
        dropMenuCommandSelected(manifest_properties.windowOverly);
        break;
      default:
        break;
    }

    setTitle(e.currentTarget.innerText)
    setAnchorEl(null);
  };

  const style_menu_item = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white"
  }

  return (
    <React.Fragment>
      <Button onClick={ handleClick }
        variant="contained"
        color="primary"
        aria-controls="simple-menu"
        aria-haspopup="true">{ title } </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} style={style_menu_item}>{manifest_properties.default.name}</MenuItem>
        <MenuItem onClick={handleClose} style={style_menu_item}>{manifest_properties.fileHandlers.name}</MenuItem>
        <MenuItem onClick={handleClose} style={style_menu_item}>{manifest_properties.protocolHandlers.name}</MenuItem>
        <MenuItem onClick={handleClose} style={style_menu_item}>{manifest_properties.sharetarget.name}</MenuItem>
        <MenuItem onClick={handleClose} style={style_menu_item}>{manifest_properties.relatedApplications.name}</MenuItem>
        <MenuItem onClick={handleClose} style={style_menu_item}>{manifest_properties.windowOverly.name}</MenuItem>
      </Menu>
    </React.Fragment>
  )
}

export default DropMenu;
