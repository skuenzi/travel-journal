import {useState, useRef} from 'react'
import FileUploader from './fileuploader'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {BsFillCalendarEventFill} from 'react-icons/bs'

export default function NewEntryForm (props) {

    return (
        <form className='form container'>
            <div className='new-entry-form'>
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
                    <input
                        name='location'
                        type='text'
                        value={props.formData.location}
                        placeholder='which is in...'
                        onChange={props.handleChange}
                        className='location-input'
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
                <div className='col-2'>
                    <FileUploader 
                        setSelectedFile={props.setSelectedFile}
                        setSelectedFileName={props.setSelectedFileName}
                        
                    />
                    <input
                        name='googleMapsUrl'
                        type='text'
                        value={props.formData.googleMapsUrl}
                        placeholder='paste a map url'
                        onChange={props.handleChange}
                        className='mapsUrl-input'
                    >
                    </input>
                </div>
            </div>
        </form>
    )
}