import {Component} from 'react'

import DestinationItem from '../DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onClickSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResultItems = destinationsList.filter(eachObj => {
      const lowerCaseName = eachObj.name.toLowerCase()
      return lowerCaseName.includes(searchInput)
    })

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              onChange={this.onClickSearchInput}
              type="search"
              className="search-element"
              placeholder="Search"
            />
            <img
              className="search-icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="destination-items-container">
            {searchResultItems.map(eachObj => (
              <DestinationItem key={eachObj.id} destinationsList={eachObj} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
