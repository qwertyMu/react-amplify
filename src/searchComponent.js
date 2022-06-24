import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import { borderRadius } from '@mui/system';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'Type your query and hit enter.';
    }

    return 'You can search for Names | Phone Numbers | Email Addresses | Social Media Identifiers | WiFi Access Points etc...';
  }, [focused]);

  return <FormHelperText style={{color: "white"}}>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '90%' }}>
        <OutlinedInput placeholder="Please enter text" style={{backgroundColor: "whitesmoke", borderRadius: "12px", color: "#972021"}}/>
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
}
