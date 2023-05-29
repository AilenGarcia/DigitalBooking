import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";

const Loader = ({loading}) => {
  return (
    <div className='loading'>
    <SyncLoader
    color={"#1DBEB4"}
    loading={loading}
    size={40}
  />
  </div>
  )
}

export default Loader