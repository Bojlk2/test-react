import React from "react"
import { Link } from 'react-router-dom'

const CandidatesCard = (props) => {
  return (
    <figure className="bg-sky-600 w-80 h-24 shadow-xl mb-4 text-gray-50 rounded-lg md:w-96 content-center">
      <figcaption className="text-center">
        <p className="text-slate-200 font-semibold text-xl mb-2">
            Nombre: {props.name} {props.lastName}
        </p>
        <Link to ={`/candidates/${props.id}`}/>
        <button className="rounded-full bg-violet-700 hover:bg-violet-900 font-bold px-4 py-2">Detalles</button>
      </figcaption>
    </figure>
  )
}

export default CandidatesCard