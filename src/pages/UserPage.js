import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function UserPage(props) {
  const initialUserState = {
    user: {},
    loading: true,
  }

  const [user, setUser] = useState(initialUserState)

  useEffect(() => {
    const getUser = async () => {
      //const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`)
      const { data } = await axios(`https://api.redonemedia.co.uk/_/items/property?filter[id]=${props.match.params.id}`)

      setUser(data)
    }

    getUser()
  }, [])

  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
    <Link to="/">Back to main listing</Link>
      <h1>{user.data[0].house_number}, {user.data[0].street_name}, {user.data[0].postcode}</h1>

      <table>
        <thead>
          <tr>
            <th>Property name</th>
            <th>Postcode</th>
            <th>Date added</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.data[0].house_number}</td>
            <td>{user.data[0].postcode}</td>
            <td>{user.data[0].created_on}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
