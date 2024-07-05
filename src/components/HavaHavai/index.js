import {Component} from 'react'

import Header from '../Header'
import SideBar from '../SideBar'
import ListItem from '../ListItem'
import './index.css'

const airportList = [
  {
    id: 1,
    name: 'Indra Gandhi International Airport',
    country: 'India',
    code: 'DEL',
    terminals: 3,
  },
  {
    id: 2,
    name: 'Dubai International Airport',
    country: 'UAE',
    code: 'DXB',
    terminals: 5,
  },
  {
    id: 3,
    name: 'Heathrow Airport',
    country: 'England',
    code: 'LHR',
    terminals: 6,
  },
  {
    id: 4,
    name: 'Istanbul International Airport',
    country: 'Turkey',
    code: 'IST',
    terminals: 3,
  },
  {
    id: 5,
    name: 'Rajiv Gandhi International Airport',
    country: 'Texas',
    code: 'DFW',
    terminals: 14,
  },
]

class HavaHavai extends Component {
  state = {
    isClick: false,
    initialList: airportList,
  }

  deleteItem = id => {
    const {initialList} = this.state
    const updatedList = initialList.filter(item => item.id !== id)
    this.setState({initialList: updatedList})
  }

  getDetails = item => (
    <div>
      <h1 className="airport-name">{item.name}</h1>
    </div>
  )

  render() {
    const {initialList} = this.state
    return (
      <div className="app-container">
        <Header />
        <div className="section">
          <SideBar />
          <div className="section2">
            <h1>Airports</h1>
            <div className="list-item">
              <div className="input">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="label">
                  All Airports
                </label>
              </div>
              <div className="list-names">
                <p className="names">Country</p>
                <p className="names">Code</p>
                <p className="names">Terminals</p>
              </div>
            </div>
            {initialList.map(each => (
              <ListItem
                details={each}
                deleteItem={this.deleteItem}
                getDetails={this.getDetails}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default HavaHavai
