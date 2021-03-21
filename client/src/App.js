import React, { useState, useEffect } from 'react';
import './App.css';

import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/core/styles'

import network from './api/network'
import { manifest_properties } from './api/manifest'
import { theme } from './theme/theme'
import CommandBar from './components/CommandBar'
import HowToInstall from './components/HowToInstall'
import Pwas from './components/Pwas'
import Title from './components/Title'
import axios from 'axios';

const App = () => {

  const [pwas, setPwas] = useState([]);
  const [selectedPwa, setSelectedPwa] = useState(null);
  const [selectedCommand, SetSelectedCommand] = useState(manifest_properties.all);

  const getList = async (command) => {
    // Do not set table name, instead pass only partician key.
    // Table name should be server specific knowledge.
    // const table_name = "table=webAppList&";

    const particianKey = "particianKey=" + command;

    const azure_url = '/api/list?' + particianKey;
    // const list = await network.get(azure_url);

    const list = await axios({
      url: azure_url,
      baseURL: window.location.origin
    })
    return list;
  }

  const FetchPwasByCommand = (manifestProperty) => {
    getList(manifestProperty.command).then((result) => {
      let pwas = null;
      if (manifestProperty.property) {
        pwas = result.data.entries.filter(pwa => pwa.Properties['_'].indexOf(manifestProperty.property) !== -1)
      } else {
        pwas = result.data.entries;
      }
      if (!pwas)
        return;

      setPwas(pwas);
      if (pwas.length !== 0)
        setSelectedPwa(pwas[0]);

    });
  }

  useEffect(()=>{
      // do stuff here...
    if (selectedCommand.command === 'all') {
      FetchPwasByCommand(manifest_properties.all);
    }
  }, [])

  const handleCommandChange = (manifestProperty) => {
    if (manifestProperty.command !== selectedCommand.command ||
      manifestProperty.property !== selectedCommand.property) {
      FetchPwasByCommand(manifestProperty);
      SetSelectedCommand(manifestProperty);
    }
  }

  const onSearchTerm = (term) => {
    const term_lowerCase = term.toLowerCase();
    const searched_pwas = pwas.filter(pwa =>
      pwa.Title['_'].toLowerCase().indexOf(term_lowerCase) !== -1);

    setPwas(searched_pwas);
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid style={{ justifyContent:"center" }} container spacing={1}>
        <Grid item xs={12}>
          {/* TITLE */}
          <Title/>
        </Grid>
        <Grid item xs={12}>
          {/* SEARCH BAR */}
          <CommandBar onSearchTerm={ onSearchTerm } onCommandSelected={ handleCommandChange }/>
        </Grid>
        <Grid item xs={12}>
          <Pwas pwas={ pwas } selectedPwa = { selectedPwa } onPwaSelect = { setSelectedPwa } />
        </Grid>
        <Grid item xs={12}>
          {/* EXPLANATIONS*/}
          <HowToInstall description = {selectedCommand.description} video= {selectedCommand.video} />
        </Grid>
      </Grid>
    </ThemeProvider>

  );
}

export default App;
