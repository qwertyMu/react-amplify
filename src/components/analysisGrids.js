import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UseFormControl from './glitchSearchComponent';
import Crud from './userGeneratedContact/CrudContactDraft'
import { QueryClient, QueryClientProvider } from "react-query";
import GlitchSearchComponent from './glitchSearchComponent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#2c3341',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  textAlign: 'center',
  color: 'white',
  borderRadius: '12px'
}));

const client = new QueryClient();

export default function BasicGrid() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems="stretch" justifyContent="space-between">
                <Grid item ls={12} md={12} sm={12} xs={12}>
                    <Item id='crudContainer'>
                        <Crud />
                    </Item>
                </Grid>
                <Grid item ls={12} md={12} lg={12}>
                    <Item>
                        <QueryClientProvider client={client}>
                            {/* <UseFormControl /> */}
                            <GlitchSearchComponent />
                        </QueryClientProvider>
                    </Item>
                </Grid>
            </Grid>
        </Box>  
    </div>
  );
}
