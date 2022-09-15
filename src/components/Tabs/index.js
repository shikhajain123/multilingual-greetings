import './index.css'

const Tabs = props => {
  const {languagedetails, onChangeLanguage, active} = props
  const {id, buttonText} = languagedetails

  const nonActiveClass = active ? 'active-btn' : 'language-btn'

  const onClicklanguageBtn = () => {
    onChangeLanguage(id)
  }

  return (
    <>
      <li className="list-item">
        <button
          type="button"
          className={nonActiveClass}
          onClick={onClicklanguageBtn}
        >
          {buttonText}
        </button>
      </li>
    </>
  )
}

export default Tabs
