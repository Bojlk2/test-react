import {useState, useEffect} from 'react'
import {getCandidates} from './lib/api'
import CandidatesCard from './components/CandidatesCard'

function App() {
  const [candidates, setCandidates] = useState({})
  
  useEffect(() => {
    getCandidates().then((response) => {
      console.log(response)
      const data = response.Items
      console.log(data)
      setCandidates(data)
    })
  },[])
  console.log(candidates)
  return (
    <div className="App">
      <h1 className='text-3xl font-bold mt-4 text-center md:mt-6'>Candidatos</h1>
        {candidates.map((candidate) => {
          return (
            <CandidatesCard
            key={candidate.id}
            name={candidate.firstName}
            lastName={candidate.lastName}
            interviewDate={candidate.interviewDate}
            skills={candidate.skills}
            />
          )
        })
          
        }
    </div> 
  )
}

export default App;
