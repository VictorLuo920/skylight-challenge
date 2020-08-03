import React, {useState} from 'react';
import UploadForm from '../components/UploadForm';
import UploadProgress from '../components/UploadProgress';

const UPLOAD_BUCKET = 'https://skylight-react-interview-project.s3.amazonaws.com'

const UploaderContainer = () => {

    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    

    const onChangeHandler = (event) => {
        let i = 0;
        while (i < event.target.files.length) {
            handleUpload(event.target.files[i]);
            i++
        }
    };

    const handleUpload = (file) => {
        setUploading(true);
        let xhr = new XMLHttpRequest()
        let uploadUrl = `${ UPLOAD_BUCKET }/${ file.name }`
        xhr.open('PUT', uploadUrl) // I might be able to use async and await, or use a promise to "add" the step here 
        xhr.overrideMimeType(file.type); //possibly use setState somewhere here to handle the progress data to being passed down as props? 
        xhr.upload.onprogress = event => {
            const percentage = parseInt((event.loaded / event.total) * 100);
            console.log(percentage); 
            setProgress(percentage);
            if (percentage === 100) {
                setUploading(false);
                setProgress(0); // could but set state onreadystatechange....
            };// Update progress here. while percentage is still not at 100, 
           };
        xhr.send(file)
    }
      
    if (uploading) {
        return <UploadProgress />;
    } else {
        return <UploadForm handleUpload={handleUpload} onChangeHandler={onChangeHandler}/>;
    }
}


export default UploaderContainer;
