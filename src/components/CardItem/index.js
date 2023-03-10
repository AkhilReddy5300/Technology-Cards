import './index.css'

const CardItem = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards
  return (
    <li className={`list-item ${className}`}>
      <h1 className="header">{title}</h1>
      <p className="description-2">{description}</p>
      <div className="image-cont">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
