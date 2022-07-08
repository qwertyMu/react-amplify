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
    { field: "note", headerName: "Notes", width: 230 },
    { field: "source", headerName: "Force", width: 230 },
    { field: "exhibitNumber", headerName: "Exhibit Number", width: 230 },
  ];
  const rows = contactsData.map(data => { 
    return ({ 
      id: data.id,
      name: data.name,
      phoneNumber: data.phoneNumber,
      emailAddress: data.emailAddress,
      note: data.note,
      force: data.source,
      exhibitNumber: data.exhibitNumber
    })
  });
  return(
    <DataGrid style={{color: "white"}} rows={rows} columns={columns} autoHeight/>    
  )
};

ContactsData.propTypes = {
  contactsData: PropTypes.array.isRequired
};

export default ContactsData;
    

  // const columns = [
  //   { field: "name", headerName: "Name", width: 230 },
  //   { field: "phoneNumber", headerName: "Phone Number", width: 230 },
  //   { field: "emailAddress", headerName: "Email Address", width: 230 },
  //   { field: "note", headerName: "Notes", width: 230 },
  //   { field: "force", headerName: "Force", width: 230 },
  //   { field: "exhibitNumber", headerName: "Exhibit Number", width: 230 },
  // ];
  
  // const rows = [
  //   { id: 1, name: "David Smith", phoneNumber: "07123456789", emailAddress: "david.smith@gmail.com", note: "David boat guy", force: "Staffordshire Police", exhibitNumber: "ST/TMP/12" },
  //   { id: 2, name: "Breanna Mongomery", phoneNumber: "07123456789", emailAddress: "Breanna.montgomery@gmail.com", note: "y G - 4g for £300", force: "West Mercia Police", exhibitNumber: "WM/rMP/15" },
  //   { id: 3, name: "Eclair Parcel", phoneNumber: "07123456789", emailAddress: "e.parcel@gmail.com", note: "DONT'T ANSWER", force: "MET Police", exhibitNumber: "ST/TMP/12" },
  //   { id: 4, name: "Cupcake Motezouma", phoneNumber: "07123456789", emailAddress: "moty.cupcake@gmail.com", note: "caravan bloke", force: "Devon and Somerset Police", exhibitNumber: "SW/LKJ/22" },
  //   { id: 5, name: "Gingerbread Higglestaff", phoneNumber: "07123456789", emailAddress: "gingerstaff@gmail.com", note: "Repairs lifts for HSBC", force: "Staffordshire Police", exhibitNumber: "DC/FGH/33" },
  // ];
