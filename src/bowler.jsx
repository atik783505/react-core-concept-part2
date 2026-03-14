import { useState } from "react"

export default function Bowler(){

    const [ball, setBall] = useState(0)
    const [sixes, setSixes] = useState(0)
    const [four, setFour] = useState(0)
    const [noBall, setNoball] = useState(0)
    const [wide, setWide] = useState(0)

    const handleFour = () => {
        const newCount = ball+1;
        const updatedFour = four+1;
        setFour(updatedFour)
        setBall(newCount)
    }
    const handleSix = () => {
        const newCount = ball+1;
        setBall(newCount)
    }
    const handleNoball = () => {
        alert('no BAll')
        const newCount = ball+0;
        setBall(newCount)
    }
    const handleWide = () => {
        alert('Wide ball')
        const newCount = ball+0;
        setBall(newCount)
    }

    return(
        <div>
            <h2>Bowler Name: </h2>
            <h4>total Bowled: {ball}</h4>
            <p>Concede four: {four}</p>
            <p>Concede six: </p>
            <p>No ball bowled: </p>
            <p>Wide Ball: </p>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
            <button onClick={handleNoball}>No ball</button>
            <button onClick={handleWide}>Wide ball</button>
        </div>
    )
}