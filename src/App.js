import React, { Component } from "react";
import "./App.css";
import PrimarySearchAppBar from "./appBar";
import ChatTable from "./chatTable";
import CallsTable from "./callsTable";
import ContactsTable from "./results/contactsTable";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react-v1";
import { API, graphqlOperation, Analytics, Auth, Storage } from "aws-amplify";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IntelligenceReport from "./intelligenceReport";
import SimpleContainer from "./analysisContainer";

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
      <div className="App">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <SimpleContainer>


        </SimpleContainer>
      </div>
    );
  }
}

export default App;