import * as React from 'react'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'

import { useMutation } from '@apollo/client'
import { UPDATE_USERNAME } from '../../utils/mutations'

export default function Account() {

    

return(
    <Box sx={{minHeight:"calc(100vh - 40px)" }}>
        <Typography>Hello User!</Typography>
    </Box>
);
}