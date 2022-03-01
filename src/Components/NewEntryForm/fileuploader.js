import {useRef, useState} from 'react'
import axios from 'axios'

export default function FileUploader () {
    const hiddenFileInput = useRef(null)
    const [selectedFile, setSelectedFile] = useState()
    const [selectedFilePreview, setSelectedFilePreview] = useState()
    const [fileSelected, setFileSelected] = useState(false)
    const [fileUploaded, setFileUploaded] = useState(false)
    const [selectedFileName, setSelectedFileName] = useState()

    const handleChange = (e) => {
        e.preventDefault()
        setSelectedFile(e.target.files[0])
        setFileSelected(true)
        setSelectedFilePreview(URL.createObjectURL(e.target.files[0]))
    }

    const handleClick = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('file', selectedFile)

        axios.post('http://localhost:8000/upload', data)
        .then(res => {
            setFileUploaded(true)
            setSelectedFileName(res.data.filename)
        })
    }


    const redirectClick = (e) => { // redirecting from styled button to upload input
        hiddenFileInput.current.click()
    }

    const btnType = !fileSelected ? <button 
                type='button'
                onClick={redirectClick} 
                className='img-upload-btn'
            >
                select photo
            </button> :
            <button 
                type='button'
                onClick={handleClick} 
                className={`img-upload-btn ${fileUploaded && 'clicked'}`}
                disabled={fileUploaded}
            >
                upload
            </button>

  
        

    return (
        <div className='file-uploader'>
            <div className='photo-upload-space'>
                {fileSelected && <img src={fileUploaded ? `/images/${selectedFileName}` : selectedFilePreview}style={{height: '150px', width:'125px', objectFit: 'cover'}}/>}
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