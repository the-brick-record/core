import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`https://api.redonemedia.co.uk/_/items/property`)
      .then(res => {
        const data = res.data.data;
        this.setState({ data });
      })
  }

  render() {
    return (
      <div>
        <div>
          <p>Welcome to the Brick Record</p>
          <small>Here are a list of properties you can view details on:</small>
        </div>
        <br></br>
        <ul>
          { this.state.data.map(person => 
            <li><Link to={`${person.id}`}>{person.house_number}, {person.street_name}, {person.postcode}</Link></li>
          )}
        </ul>
      </div>
      
    )
  }
}