// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, updateActiveTabItem, isActive} = props
  const {tabId, displayText} = tabsList

  const clickedOnTabItem = () => {
    updateActiveTabItem(tabId)
  }

  const activeClass = isActive ? 'highlightText' : ''

  return (
    <li>
      <button
        type="button"
        className={`displayTextTabItem ${activeClass}`}
        onClick={clickedOnTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
