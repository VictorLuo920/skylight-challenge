import React from 'react'

const ProgressBar = (props) => {
    
    const progressStyles = {
        background: 'green',
        width: `${props.progress}%`, // connect this width dynamically connected to props that connects it to upload data? 
        height: '50px' 
    }

        return <div>
            <p>cats.gif</p>
            <div style={{
                width: '100%',
                background: 'gray',
                height: '50px' }}>
            <div style={progressStyles}>{props.progress}%</div>
      </div>
    </div>
    
}

export default ProgressBar