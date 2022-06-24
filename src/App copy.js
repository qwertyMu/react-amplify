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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f5f2f2',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const listTodos = `query listTodos {
  listTodos{
    items{
      id
      name
      description
      priority
    }
  }
}`;

const addTodo = `mutation createTodo($name:String! $description: String! $priority: String) {
  createTodo(input:{
    name:$name
    description:$description
    priority:$priority
  }){
    id
    name
    description
    priority
  }
}`;

const addContactsData = `mutation createContact($name:String! $phoneNumber:String! $emailAddress:String! $notes:String! $source:String! $exhibit:String! $history:ID!){
  createContact(input:{
    name: $name
    phoneNumber: $phoneNumber
    emailAddress: $emailAddress
    notes: $notes
    source: $source
    exhibit: $exhibit
    history: $history
  }){
    id
    name
    phoneNumber
    emailAddress
    notes
    source
    exhibit
    history
  }
}`;

const addHistoryData = `mutation createHistory($id:ID! $date:AWSDate! $customerId:String! $customerUser:String! $reasonForSearch:String! $exhibitDownloaded:Int!){
  createHistory(input:{
    id: $id
    date: $date
    customerId: $customerId
    customerUser: $customerUser
    reasonForSearch: $reasonForSearch
    exhibitDownloaded: $exhibitDownloaded
  }){
    id
    date
    customerId
    customerUser
    reasonForSearch
    exhibitDownloaded
  }
}`;

const updateTodo = `mutation updateTodo($id:ID! $name:String! $description: String! $priority: String) {
  updateTodo(input:{
    id:$id
    name:$name
    description:$description
    priority:$priority
  }){
    id
    name
    description
    priority
  }
}`;

const deleteTodo = `mutation deleteTodo($id:ID!) {
  deleteTodo(input:{
    id:$id
  }){
    id
  }
}`;

class App extends Component {

  uploadFile = (evt) => {
    const file = evt.target.files[0];
    const name = file.name;
    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    })
  }

  state = { username: "" };
  async componentDidMount() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      this.setState({ username: user.username });
    } catch (err) {
      console.log("error getting user: ", err);
    }
  }

  recordEvent = () => {
    Analytics.record({
      name: "My test event",
      attributes: {
        username: this.state.username
      }
    });
  };

  todoMutation = async () => {
    const todoDetails = {
      name: "Party tonight!",
      description: "Amplify CLI rocks!",
      priority: "High"
    };

    const newTodo = 
    await API.graphql({
      query: addTodo,
      variables: todoDetails,
      authMode: 'API_KEY'
    });
    console.log(JSON.stringify(newTodo));
  };

  contactMutation = async () => {
    const historyDetails = {
      id: "12345678",
      date: "2020-01-05",
      customerId: "MET Police",
      customerUser: "DC Scott Example",
      reasonForSearch: "Operation Illuminative",
      exhibitDownloaded: 1,
    };  
    
    const newHistoryRecord = 
    await API.graphql({
      query: addHistoryData,
      variables: historyDetails,
      authMode: "API_KEY"
    });
    console.log(JSON.stringify(newHistoryRecord));

    const contactDetails = {
        name: "David Smith",
        phoneNumber: "07123456789",
        emailAddress: "david.smith@gmail.com",
        notes: "David boat guy",
        source: "Staffordshire Police",
        exhibit: "ST/TMP/12",
        history: historyDetails,
      };

      //Validation error of type WrongType: argument 'input' with value 'ObjectValue{objectFields=[ObjectField{name='name', value=VariableReference{name='name'}}, ObjectField{name='phoneNumber', value=VariableReference{name='phoneNumber'}}, ObjectField{name='emailAddress', value=VariableReference{name='emailAddress'}}, ObjectField{name='notes', value=VariableReference{name='notes'}}, ObjectField{name='source', value=VariableReference{name='source'}}, ObjectField{name='exhibit', value=VariableReference{name='exhibit'}}, ObjectField{name='history', value=VariableReference{name='history'}}]}' contains a field not in 'CreateContactInput': 'history' @ 'createContact'
      //Validation error of type SubSelectionRequired: Sub selection required for type History of field history @ 'createContact/history'
      const newContactRecord = 
      await API.graphql({
        query: addContactsData,
        variables: contactDetails,
        authMode: "API_KEY"
      });
      console.log(JSON.stringify(newContactRecord));
  };

  updateMutation = async () => {
    const todoDetails = {
      id: 'fb607d60-820c-48ef-b09c-bad7e90aee04',
      name: "Updated name",
      description: "My updated description!",
      priority: "Medium"
    };

    const updatedTodo = 
    await API.graphql({ 
      query: updateTodo, 
      variables: todoDetails,
      authMode: 'API_KEY'
    });
    console.log(JSON.stringify(updatedTodo));
  };

  deleteMutation = async () => {
    const todoDetails = {
      id: 'f70d7c55-9a41-45e5-a546-8d101c299c58',
    };
    
    const deletedTodo = 
    await API.graphql({ 
      query: deleteTodo, 
      variables: todoDetails,
      authMode: 'API_KEY'
    });
    console.log(todoDetails + ' - Deleted')
  };


  listQuery = async () => {
    console.log("listing todos");
    const allTodos = 
    await API.graphql({
      query: listTodos,
      authMode: 'API_KEY'
    });
    console.log(JSON.stringify(allTodos));
  };
  
  render() {
    return (
      <div className="App">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <PrimarySearchAppBar />
        <Box margin={5} ml='2%' sx={{ flexGrow: 3 }}>
          <Grid container spacing={3}>
            
          <Grid item xs={12}>
              <Paper elevation={8}>
                <Item>
                  Intelligence Report
                  <p></p>
                  <IntelligenceReport />
                </Item>
                </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={8}>
                <Item>
                  <Button style={{ backgroundColor: '#19191a' }} variant="contained" component="label">
                    Upload a Report
                    <input type="file" hidden onChange={this.uploadFile}/>  
                  </Button>
                </Item>
                </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={8}>
                <Item>
                  <Button style={{ backgroundColor: '#19191a' }} variant='contained' onClick={this.listQuery}>GraphQL List Query</Button>
                  <Button style={{ backgroundColor: '#19191a' }} variant='contained' onClick={this.todoMutation}>GraphQL Todo Mutation</Button>
                  <Button style={{ backgroundColor: '#19191a' }} variant='contained' onClick={this.recordEvent}>Record Event</Button>
                  <Button style={{ backgroundColor: '#19191a' }} variant='contained' onClick={this.updateMutation}>Update</Button>
                  <Button style={{ backgroundColor: '#19191a' }} variant='contained' onClick={this.deleteMutation}>Delete</Button>
                </Item>
              </Paper>
              <Paper elevation={8}>
                <Item>
                  <Button style={{ backgroundColor: '#19191a' }} variant='contained' onClick={this.contactMutation}>Add New Contact Data</Button>
                </Item>
              </Paper>
            </Grid>
            
            <Grid item xs={12}>
              <Paper elevation={8}>
                <Item>
                  <h2>Contacts</h2>
                  <ContactsTable />
                </Item>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={8}>
                <Item>
                  <h2>Chat</h2>
                  <ChatTable />
                </Item>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={8}>
                <Item>
                  <h2>Calls</h2>
                  <CallsTable />
                </Item>
              </Paper>
            </Grid>
            
          </Grid>
        </Box>
        <AmplifySignOut />
      </div>
    );
  }
}

export default withAuthenticator(App, true);