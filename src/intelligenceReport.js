import React, { Component, useState } from "react";
import "./App.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { API } from "aws-amplify";

export function getCurrentDate(separator='-'){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

const initialFormState = { 
  name: "", 
  phoneNumber: "", 
  emailAddress: "", 
  notes: "", 
  source: "", 
  exhibit: "", 
  date: getCurrentDate(), 
  customerId: " ",
  customerUser: " ",
  reasonForSearch: " ",
  exhibitDownloaded: 0,
 }

 //Validation error of type WrongType: argument 'input' with value 'ObjectValue{objectFields=[ObjectField{name='name', value=VariableReference{name='name'}}, ObjectField{name='phoneNumber', value=VariableReference{name='phoneNumber'}}, ObjectField{name='emailAddress', value=VariableReference{name='emailAddress'}}, ObjectField{name='notes', value=VariableReference{name='notes'}}, ObjectField{name='source', value=VariableReference{name='source'}}, ObjectField{name='exhibit', value=VariableReference{name='exhibit'}}, ObjectField{name='history', value=VariableReference{name='historyId'}}]}' contains a field not in 'CreateContactInput': 'history' @ 'createContact'

function Form(){
  const [historyId, setHistoryId] = useState("")
  const [formData, setFormData] = useState(initialFormState)
  
  const addContactsData = `mutation createContact($name:String! $phoneNumber:String! $emailAddress:String! $notes:String! $source:String! $exhibit:String!){
    createContact(input:{
      name: $name
      phoneNumber: $phoneNumber
      emailAddress: $emailAddress
      notes: $notes
      source: $source
      exhibit: $exhibit
    }){
      id
      name
      phoneNumber
      emailAddress
      notes
      source
      exhibit
    }
  }`;

  const addHistoryData = `mutation createHistory($date:AWSDate! $customerId:String! $customerUser:String! $reasonForSearch:String! $exhibitDownloaded:Int!){
    createHistory(input:{
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

  const historyDetails = {
    date: formData.date,
    customerId: formData.customerId,
    customerUser: formData.customerUser,
    reasonForSearch: formData.reasonForSearch,
    exhibitDownloaded: formData.exhibitDownloaded,
    // date: "2020-01-05",
    // customerId: "West Mids",
    // customerUser: "PC Ben",
    // reasonForSearch: "A good reason",
    // exhibitDownloaded: 1,
  };  

  async function createHistory(){
    const newHistoryRecord = 
      await API.graphql({
        query: addHistoryData,
        variables: historyDetails,
        authMode: "API_KEY"
      });
    setHistoryId(newHistoryRecord.data.id)
    console.log(JSON.stringify(historyId));
  };

  const contactDetails = {
    name: formData.name,
    phoneNumber: formData.phoneNumber,
    emailAddress: formData.emailAddress,
    notes: formData.notes,
    source: formData.source,
    exhibit: formData.exhibit,
    // history: historyId.id,
  };

  async function createContact(){
    console.log(formData)
    createHistory();
    const newContactRecord = 
    await API.graphql({
      query: addContactsData,
      variables: contactDetails,
      authMode: "API_KEY"
    });
    console.log(JSON.stringify(newContactRecord));
  };

  return(
    <div className="newContactForm">
        Add New Contact
        <Box component="form" >
          <FormControl>
            <TextField 
              id="nameField" 
              label="Name" 
              size='small'
              variant="outlined" 
              onChange={e => setFormData({ ...formData, 'name': e.target.value })}
            />
            <TextField 
              id="phoneNumberField" 
              label="Phone Number"
              size='small' 
              variant="outlined" 
              onChange={e => setFormData({ ...formData, 'phoneNumber': e.target.value})} 
            />
            <TextField 
              id="emailAddressField" 
              label="Email Address" 
              size='small'
              variant="outlined" 
              onChange={e => setFormData({ ...formData, 'emailAddress': e.target.value})} 
            />
            <TextField 
              id="notesField" 
              label="Notes" 
              size='small'
              multiline 
              max-rows={4} 
              variant="outlined" 
              onChange={e => setFormData({ ...formData, 'notes': e.target.value})}
            />
            <TextField 
              id="sourceField" 
              label="Source" 
              size='small'
              variant="outlined" 
              onChange={e => setFormData({ ...formData, 'source': e.target.value})}
            />
            <TextField 
              id="exhibitField" 
              label="Exhibit" 
              size='small'
              variant="outlined" 
              onChange={e => setFormData({ ...formData, 'exhibit': e.target.value})}
            />
          </FormControl>
        </Box>
        Add History
        <Box component="form" >
          <FormControl>
            <TextField 
              id="dateField" 
              label="Date"
              placeholder={getCurrentDate()}
              size='small' 
              variant="outlined" 
              onChange={e => setFormData({ ...formData, 'date': e.target.value})}
            />
            <TextField 
              id="forceField" 
              label="Force"
              size='small' 
              variant="outlined" 
              onChange={e => setFormData({ ...formData, 'customerId': e.target.value})}
            />
            <TextField 
              id="officerField" 
              label="Officer" 
              size='small'
              variant="outlined" 
              onChange={e => setFormData({ ...formData, 'customerUser': e.target.value})}
            />
            <TextField 
              id="reasonForSearchField" 
              label="Reason For Search" 
              size='small'
              multiline 
              max-rows={4} 
              variant="outlined" 
              onChange={e => setFormData({ ...formData, 'reasonForSearch': e.target.value})}
            />
            <TextField 
              id="exhibitDownloadedField" 
              label="Exhibit Downloaded?" 
              placeholder="Must be a 1 or 0"
              size='small'
              variant="outlined" 
              onChange={e => setFormData({ ...formData, 'exhibitDownloaded': e.target.value})}
            />
          </FormControl>
        </Box>
        <Button type="submit" variant="contained" color="primary" onClick={createContact}>
         Submit
        </Button>
      </div>
  )

}

// async function createContact() {
//   await API.graphql({ query: addContactsData, variables: { input: formData } });
//   setFormData(initialFormState);
// };

export default function IntelligenceReport() {

    return (      
      <div className="newContactForm">
          <Form />
      </div>
    );
}