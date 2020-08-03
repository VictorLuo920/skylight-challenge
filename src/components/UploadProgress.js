import React from 'react'
import ProgressBar from './ProgressBar'

const UploadProgress = (props) => {
    return (<div>
        <h1>Uploading...</h1>
        <ProgressBar />
        <ProgressBar />
      </div>);
}

export default UploadProgress;