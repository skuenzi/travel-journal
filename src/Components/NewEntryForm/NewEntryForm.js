import {useState, useRef} from 'react'
import FileUploader from './fileuploader'

import {BsFillCalendarEventFill} from 'react-icons/bs'

export default function NewEntryForm (props) {
    const hiddenFileInput = useRef(null)

    // const onInputChange = (e) => {
    //     props.handleImgUpload(e.target.files[0])
    // }


    const handleClick = (e) => {
        hiddenFileInput.current.click()
    }


    return (
        <form className='new-entry-form card'>
            <input
                name='title'
                type='text'
                value={props.formData.title}
                placeholder='where did you go?'
                onChange={props.handleChange}
                className='title-input'
            >
            </input>
            
            <button 
                type='button'
                className='calendar-toggle-btn'
                >
                <BsFillCalendarEventFill /> 
            </button>
            {/* calendar */}

            <textarea
                name='description'
                value={props.formData.description}
                placeholder='tell us about it'
                onChange={props.handleChange}
                className='description-input'
            />

            <FileUploader />

            <button
                type='submit'
                className='submit-btn'
            >
                add entry
            </button>

        </form>
    )
}