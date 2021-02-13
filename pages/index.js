import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 0,
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(45deg, #F2EDE0 30%, #F2EDE0 90%)',
    maxWidth: 'initial'
  },
});



export default function Index() {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Box py={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          DogeCode
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Copyright />
      </Box>
    </Container>
  );
}
