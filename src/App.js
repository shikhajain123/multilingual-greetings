import {Component} from 'react'

import Tabs from './components/Tabs'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
    active: false,
  }

  onChangeLanguage = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeLanguage, activeId, active} = this.state
    const activeLanguageArray = languageGreetingsList.find(
      each => each.id === activeId,
    )

    const {imageUrl, imageAltText} = activeLanguageArray
    return (
      <div className="app-container">
        <div className="responsive">
          <h1>Multilingual Greetings</h1>
          <ul className="btns-container">
            {languageGreetingsList.map(eachLanguage => (
              <Tabs
                key={eachLanguage.id}
                languagedetails={eachLanguage}
                onChangeLanguage={this.onChangeLanguage}
                active={activeId === eachLanguage.id}
              />
            ))}
          </ul>
          <div className="content-container">
            <img src={imageUrl} className="image" alt={imageAltText} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
