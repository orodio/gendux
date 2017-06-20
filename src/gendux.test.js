import { createStore } from './gendux'

test('createStore', () => {
  const initState = { count:5 }
  const reducer = (state, event) => {
    if (event.type === "INC") return { ...state, count: state.count + 1 }
    return state
  }

  const mockReducer = jest.fn().mockImplementation(reducer)

  const { getState, dispatch, subscribe } = createStore(mockReducer, initState)

  expect(getState()).toMatchSnapshot()

  const event = { type:"INC" }

  dispatch(event)
  expect(mockReducer).toHaveBeenCalledWith(initState, event)
  const nextState = reducer(initState, event)
  expect(getState()).toMatchSnapshot()

  dispatch(event)
  expect(mockReducer).toHaveBeenCalledWith(nextState, event)
  expect(getState()).toMatchSnapshot()

  const sub = jest.fn()
  const unsub = subscribe(sub)

  dispatch(event)
  expect(getState()).toMatchSnapshot()

  dispatch(event)
  expect(getState()).toMatchSnapshot()

  unsub()

  dispatch(event)
  expect(getState()).toMatchSnapshot()

  dispatch(event)
  expect(getState()).toMatchSnapshot()

  expect(sub).toHaveBeenCalledTimes(2)
})
