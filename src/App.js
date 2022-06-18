import React, { Component } from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react-v1";
import { API, graphqlOperation, Analytics, Auth, Storage } from "aws-amplify";


const listTodos = `query listTodos {
  listTodos{
    items{
      id
      name
      description
    }
  }
}`;

const addTodo = `mutation createTodo($name:String! $description: String!) {
  createTodo(input:{
    name:$name
    description:$description
  }){
    id
    name
    description
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
      description: "Amplify CLI rocks!"
    };

    const newTodo = 
    await API.graphql({
      query: addTodo,
      variables: todoDetails,
      authMode: 'API_KEY'
    });
    alert(JSON.stringify(newTodo));
  };

  listQuery = async () => {
    console.log("listing todos");
    const allTodos = 
    await API.graphql({
      query: listTodos,
      authMode: 'API_KEY'
    });
    alert(JSON.stringify(allTodos));
  };

  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <p> Click a button </p>
        <button onClick={this.listQuery}>GraphQL List Query</button>
        <button onClick={this.todoMutation}>GraphQL Todo Mutation</button>
        <button onClick={this.recordEvent}>Record Event</button>
        <p> Pick a file</p>
        <input type="file" onChange={this.uploadFile} />  
      </div>
    );
  }
}

export default withAuthenticator(App, true);