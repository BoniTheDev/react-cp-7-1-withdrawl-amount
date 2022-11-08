// Write your code here

import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onWithdrawal = value => {
    const {amount} = this.state

    this.setState({amount: amount - value})
  }

  render() {
    const {denominationsList} = this.props
    const username = 'Sarah Williams'
    const usericon = username.slice(0, 1)
    const {amount} = this.state
    return (
      <div className="app-container">
        <div className="withdrawal-container">
          <div className="user-card">
            <div className="user-icon-card">
              <p className="user-icon">{usericon}</p>
            </div>
            <p className="user-name">{username}</p>
          </div>
          <div className="balance-card">
            <p className="balance-heading">Your Balance</p>
            <div className="balance-amount-card">
              <p className="bal-amount">{amount}</p>
              <p className="rupees-desc">In rupees</p>
            </div>
          </div>
          <div className="withdraw-panel-card">
            <p className="withdraw-heading">Withdraw</p>
            <p className="choose-value-desc">CHOOSE SUM (IN RUPEES)</p>

            <ul className="withdraw-value-card">
              {denominationsList.map(dedAmountObj => (
                <DenominationItem
                  denominationItem={dedAmountObj}
                  key={dedAmountObj.id}
                  withdrawAmount={this.onWithdrawal}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
