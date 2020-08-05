import React, {useState} from 'react';
import UploadForm from '../components/UploadForm';
import UploadProgress from '../components/UploadProgress';

const UPLOAD_BUCKET = 'https://skylight-react-interview-project.s3.amazonaws.com'

const UploaderContainer = () => {

    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState([]);
    /* {
        id: 0,
        progress: 0
        
    }
    */
    const [fileInfos, setFileInfos] = useState([]);
    
    

    const onChangeHandler = (event) => { // this receives the event which does contain a cache of files...it's an array
        setSelectedFiles(event.target.files)
        let i = 0;
        let state = []
        while (i < event.target.files.length) {
            //this needs to be written as a nested function that properly stores event.target.files into an state array of "currently uploading files"
            let uploadState = {id: i, progress: 0}; // add this to state, find it
            state.push(uploadState);
            handleUpload(event.target.files[i], i);/// whenever calling setstate, order of operations, setstate never takes place in a loop
            i++
        }
        setProgress(state); 
        //replace state // managing state in a sequential order... 
    };

    const handleUpload = (file, id) => {
        let i = progress// array of progress bars, array of objects, using an id, 
        setUploading(true);
        let xhr = new XMLHttpRequest()
        let uploadUrl = `${ UPLOAD_BUCKET }/${ file.name }`
        xhr.open('PUT', uploadUrl) // I might be able to use async and await, or use a promise to "add" the step here 
        xhr.overrideMimeType(file.type); //possibly use setState somewhere here to handle the progress data to being passed down as props? 
        xhr.upload.onprogress = event => {
            const percentage = parseInt((event.loaded / event.total) * 100);
            console.log(percentage); 
            const progresses = [...progress]
            progresses.forEach((s) => {
                if (s.id == id) { s.progress = percentage}
            })
            setProgress(progresses);// can I parse out the files from the event here? I can can't I? 
            // if (percentage === 100) {
            //     setUploading(false);
            //     setProgress(0); // could but set state onreadystatechange....
            // };// Update progress here. while percentage is still not at 100, 
           };
        xhr.onreadystatechange = event => {
            setUploading(false);
            setProgress([]); // could but set state onreadystatechange....
        }
        xhr.send(file)
    }
      
    if (uploading) {
    return <div>{progress.map( (state) => <UploadProgress progress={state.progress}/> )}</div>;
    } else {
        return <UploadForm handleUpload={handleUpload} onChangeHandler={onChangeHandler}/>;
    }
}


export default UploaderContainer;
