import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function createData(name, phoneNumber, emailAddress, notes, source, exhibit) {
  return {
    name,
    phoneNumber,
    emailAddress,
    notes,
    source,
    exhibit,
    history: [
      {
        date: '2020-01-05',
        customerId: 'MET Police',
        customerUser: 'DC Scott Example',
        reasonForSearch: 'Operation Illuminative',
        exhibitDownloaded: 1,
      },
      {
        date: '2020-01-02',
        customerId: 'South Wales Police',
        customerUser: 'IO Bernie Smith',
        reasonForSearch: 'LEAD 45/2022',
        exhibitDownloaded: 0,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.phoneNumber}</TableCell>
        <TableCell align="right">{row.emailAddress}</TableCell>
        <TableCell align="right">{row.notes}</TableCell>
        <TableCell align="right">{row.source}</TableCell>
        <TableCell align="right">{row.exhibit}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ backgroundColor: '#f5f2f2', paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                More
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell><AccessTimeIcon fontSize='sm'/>Latest Hits</TableCell>
                    <TableCell>Force</TableCell>
                    <TableCell align="right">Officer</TableCell>
                    <TableCell align="right">Reason for Search</TableCell>
                    <TableCell align="right">Exhibit Downloaded</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.customerUser}</TableCell>
                      <TableCell align="right">{historyRow.reasonForSearch}</TableCell>
                      <TableCell align="right">{historyRow.exhibitDownloaded}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    phoneNumber: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    exhibitNumber: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        exhibitDownloaded: PropTypes.number.isRequired,
        reasonForSearch: PropTypes.string.isRequired,
        customerUser: PropTypes.string.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('David Smith', '07123456789', 'david.smith@gmail.com', 'David boat guy', 'Staffordshire Police', 'ST/TMP/12'),
  createData('Breanna Mongomery', '07123456789', 'Breanna.montgomery@gmail.com', 'y G - 4g for £300', 'West Mercia Police', 'WM/rMP/15'),
  createData('Eclair Parcel', '07123456789', 'e.parcel@gmail.com', "DONT'T ANSWER", 'MET Police', 'ST/TMP/12'),
  createData('Cupcake Motezouma', '07123456789', 'moty.cupcake@gmail.com', 'caravan bloke', 'Devon and Somerset Police', 'SW/LKJ/22'),
  createData('Gingerbread Higglestaff', '07123456789', 'gingerstaff@gmail.com', 'Repairs lifts for HSBC', 'Staffordshire Police', 'DC/FGH/33'),
];

export default function ContactsTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email Address</TableCell>
            <TableCell align="right">Notes</TableCell>
            <TableCell align="right">Source</TableCell>
            <TableCell align="right">Exhibit Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}