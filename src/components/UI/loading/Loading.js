import { CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{position:'absolute',height:'100%',width:'100%'}}>
        <CircularProgress />
    </div>
  )
}

export default Loading