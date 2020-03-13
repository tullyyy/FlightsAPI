import React from 'react' 
import Data from './Data'

function Results() { 

  const flightArr = [ {
    id: "1",
    name: "Pencil",
    price: 1,
    description: "Perfect for those who can't remember things! 5/5 Highly recommend."
  },
  {
    id: "2",
    name: "Housing",
    price: 0,
    description: "Housing provided for out-of-state students or those who can't commute"
  }]

  const resultsData = flightArr.map(result =>  {
    return <Data key={result.id} name={result.name} description={result.description} />
  }
  )

  return ( 
    <div style={{border:"1px solid #333"}} > 
      ResultsComponent 
      {resultsData}
    </div>

  )
}

export default Results

