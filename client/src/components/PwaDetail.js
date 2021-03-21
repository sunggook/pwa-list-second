import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: 100%,
  // },
  media: {
    height: '450px',
    width: '100%',
    // paddingTop: '56.25%', // 16:9
  },
}));

const azure_sas_key = '?sv=2019-12-12&ss=bfqt&srt=sco&sp=rlx&se=2021-12-02T07:02:32Z&st=2020-12-22T23:02:32Z&spr=https&sig=bbTNh%2F1FBsF3x6f%2BdcsetmsGBHsluXfkw0elef8%2F0JA%3D';
const PwaDetail = ({ selectedPwa } ) => {
  const classes = useStyles();

  if (!selectedPwa) return <div>Loading...</div>

  let startPageImage = '';
  if (selectedPwa.StartPage['_']) {
    startPageImage = selectedPwa.StartPage['_'];
    startPageImage += azure_sas_key;
  }

  console.log("startpage: " + startPageImage);
  const OnImageClick = () => {
    window.open(selectedPwa.Url['_']);
  }

  return (
      <Card>
        <div onClick={ OnImageClick }>
          <CardMedia
            className={ classes.media }
            image={ startPageImage ?
                    startPageImage :
                    selectedPwa.Logo['_']
                  }
            title={ selectedPwa.Title['_'] }
          />
          <CardContent>
            <Typography variant="subtitle1" color='inherit' component="p">
              { selectedPwa.Title['_'] }
            </Typography>
          </CardContent>
        </div>
      </Card>
      /* <Typography variant="subtitle1" color="inherit">
        <b>{ selectedPwa.Title['_'] }</b>
      </Typography> */
  )
}

export default PwaDetail;
