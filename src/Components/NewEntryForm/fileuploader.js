import {useRef, useState} from 'react'
import axios from 'axios'

export default function FileUploader (props) {
    const hiddenFileInput = useRef(null)
    const [selectedFilePreview, setSelectedFilePreview] = useState()


    const handleChange = (e) => {
        e.preventDefault()
        props.setSelectedFile(e.target.files[0])
        props.setFileSelected(true)
        setSelectedFilePreview(URL.createObjectURL(e.target.files[0]))
        
        
    }

    const onPreviewLoad = () => {
        const data = new FormData()
        data.append('file', props.selectedFile)

        axios.post('http://localhost:8000/upload', data)
            .then(res => {
                props.setSelectedFileName(res.data.originalname)
            })
    }

    const redirectClick = (e) => { // redirecting from styled button to upload input
        hiddenFileInput.current.click()
    }

    const btnType =  <button 
                type='button'
                onClick={redirectClick} 
                className='img-upload-btn'
                disabled={props.fileSelected}
            >
                select photo
            </button> 

  
        

    return (
        <div className='file-uploader'>
            <div className='photo-upload-space'>
                {props.fileSelected && <img src={selectedFilePreview} onLoad={onPreviewLoad} style={{height: '150px', width:'125px', objectFit: 'cover'}}/>}
            </div>
            {btnType}
            {/* https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8 */}
            <input 
                type="file" 
                name='file'
                style={{display: 'none'}} 
                ref={hiddenFileInput}
                onChange={handleChange}
            />
        </div>
        
    )
}