// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }
  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTabItem}
        className={tabBtnClassName}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
