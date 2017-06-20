import "babel-polyfill"

export const createStore = (reducer, state = {}) => {
  var subs = []

  const store = (function * store () {
    __loop: while (1) {
      const event = yield null
      if (event.type === "NOOP") continue __loop
      state = reducer(state, event)
      subs.forEach(fn => fn(state))
    }
  })()

  const dispatch = event => store.next(event)

  dispatch({ type:"NOOP" })

  const subscribe = fn => {
    subs.push(fn)
    var subscribed = true
    return () => {
      if (subscribed) subs.splice(subs.indexOf(fn), 1)
      subscribed = false
    }
  }

  return {
    dispatch,
    subscribe,
    getState: () => state
  }
}
