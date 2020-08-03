import React from 'react'

const UploadForm = (props) => {
    return <div>
                <h1>Pick Multiple Photos</h1>
                <p>Click on "Choose Files" and then use "command" on a Mac or CTRL on Windows to select multiple files.</p>
                <input type='file' name='file' multiple onChange={props.onChangeHandler} />
            </div>;
    
}

export default UploadForm