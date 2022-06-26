import React from 'react'

const initState = {
    job: '',
    jobs: []
}

const Reducer = () => {
  return (
    <div>
        <h3>Todo</h3>
        <input type="text" placeholder='Enter todo...' />
        <button>Add</button>
        <ul>
            
        </ul>
    </div>
  )
}

export default Reducer