import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { API } from 'aws-amplify';
import { searchContacts } from '../graphql/queries';
import { useState } from 'react';
import { Button } from '@mui/material';
import ContactsData from '../results/tableData/xContactsTable';


export default function UseFormControl() {
  const [contacts, setContacts] = useState([]); // All the contacts
  const [searchTerm, setSearchTerm] = useState("");

  let searchTermHandler = (e) => { // Handles the search being inputted
    var searchTermInputted = e.target.value;
    setSearchTerm(searchTermInputted);
  }

  const matchPhrasePrefix = {matchPhrasePrefix: searchTerm}
  const matchPhrase = {matchPhrase: searchTerm}
  const multiMatch = {multiMatch: searchTerm}
  const equals = {eq: searchTerm}

  async function fetchContacts() { //This currently just returns everything
    console.log(searchTerm)
    const apiData = await API.graphql({ 
      query: searchContacts,
      variables: {
        filter: {
          or: [
            {name: matchPhrasePrefix}, 
            {phoneNumber: matchPhrasePrefix}, 
            {emailAddress: matchPhrasePrefix}, 
            {notes: matchPhrasePrefix}, 
            {source: matchPhrasePrefix}, 
            {exhibit: matchPhrasePrefix}
          ]
          //https://stackoverflow.com/questions/60853978/how-to-filter-list-queries-with-and-or-operators-aws-amplify-javascript-graphql/60854311#60854311
        }
      }
    });
    const contactsFromAPI = apiData.data.searchContacts.items;
    await Promise.all(contactsFromAPI.map(async contact => {
      return contact;
    }))
    setContacts(apiData.data.searchContacts.items);
    
  }
  
  function MyFormHelperText() {
    const { focused } = useFormControl() || {};
    const helperText = React.useMemo(() => {
      if (focused) {
        return (
          'Type your query and hit enter.'
        )
      }
      return 'You can search for Names | Phone Numbers | Email Addresses | Social Media Identifiers | WiFi Access Points etc...';
    }, [focused]);
  
    return <FormHelperText style={{color: "white"}}>{helperText}</FormHelperText>;
  }

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '90%' }}>
        <OutlinedInput placeholder="Please enter text" style={{backgroundColor: "whitesmoke", borderRadius: "12px", color: "#972021"}} onChange={searchTermHandler}/>
        <Button onClick={fetchContacts}>
          Search
        </Button>
        <MyFormHelperText />
      </FormControl>
      <ContactsData contactsData={contacts}/>
    </Box>
  );
}
