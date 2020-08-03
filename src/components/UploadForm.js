import React, { Component } from 'react'

class UploadForm extends Component {

    onChangeHandler = (event) => {
        let i = 0;
        while (i < event.target.files.length) {
            this.props.handleUpload(event.target.files[i]);
            i++
        }
    };

    render() {
        return (<div>
          <h1>Pick Multiple Photos</h1>
          <p>Click on "Choose Files" and then use "command" on a Mac or CTRL on Windows to select multiple files.</p>
          <input type='file' name='file' multiple onChange={this.onChangeHandler} />
        </div>);
    };
}

export default UploadForm