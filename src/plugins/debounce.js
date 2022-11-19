const setLastCallTime = () => {
  window.localStorage.setItem('lastRequestSent', Math.floor(Date.now() / 1000))
}

const canSendRequest = () => {
  const lastCallTime = window.localStorage.getItem('lastRequestSent') || 0
  return Math.floor(Date.now() / 1000) - lastCallTime > 120
}

const debounce = (actionFn) => {
  return function (context, payload) {
    if (canSendRequest()) {
      setLastCallTime()
      actionFn.call(this, context, payload)
    }
  }
}

export default debounce
