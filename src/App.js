import {useEffect, useState} from 'react'
import Header from './Components/Header'
import Card from './Components/Card'
import NewEntryForm from './Components/NewEntryForm/NewEntryForm'
import {nanoid} from 'nanoid'

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

  const [selectedFileName, setSelectedFileName] = useState('') // for img uploader
  const [selectedFile, setSelectedFile] = useState()
  const [fileSelected, setFileSelected] = useState(false)


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
        imagePath: `../images/${selectedFileName}`
       
      }
    })
    // eslint-disable-next-line
  }, [formData, dateRange, selectedFileName])

  useEffect(() => {setPlaces(data)},[])

  useEffect(() => {
    localStorage.setItem('places', JSON.stringify(places))
  }, [places])


 
  

  function addEntry (e) {
    const finishedEntry = newEntry
    e.preventDefault()
    setPlaces(prevPlaces => [...prevPlaces, finishedEntry])
    setNewEntry({
      id: nanoid(),
      title: '',
      location: '',
      googleMapsUrl:'',
      startDate:'',
      endDate: '',
      description: '',
      imagePath: ''
    })
    setFormData({ 
      title: '',
      description: '',
      location: '',
      googleMapsUrl: ''
    })
    setDateRange([null, null])
    setSelectedFile(null)
    setFileSelected(false)
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
        setSelectedFile={setSelectedFile}
        selectedFile={selectedFile}
        setSelectedFileName={setSelectedFileName}
        selectedFileName={selectedFileName}
        fileSelected={fileSelected}
        setFileSelected={setFileSelected}
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
