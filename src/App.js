import Header from './Components/Header'
import Card from './Components/Card'
import NewEntryForm from './Components/NewEntryForm/NewEntryForm'
import {useEffect, useState} from 'react'

import data from './travelData.js'

function App() {
  const [places, setPlaces] = useState(data)
  const [newEntry, setNewEntry] = useState({
    title: '',
    description: '',
    startDate:'',
    endDate: '',
    img: ''
  })
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  })
  const [dateRange, setDateRange] = useState([null, null]) // for date picker
  const [startDate, endDate] = dateRange
  const [selectedFileName, setSelectedFileName] = useState() // for img uploader


  const handleChange = (e) => {
    
    // for text inputs
    if(e.target.name === 'description' || e.target.name === 'title') {
      const {name, type, value} = e.target
      setFormData(prevFormData => {
        
        return {
            ...prevFormData,
            [name]: value
        }
      })
    }
  }

  


  useEffect(() => {
    setNewEntry(prevData => {
      return {
        ...prevData,
        title: formData.title,
        description: formData.description,
        startDate: startDate ? startDate.toDateString().substr(3) : null,
        endDate: endDate ? endDate.toDateString().substr(3) : null,
        img: selectedFileName
      }
    })
  }, [formData, dateRange, selectedFileName])



  const cards = places.map((item) => <Card key={item.id} {...item}/>)

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
