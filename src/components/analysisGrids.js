import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UseFormControl from './searchComponent';
import Crud from './userGeneratedContact/CrudContactDraft'
import { QueryClient, QueryClientProvider } from "react-query";
import GlitchSearchComponent from './glitchSearchComponent';
import GlitchSearchComponentDraft from './glitchSearchComponentDraft';
import { Button } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';
import Grow from '@mui/material/Grow';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#2c3341',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  textAlign: 'center',
  color: 'white',
  borderRadius: '12px'
}));

function toggleContactDiv() {
    toggle(document.querySelectorAll('.target'));
};

function toggle (elements, specifiedDisplay) {
  var element, index;

  elements = elements.length ? elements : [elements];
  for (index = 0; index < elements.length; index++) {
    element = elements[index];

    if (isElementHidden(element)) {
      element.style.display = '';

      // If the element is still hidden after removing the inline display
      if (isElementHidden(element)) {
        element.style.display = specifiedDisplay || 'block';
      }
    } else {
      element.style.display = 'none';
    }
  }
  function isElementHidden (element) {
    return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
  }
}

const client = new QueryClient();

export default function BasicGrid() {

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems="stretch" justifyContent="space-between">
                <Grid item ls={12} md={12} sm={12} xs={12}> 
                    <br />
                    <Button id="toggle-button" variant='outlined' sx={{float: 'right', backgroundColor: '#f05c54', color: 'white', border: 'none'}} onClick={toggleContactDiv}>Add known contact info</Button>
                    <Item class='target' id='crudContainer'>
                        <Crud />
                    </Item>
                </Grid>
                <Grid item ls={12} md={12} lg={12}>
                    <Item>
                        <QueryClientProvider client={client}>
                            <UseFormControl />
                            {/* <GlitchSearchComponent /> */}
                            {/* <GlitchSearchComponentDraft /> */}
                        </QueryClientProvider>
                    </Item>
                </Grid>
            </Grid>
        </Box>  
    </div>
  );
}
