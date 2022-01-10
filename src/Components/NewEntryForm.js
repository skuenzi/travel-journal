import {useState, useRef} from 'react'
import Calendar from 'react-select-date'
import {BsFillCalendarEventFill} from 'react-icons/bs'

function NewEntryForm () {
    const [showCalendar, setShowCalendar] = useState(false)

    function toggleCalendar () {
        setShowCalendar(!showCalendar)
        // isn't working because component rerenders immediately and the calendar disapears
    }
    const hiddenFileInput = useRef(null)
    const handleClick = event => {
        hiddenFileInput.current.click()

    }

    return (
        <form className='new-entry-form card'>
            <input 
                name='title' 
                type='text' 
                placeholder='where did you go?' 
                className='title-input'
            >
            </input>

            <button 
                onClick={toggleCalendar}
                className='calendar-toggle-btn'
            >
                <BsFillCalendarEventFill className='calendar-icon'/>
            </button>

            {/* <Calendar className='calendar'/> */}

            <textarea 
                name='description' 
                placeholder='tell us about it' 
                className='description-input'
            >
            </textarea>

            <button onClick={handleClick} className='img-upload-btn'>upload photo</button>
            {/* https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8 */}
            <input type="file" style={{display: 'none'}} ref={hiddenFileInput}/>
            <button type='submit' className='submit-btn'>add entry</button>

        </form>
    )
}

export default NewEntryForm