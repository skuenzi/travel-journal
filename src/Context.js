import React, {useState} from 'react'
import data from './travelData'

const Context = React.createContext()

function ContextProvider({children}) {
    const [places, setPlaces] = useState(data)


    function addEntry(newEntry) {
        setPlaces(prevPlaces => [...prevPlaces, newEntry])
    }

    return (
        <Context.Provider value={{places}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}