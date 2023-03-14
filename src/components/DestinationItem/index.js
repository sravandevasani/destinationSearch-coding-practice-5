import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li>
      <img alt={name} className="destination-img" src={imgUrl} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
