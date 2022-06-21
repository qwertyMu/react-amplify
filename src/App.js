import React, { Component } from "react";
import "./App.css";
import PrimarySearchAppBar from "./appBar";
import ChatTable from "./chatTable";
import CallsTable from "./callsTable";
import ContactsTable from "./contactsTable";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react-v1";
import { API, graphqlOperation, Analytics, Auth, Storage } from "aws-amplify";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
                  <Button variant="contained" component="label">
                    Upload a Report
                    <input type="file" hidden onChange={this.uploadFile}/>  
                  </Button>
                </Item>
                </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper elevation={8}>
                <Item>
                  <p> Click a button </p>
                  <Button variant='contained' onClick={this.listQuery}>GraphQL List Query</Button>
                  <Button variant='contained' onClick={this.todoMutation}>GraphQL Todo Mutation</Button>
                  <Button variant='contained' onClick={this.recordEvent}>Record Event</Button>
                  <Button variant='contained' onClick={this.updateMutation}>Update</Button>
                  <Button variant='contained' onClick={this.deleteMutation}>Delete</Button>
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