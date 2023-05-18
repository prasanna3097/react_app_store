// Write your code here
import './index.css'

const AppItem = props => {
  const {appsDetails} = props
  const {imageUrl, appName} = appsDetails

  return (
    <li className="app-items-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="appName">{appName}</p>
    </li>
  )
}
export default AppItem
