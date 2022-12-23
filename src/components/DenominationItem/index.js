import './index.css'

const DenominationItem = props => {
  const {denominationItem, onWithDrawl} = props
  const {denomination} = denominationItem

  const onClickButton = () => {
    onWithDrawl(denomination)
  }

  return (
    <li className="denomination-item">
      <button type="button" onClick={onClickButton} className="button">
        {denomination}
      </button>
    </li>
  )
}

export default DenominationItem
