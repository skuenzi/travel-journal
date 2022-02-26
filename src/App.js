import Header from './Components/Header'
import Card from './Components/Card'
import NewEntryForm from './Components/NewEntryForm/NewEntryForm'
import {useState} from 'react'

import data from './travelData.js'

function App() {
  const [places, setPlaces] = useState(data)

  const [formData, setFormData] = useState({
    title: '',
    description: ''
  })

  const [img, setImg] = useState()

  const handleChange = (e) => {
      setFormData(prevFormData => {
        const {name, type, value} = e.target
        return {
            ...prevFormData,
            [name]: value
        }
          
      })
      console.log(formData)
  }

  const handleImgUpload= (upload) => {
    setImg(upload)
    console.log(img)
  }


  const cards = places.map((item) => <Card key={item.id} {...item}/>)

  return (
    <div className="container">
      <Header />
      {cards}
      <NewEntryForm 
        handleChange={handleChange} 
        formData={formData} 
        handleImgUpload={handleImgUpload}
      />
    </div>
  );
}

export default App;
