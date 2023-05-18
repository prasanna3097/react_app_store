// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeButton = isActive ? 'button' : 'underLineButton'
  const updateTabs = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-items-list">
      <button type="button" className={activeButton} onClick={updateTabs}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
