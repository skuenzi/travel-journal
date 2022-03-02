import Header from './Components/Header'
import Card from './Components/Card'
import NewEntryForm from './Components/NewEntryForm/NewEntryForm'
import {useEffect, useState} from 'react'

import data from './travelData.js'

function App() {
  const [newEntry, setNewEntry] = useState({
    title: '',
    description: '',
    startDate:'',
    endDate: '',
    img: ''
  })
  const [places, setPlaces] = useState(data)
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  })
  const [dateRange, setDateRange] = useState([null, null])

  const [startDate, endDate] = dateRange


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

      />
    </div>
  );
}

export default App;
