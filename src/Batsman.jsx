import { useState } from "react"

export default function Batsman (){
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)

    const handleSingle = () => {
        const updatedRuns = runs+1;
        setRuns(updatedRuns)
    }

    const handleSix = () => {
        const updatedRuns = runs+6;
        const updatedSixes = sixes+1;
        setSixes(updatedSixes)
        setRuns(updatedRuns)
    }
    
    const handleFour = () => {
        const updatedRuns = runs+4;
        setRuns(updatedRuns)
    }

    return(
        <div>
            <h3>player name: Sakib</h3>
            <h4>sixes: {sixes}</h4>
            <h2>Runs: {runs}</h2>
            <div style={{display:'flex', gap: '20px'}}>

            <button onClick={handleSingle}>Single</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleFour}>Four</button>
            </div>

        </div>
    )
}