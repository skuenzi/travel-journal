import {useState, useRef} from 'react'
import FileUploader from './fileuploader'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {BsFillCalendarEventFill} from 'react-icons/bs'

export default function NewEntryForm (props) {

    return (
        <form className='form container'>
            <div className='card new-entry-form'>
                <div className='col-1'>
                    <input
                        name='title'
                        type='text'
                        value={props.formData.title}
                        placeholder='where did you go?'
                        onChange={props.handleChange}
                        className='title-input'
                    >
                    </input>
                    
                    <div className='calendar-container'>
                        <BsFillCalendarEventFill  style={{color: '#F55A5A'}}/>
                        <DatePicker 
                            selectsRange={true}
                            startDate={props.startDate}
                            endDate={props.endDate}
                            onChange={(update) => {
                                props.setDateRange(update);
                            }}
                            withPortal
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>
                    <textarea
                        name='description'
                        value={props.formData.description}
                        placeholder='tell us about it'
                        onChange={props.handleChange}
                        className='description-input'
                        />
                    
                </div>
                <FileUploader 
                    selectedFileName={props.selectedFileName}
                    setSelectedFileName={props.setSelectedFileName}
                    
                />
            </div>
            <button
                type='submit'
                className='submit-btn'
            >
                add entry
            </button>
        </form>
    )
}