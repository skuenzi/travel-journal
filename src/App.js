import Header from './Components/Header'
import Card from './Components/Card'
import NewEntryForm from './Components/NewEntryForm'
import data from './travelData.js'

function App() {
  const cards = data.map((item) => <Card key={item.id} {...item}/>)

  return (
    <div className="container">
      {/* <Header />
      {cards} */}
      <NewEntryForm />
    </div>
  );
}

export default App;
