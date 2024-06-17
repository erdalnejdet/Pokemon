import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function ButonItem() {
  return (
    <div>
       <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Success
      </Button>
  
    </Stack>
    </div>
  )
}

export default ButonItem
