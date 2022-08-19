import React from 'react'
import { useParams } from 'react-router-dom'

const CandidateDetail = ({candidates}) => {
    const {id} = useParams()
    const candidate = candidates.find(candidate = candidates.id === id)

    return (
        <div>
            <h2>Nombre: {props.name}{props.lastName}</h2>
            <p>Día de entrevista: {props.interviewDate}</p>

        </div>
    )
}

export default CandidateDetail