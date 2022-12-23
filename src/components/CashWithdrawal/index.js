import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

const denominations = [
  {
    id: 0,
    denomination: 2000,
  },
  {
    id: 1,
    denomination: 1000,
  },
  {
    id: 2,
    denomination: 500,
  },
  {
    id: 3,
    denomination: 200,
  },
  {
    id: 4,
    denomination: 100,
  },
  {
    id: 5,
    denomination: 50,
  },
  {
    id: 6,
    denomination: 20,
  },
  {
    id: 7,
    denomination: 10,
  },
  {
    id: 8,
    denomination: 5,
  },
]

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
    inSufficient: false,
    totalAmount: 0,
  }

  onWithDrawl = denomination => {
    const {balance} = this.state
    const remainBalance = balance - denomination
    if (remainBalance >= 0) {
      this.setState({balance: remainBalance})
      this.setState({inSufficient: false})
      this.setState(prevState => ({
        totalAmount: prevState.totalAmount + denomination,
      }))
    } else {
      this.setState({inSufficient: true})
    }
  }

  render() {
    const {balance, inSufficient, totalAmount} = this.state

    return (
      <div className="app-container">
        <div className="rupees-details-container">
          <div className="name-container">
            <div className="initial-container">
              <h1 className="initial-letter">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="amount">{balance} </p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="with-draw">Withdraw</p>
            <p className="sum-in-rupees">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denominations-container">
            {denominations.map(denominationItem => (
              <DenominationItem
                key={denominationItem.id}
                onWithDrawl={this.onWithDrawl}
                denominationItem={denominationItem}
              />
            ))}
          </ul>
          {totalAmount !== 0 && !inSufficient ? (
            <p className="total-amount">Total Amount: {totalAmount}</p>
          ) : null}
          {inSufficient && <p className="error">*Insufficient Balance</p>}
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
