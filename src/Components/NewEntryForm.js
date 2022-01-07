import {useState} from 'react'
import Calendar from 'react-select-date'
import {BsFillCalendarEventFill} from 'react-icons/bs'

function NewEntryForm () {
    const [showCalendar, setShowCalendar] = useState(false)

    function toggleCalendar () {
        setShowCalendar(!showCalendar)
        // isn't working because component rerenders immediately and the calendar disapears
    }

    return (
        <form className='new-entry-form card'>
            <input name='title' type='text' placeholder='Where did you go?'></input>
            <button onClick={toggleCalendar}><BsFillCalendarEventFill/></button>

            {showCalendar && <Calendar />}

            





            {/* <textarea name='title'  ></textarea>
            <input type="file" />
            <button type='submit'>Add Entry</button> */}

        </form>
    )
}

export default NewEntryForm