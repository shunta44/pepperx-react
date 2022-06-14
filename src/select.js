import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {

const jj=(t)=>{
    switch (t.target.value) {
        case '10':
          console.log(888)
          
          break;
        case '20':
          console.log(555)
          
          break;
      
        default:
          break;
      }
}

  return (
      <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
          onChange={jj}
        >

          <option value={10} >Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>

        </NativeSelect>
      </FormControl>
    </Box>

    <select onChange={jj}>
    <option value={10} >あいうえお</option>
    <option value={20}>かきくけこ</option>
    </select>
      </>

  );
}
