import {useRef, useState} from 'react'

export default function FileUploader (props) {
    const hiddenFileInput = useRef(null)

    const onInputChange = (e) => {
        props.handleChange(e.target.files[0])
    }


    const handleClick = (e) => {
        hiddenFileInput.current.click()
    }

    return (
        <div>
            <button 
                type='button'
                onClick={handleClick} 
                className='img-upload-btn'
            >
                upload photo
            </button>
            {/* https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8 */}
            <input 
                type="file" 
                name='imagePath'
                style={{display: 'none'}} 
                ref={hiddenFileInput}
                onChange={onInputChange}
            />
        </div>
        
    )
}