import { useState, useEffect } from 'react'
import axios from 'axios'

const Numbers = ({displayFact, numberInput}) => {
    const [fact, setFact] = useState('')

    useEffect(() => {
        if(numberInput === '') return
        const getRandomFact = async () => {
            try {
                const res = await axios.get(`http://numbersapi.com/${numberInput}`)
                console.log(res)
                setFact(res.data)
            } catch(err) {
                console.log(err)
            }
        }
        getRandomFact()
    }, [displayFact,numberInput])

    return (
        <h2>{fact}</h2>
    )
}

export default Numbers