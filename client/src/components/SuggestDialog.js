import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import network from '../api/network'

const SuggestDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [webAppKind, setWebAppKind] = React.useState('Desktop PWA');
  const [url, setUrl] = React.useState('https://');

  const handleWebAppKindChange = (event) => {
    setWebAppKind(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
    console.log('selected:' + event.currentTarget.innerText);
    if (event.currentTarget.innerText === "OK") {
      const suggested_url = "suggested_url=" + url + "&webapp_kind=" + webAppKind;
      const azure_url = '/api/suggest?' + suggested_url;
      network.post(azure_url);
    }
  };

  const handleSuggestedUrlChange = (event) => {
    console.log(event.currentTarget.value);
    setUrl(event.currentTarget.value)
  }

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={ handleClickOpen } style={{float: "right" }}>Site Suggestion?</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Suggest</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a site below
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="site"
            type="url"
            fullWidth
            color="secondary"
            defaultValue="https://"
            onChange={ handleSuggestedUrlChange }
          />
        </DialogContent>
        <FormControl component="fieldset">
          <FormLabel component="legend">Kind</FormLabel>
          <RadioGroup aria-label="kinds" name="kinds" value={webAppKind} onChange={ handleWebAppKindChange }>
            <FormControlLabel value="Desktop PWA" control={<Radio />} label="Desktop PWA" />
            <FormControlLabel value="Installed Site" control={<Radio />} label="Installed Site" />
            <FormControlLabel value="Windows Store" control={<Radio />} label="Windows Store" />
          </RadioGroup>
        </FormControl>
        <DialogActions>
          <Button onClick={ handleClose } color="primary">
            OK
          </Button>
          <Button onClick={ handleClose } color="primary">
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )

}

export default SuggestDialog;
