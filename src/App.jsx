
import './App.css'
import Count from './Count'
import Batsman from './Batsman'
import Bowler from './bowler'
import { Suspense } from 'react'
import Users from './Users'
import Friend from './friend'


const userData = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const friendData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}

function App() {
  const friendInfo = friendData()

  function handleEvent(){
    alert('first click')
  }

  const handleEvent2 = () => alert('3rd click')
  const handleEvent3 = (num) => alert(num+5)

  

  return (
    <>
      <section id="center">
    <Suspense fallback={<p>friend are commig</p>}>
    <Friend friendInfo={friendInfo}></Friend>

    </Suspense>

      <Suspense fallback={<p>data is comming</p>}>
          <Users userData={userData}></Users>
      </Suspense>

      <Bowler></Bowler>
      <Batsman></Batsman>
      <Count></Count>
        {/* <button onClick={handleEvent}>Click me</button>
        <button onClick={() => alert('2nd click')}>click me 2</button>
        <button onClick={handleEvent2}>Click me 3</button>
        <button onClick={() => handleEvent3(9)}>Click me 4</button> */}
      </section>

    </>
  )
}

export default App
