import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerStarted: false, secondsElapsed: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  setTimer = () => {
    this.setState(prevState => {
      const {secondsElapsed} = prevState
      return {
        secondsElapsed: secondsElapsed + 1,
      }
    })
  }

  clearTimerInterval = () => {
    clearInterval(this.timerId)
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState({isTimerStarted: false, secondsElapsed: 0})
  }

  onStartTimer = () => {
    this.timerId = setInterval(this.setTimer, 1000)
    this.setState({isTimerStarted: true})
  }

  onStopTimer = () => {
    this.clearTimerInterval()
    this.setState({isTimerStarted: false})
  }

  renderMinutesAndSecondsFormat = () => {
    const {secondsElapsed} = this.state
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = Math.floor(secondsElapsed % 60)

    const minutesFormat = minutes > 9 ? minutes : `0${minutes}`
    const secondsFormat = seconds > 9 ? seconds : `0${seconds}`

    return `${minutesFormat}:${secondsFormat}`
  }

  render() {
    const {isTimerStarted} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="stopwatch">
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <h1 className="timer-text">Timer</h1>
          </div>
          <h1 className="timer-format">
            {this.renderMinutesAndSecondsFormat()}
          </h1>
          <div className="stopwatch-buttons-container">
            <button
              onClick={this.onStartTimer}
              className="start-button button"
              type="button"
              disabled={isTimerStarted}
            >
              Start
            </button>
            <button
              onClick={this.onStopTimer}
              className="stop-button button"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.onResetTimer}
              className="reset-button button"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
