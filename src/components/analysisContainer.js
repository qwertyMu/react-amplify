import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import BasicGrid from './analysisGrids';
import ResponsiveAppBar from './navigationBar';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth style={{paddingTop: "8px"}}>
        <ResponsiveAppBar />
        <BasicGrid />
      </Container>
    </React.Fragment>
  );
}
