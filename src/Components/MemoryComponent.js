import React from 'react'
import { useSelector } from 'react-redux'
import MemoryCard from './MemoryCard'

function MemoryComponent() {
  const frameworks = useSelector((state) => state.frameworks.frameworks)


  return (
    <div className='container-sm  p-sm-2 p-lg-4   mt-3 bg-dark  rounded-3 mb-4 cardHeight' >

      <div className='row p-1 p-sm-2 row-cols-5  row-cols-sm-5 gap-1  gap-sm-2 gap-lg-0 '>
        {
          frameworks.map((framework) => <MemoryCard isOpen={framework.status} key={framework.id} framework={framework} />)
        }
      </div>
    </div>



  )
}

export default MemoryComponent
