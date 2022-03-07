import {useEffect, useState, useContext} from 'react'
// import {Context} from './Context'
import Header from './Components/Header'
import Card from './Components/Card'
import NewEntryForm from './Components/NewEntryForm/NewEntryForm'
import {nanoid} from 'nanoid'
import axios from 'axios'

import data from './travelData.js'

function App() {
  const [places, setPlaces] = useState(JSON.parse(localStorage.getItem('places')) || [])
  const [newEntry, setNewEntry] = useState({
    id: nanoid(),
    title: '',
    location: '',
    googleMapsUrl:'',
    startDate:'',
    endDate: '',
    description: '',
    imagePath: ''
    
  })
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    googleMapsUrl: ''
  })
  const [dateRange, setDateRange] = useState([null, null]) // for date picker
  const [startDate, endDate] = dateRange
  


  const handleChange = (e) => {
    
    // for text inputs
      const {name, value} = e.target
      setFormData(prevFormData => {
        
        return {
            ...prevFormData,
            [name]: value
        }
      })
  }

  const [selectedFileName, setSelectedFileName] = useState() // for img uploader


  useEffect(() => {
    setNewEntry(prevData => {
      return {
        ...prevData,
        title: formData.title, 
        location: formData.location,
        googleMapsUrl: formData.googleMapsUrl,
        startDate: startDate ? startDate.toDateString().substr(3) : null,
        endDate: endDate ? endDate.toDateString().substr(3) : null,
        description: formData.description,
        imagePath: `public/images/${selectedFileName}`
       
      }
    })
    console.log(newEntry)
  }, [formData, dateRange, selectedFileName])

  useEffect(() => {setPlaces(data)},[])

  useEffect(() => {
    localStorage.setItem('places', JSON.stringify(places))
  }, [places])


 
  

  function addEntry (e) {
    e.preventDefault()
    setPlaces(prevPlaces => [...prevPlaces, newEntry])
  }

  return (
    <div className="container">
      <Header />
      {places.map((item) => <Card key={item.id} {...item}/>)}
      <NewEntryForm 
        handleChange={handleChange} 
        formData={formData} 
        setDateRange={setDateRange}
        startDate={startDate}
        endDate={endDate}
        setSelectedFileName={setSelectedFileName}
      />
      <button
          type='button'
          className='submit-btn'
          onClick={addEntry}
      >
          add entry
      </button>
    </div>
  );
}

export default App;
