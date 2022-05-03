import { useState, useEffect } from 'react'
import axios from 'axios'

const Numbers = ({ displayAnimal, numberInput}) => {
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        if(numberInput === '') return
        const getRandomFact = async () => {
            try {
                const res = await axios.get(`https://zoo-animal-api.herokuapp.com/animals/rand/${numberInput}`)
                console.log(res)
                setAnimals(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getRandomFact()
    }, [displayAnimal,numberInput])

    return (
        <h2>{animals.map(animal=> {
          return <img style={{width: 300}} src={animal.image_link} />
        })}</h2>
    )
}

export default Numbers