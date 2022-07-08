import React, { Component } from "react";
import "./App.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SimpleContainer from "./components/analysisContainer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f2f2',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




class App extends Component {

  
  render() {
    return (
      <div className="App" style={{height: '100vh'}}>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <SimpleContainer />
      </div>
    );
  }
}

export default App;