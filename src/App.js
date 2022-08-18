import {useState, useEffect} from 'react'
import {getCandidates} from './lib/api'
import CandidatesCard from './components/CandidatesCard'

function App() {
  const [candidates, setCandidates] = useState([])
  
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
    <div className="bg-blue-700 container">
      <h1 className='text-3xl font-bold my-4 text-center md:mt-6 text-blue-400'>Candidatos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
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
    </div> 
  )
}

export default App;
