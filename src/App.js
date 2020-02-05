import React from 'react'
import 'normalize.css/normalize.css'
import './App.scss'
import anime from 'animejs/lib/anime.es.js';


class App extends React.Component {

  state = {
    opacity: "0"
  }

  componentDidMount() {
    const link = document.getElementsByClassName('button')
    console.log('link: ', link);
    
    anime({
      targets: link,
      keyframes: [
        {delay: 1000, duration: 600, opacity: 1, scale: 1.5, easing: 'easeInOutQuart'},
        {rotate: '1turn', duration: 1000, easing: 'easeInOutQuart'},
        {rotate: '2turn', duration: 1000, easing: 'easeInOutQuart'},
        {scale: 1, easing: 'easeInOutQuart', opacity: 0, duration: 600}
      ]
    })
  }
  
  render() {
    return (
        <div className="button" style={{opacity:`${this.state.opacity}`}} >
            <a id="link" href="/">JG</a>
        </div>
    )
  }
}



export default App
