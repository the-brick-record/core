import React from 'react'
import { Link } from 'react-router-dom'



const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      <Link to={`${r.id}`}>
      <span>{r.house_number}</span>,
      <span> {r.street_name}</span>,
      <span> {r.postcode}</span>.
      <p>The ID for this property is: {r.id}</p>
      </Link>
    </li>
  ))

   return <ul id="element">{options}</ul>
}



export default Suggestions
