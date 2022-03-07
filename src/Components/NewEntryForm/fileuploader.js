import {useRef, useState} from 'react'
import axios from 'axios'

export default function FileUploader (props) {
    const hiddenFileInput = useRef(null)
    const [selectedFilePreview, setSelectedFilePreview] = useState()
    const [fileSelected, setFileSelected] = useState(false)
  const [selectedFile, setSelectedFile] = useState()


    const handleChange = (e) => {
        e.preventDefault()
        setSelectedFile(e.target.files[0])
        setFileSelected(true)
        setSelectedFilePreview(URL.createObjectURL(e.target.files[0]))
        
        const data = new FormData()
        data.append('file', selectedFile)

        axios.post('http://localhost:8000/upload', data)
    }

    const redirectClick = (e) => { // redirecting from styled button to upload input
        hiddenFileInput.current.click()
    }

    const btnType =  <button 
                type='button'
                onClick={redirectClick} 
                className='img-upload-btn'
                disabled={fileSelected}
            >
                select photo
            </button> 

  
        

    return (
        <div className='file-uploader'>
            <div className='photo-upload-space'>
                {fileSelected && <img src={selectedFilePreview}style={{height: '150px', width:'125px', objectFit: 'cover'}}/>}
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