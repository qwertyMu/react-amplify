import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UseFormControl from './searchComponent';
import PieChart from '../results/charts/shareChart';
import ValueGetterGrid from '../results/tableData/xContactsTable';
import ForceGraph3D from '../react-force-graph/src/packages/react-force-graph-3d';
import Crud from './userGeneratedContact/CrudContactDraft'
import { Button } from '@mui/material';
import IntelligenceReport from './intelligenceReport';

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
                <Grid item ls={12} md={12} sm={12} xs={12}>
                    <Item>
                        <Crud />
                    </Item>
                </Grid>
                <Grid item ls={12} md={12} lg={12}>
                    <Item>
                        <UseFormControl />
                    </Item>
                </Grid>
                {/* <Grid item lg={4}>
                    <Item>placeholder</Item>
                </Grid>
                <Grid item lg={4}>
                    <Item>placeholder</Item>
                </Grid>
                <Grid item lg={4}>
                    <Item>
                        Placeholder
                    </Item>
                </Grid> */}
                {/* <Grid item lg={12}>
                    <Item>
                        ForceGraph
                        <ForceGraph3D graphData={"myData"} />
                    </Item>
                </Grid> */}
                {/* <Grid item ls={10} md={10} sm={8} xs={8}>
                    <Item>
                        Results
                        <ValueGetterGrid />
                    </Item>
                </Grid>
                <Grid item lg={2}>
                    <Item style={{height: "400px"}}>
                        <PieChart />
                    </Item>
                </Grid>
                <Grid item lg={12}>
                    <Item>
                        <IntelligenceReport />
                    </Item>
                </Grid> */}
            </Grid>
        </Box>  
    </div>
  );
}
