import React from 'react'

const ProgressBar = (props) => {
    
        return <div>
            <p>cats.gif</p>
            <div style={{
                width: '100%',
                background: 'gray',
                height: '50px' }}>
            <div style={{
                background: 'green',
                width: '75%', // connect this width dynamically connected to props that connects it to upload data? 
                height: '50px' }}></div>
      </div>
    </div>
    
}

export default ProgressBar