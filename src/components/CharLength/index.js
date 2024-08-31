import './index.css'

const CharLength = props => {
  const {itemDetails} = props
  const {id, textValue} = itemDetails
  const charLen = textValue.length
  return (
    <li className="each-item">
      <p className="text">
        {textValue}: {charLen}
      </p>
    </li>
  )
}

export default CharLength
