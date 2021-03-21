import React, { useState } from 'react';

import Button from "@material-ui/core/Button"
import DropMenu from "./DropMenu"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"

import { manifest_properties } from '../api/manifest'
import SuggestDialog from './SuggestDialog'

const CommandBar = ({ onSearchTerm, onCommandSelected }) => {

  const [searchTerm, setSearchTerm] = useState("");

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearchTerm(searchTerm);
    }
  }

  return (
      <Paper elevation={3} style={{ padding: '4px'}}>
        <Button variant="contained" color="primary" onClick={ () => onCommandSelected(manifest_properties.all) }>All</Button>
        <Button variant="contained" color="primary" onClick={ () => onCommandSelected(manifest_properties.desktopPwa) }>Desktop PWA</Button>
        <Button variant="contained" color="primary" onClick={ () => onCommandSelected(manifest_properties.installedSite) }>Installed Site</Button>
        <Button variant="contained" color="primary" onClick={ () => onCommandSelected(manifest_properties.windowsStore) }>Windows Store</Button>
        <DropMenu dropMenuCommandSelected={ onCommandSelected }/>
        <TextField
          alignItems="flex-end"
          label="Search..."
          value={ searchTerm }
          color="secondary"
          onChange={ (e) => setSearchTerm(e.target.value) }
          onKeyPress={onKeyPress}
          InputLabelProps={{
            shrink: true,
          }}
          >
        </TextField>
        <SuggestDialog />
      </Paper>
    // </div>
  )
}

export default CommandBar;
