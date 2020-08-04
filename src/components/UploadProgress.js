import React from 'react'
import ProgressBar from './ProgressBar'

const UploadProgress = (props) => {
    // {files.map(file => (<ProgressBar progress={file.progress}>))}git 
    return (
    <div>
        <h1>Uploading...</h1>
        <ProgressBar progress={props.progress}/>
    </div>
    );
}

export default UploadProgress;