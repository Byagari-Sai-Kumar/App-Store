// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="cardContainer">
      <img src={imageUrl} alt={appName} className="appItemImage" />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
