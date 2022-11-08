// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationItem, withdrawAmount} = props
  const {value} = denominationItem

  const dedAmount = () => {
    withdrawAmount(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={dedAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
