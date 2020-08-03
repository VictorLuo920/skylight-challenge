import React, {Component} from 'react';
import UploadForm from '../components/UploadForm';
import UploadProgress from '../components/UploadProgress';

const UPLOAD_BUCKET = 'https://skylight-react-interview-project.s3.amazonaws.com'

class UploaderContainer extends Component {

    state = {
        uploading: false
    }

    handleUpload = (file) => {
        let xhr = new XMLHttpRequest()
        let uploadUrl = `${ UPLOAD_BUCKET }/${ file.name }`
        xhr.open('PUT', uploadUrl) // I might be able to use async and await, or use a promise to "add" the step here 
        xhr.overrideMimeType(file.type); //possibly use setState somewhere here to handle the progress data to being passed down as props? 
        xhr.send(file);
      }
      
    render() {
        const { uploading } = this.state
        if (uploading) {
          return <UploadProgress />;
        } else {
          return <UploadForm handleUpload={this.handleUpload} />;
        }
    }
}

export default UploaderContainer;
