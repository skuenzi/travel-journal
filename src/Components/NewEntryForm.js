import {useState, useRef} from 'react'
import Calendar from 'react-select-date'
import {BsFillCalendarEventFill} from 'react-icons/bs'

function NewEntryForm () {
    const [formData, setFormData] = useState({
        title: '',
        startDate: '',
        endDate:'',
        description: '',
        showCalendar: false
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            const {name, type, value} = event.target
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const toggleCalendar = () => {
        setFormData(prevData => ({
            ...prevData,
            showCalendar: !prevData.showCalendar
        }))
    }

    const hiddenFileInput = useRef(null) // for img file uploader
    const handleClick = event => {
        hiddenFileInput.current.click()

    }

    return (
        <form className='new-entry-form card'>
            <input 
                name='title' 
                type='text' 
                placeholder='where did you go?' 
                value={formData.title}
                className='title-input'
                onChange={handleChange}
            >
            </input>
            
            <button 
                className='calendar-toggle-btn' 
                onClick={toggleCalendar}
                type='button'
                name='showCalendar'
                style={{color: formData.showCalendar ? '#918E9B' : '#F55A5A'}}
            >
                <BsFillCalendarEventFill />
            </button>    

            {formData.showCalendar && <Calendar className='calendar'/> }
            {/* <Calendar className='calendar'/> */}

            <textarea 
                name='description' 
                placeholder='tell us about it' 
                className='description-input'
                value={formData.description}
                onChange={handleChange}

            />

            <button onClick={handleClick} className='img-upload-btn'>upload photo</button>
            {/* https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8 */}
            <input type="file" style={{display: 'none'}} ref={hiddenFileInput}/>
            <button type='submit' className='submit-btn'>add entry</button>

        </form>
    )
}

export default NewEntryForm