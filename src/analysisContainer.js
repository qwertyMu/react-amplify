import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BasicGrid from './analysisGrids';
import ResponsiveAppBar from './navigationBar';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth style={{paddingTop: "8px"}}>
        <ResponsiveAppBar />
        <Box sx={{ height: '100vh' }}>
          <BasicGrid>

          </BasicGrid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
