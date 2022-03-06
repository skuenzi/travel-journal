import Header from './Components/Header'
import Card from './Components/Card'
import NewEntryForm from './Components/NewEntryForm/NewEntryForm'
import {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'

import data from './travelData.js'

function App() {
  const [places, setPlaces] = useState(data)
  const [cards, setCards] = useState()
  const [newEntry, setNewEntry] = useState({
    id: nanoid(),
    title: '',
    location: '',
    googleMapsUrl:'',
    startDate:'',
    endDate: '',
    description: '',
    imgPath: ''
    
  })
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    googleMapsUrl: ''
  })
  const [dateRange, setDateRange] = useState([null, null]) // for date picker
  const [startDate, endDate] = dateRange
  const [selectedFileName, setSelectedFileName] = useState() // for img uploader


  const handleChange = (e) => {
    
    // for text inputs
      const {name, type, value} = e.target
      setFormData(prevFormData => {
        
        return {
            ...prevFormData,
            [name]: value
        }
      })
  }

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
        imgPath: `../images/${selectedFileName}`
       
      }
    })
    console.log(newEntry)
  }, [formData, dateRange, selectedFileName])

  useEffect(() => {
    setCards(places.map((item) => <Card key={item.id} {...item}/>))
    
  },[places])



  return (
    <div className="container">
      <Header />
      {cards}
      <NewEntryForm 
        handleChange={handleChange} 
        formData={formData} 
        setDateRange={setDateRange}
        startDate={startDate}
        endDate={endDate}
        selectedFileName={selectedFileName}
        setSelectedFileName={setSelectedFileName}
      />
    </div>
  );
}

export default App;
