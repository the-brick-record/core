import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'; 

import Suggestions from './components/Suggestions'

const API_URL = 'https://api.redonemedia.co.uk/_/items/property'

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?q=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
      .catch(() => this.setState({ error: true }))
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // this.showDropdown()
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
          document.getElementById("element").style.display = "block";
        }
        } else if (!this.state.query && this.state.query.length < 1) {
          // this.hideDropdown()
          document.getElementById("element").style.display = "none";
        }
    })
  }

  // When the search field loses focus, hide the popover
  handleInputBlur = () => {
    // Prevent the blur event firing before the click has started
    
    setTimeout(
      function() 
      {
        $('#element').hide();
      }, 200);
  }

  // When the input field is focussed, show the popover
  handleInputFocus = () => {
    $('#element').show();
  }

  render() {
    return (
      <form>
        <input
          id="searchInput"
          placeholder="Search for an address..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          onBlur={this.handleInputBlur}
          onFocus={this.handleInputFocus}
        />
        <Suggestions results={this.state.results} />
      </form>

    )
  }
}

export default Search
