import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UseFormControl from './searchComponent';
import ContactsTable from './results/contactsTable';
import PieChart from './results/charts/shareChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#2c3341',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  textAlign: 'center',
  color: 'white',
  borderRadius: '12px'
}));

export default function BasicGrid() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} alignItems="stretch" justifyContent="space-between">
                <Grid item lg={4}>
                    <Item>
                        Placeholder
                    </Item>
                </Grid>
                <Grid item lg={8}>
                    <Item>
                        <UseFormControl />
                    </Item>
                </Grid>
                <Grid item lg={4}>
                <Item>placeholder</Item>
                </Grid>
                <Grid item lg={4}>
                <Item>placeholder</Item>
                </Grid>
                <Grid item lg={4}>
                <Item>
                    Placeholder
                </Item>
                </Grid>
                <Grid item lg={10}>
                <Item>
                    Results
                    <ContactsTable />
                </Item>
                </Grid>
                <Grid item lg={2}>
                <Item style={{height: "400px"}}>
                    <PieChart />
                </Item>
                </Grid>
            </Grid>
        </Box>  
    </div>
  );
}
