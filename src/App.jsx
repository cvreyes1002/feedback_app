import { useState } from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  )
}

export default App
