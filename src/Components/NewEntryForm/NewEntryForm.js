import {BsFillCalendarEventFill} from 'react-icons/bs'

export default function NewEntryForm () {

    return (
        <form>
            <input
                name='title'
                type='text'
                placeholder='where did you go?'
                className='title-input'
            >
            </input>
            
            <BsFillCalendarEventFill /> 

            {/* calendar */}

            <textarea
                name='description'
                placeholder='tell us about it'
                className='description-input'
            />

            {/* file uploader */}

            <button
                type='submit'
                className='submit-btn'
            >
                add entry
            </button>

        </form>
    )
}