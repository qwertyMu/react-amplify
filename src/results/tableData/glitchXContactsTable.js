import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import reactRouterDom from "react-router-dom";


const ContactsData = props => {  

  const {contactsData} = props;

  const columns = [
    { field: "name", headerName: "Name", width: 230 },
    { field: "phoneNumber", headerName: "Phone Number", width: 230 },
    { field: "emailAddress", headerName: "Email Address", width: 230 },
    { field: "notes", headerName: "Notes", width: 230 },
    { field: "source", headerName: "Force", width: 230 },
    { field: "exhibit", headerName: "Exhibit Number", width: 230 },
  ];
  const rows = contactsData.map(data => { 
    return ({ 
      id: data.id,
      name: data.name,
      phoneNumber: data.phoneNumber,
      emailAddress: data.emailAddress,
      notes: data.notes,
      source: data.source,
      exhibit: data.exhibit,
    })
  });
  return(
    <DataGrid style={{color: "white"}} rows={rows} columns={columns} autoHeight/>    //DataGrid needs the autoHeight property to render the actual table. 
  )
};

ContactsData.propTypes = {
  contactsData: PropTypes.array.isRequired
};

export default ContactsData;