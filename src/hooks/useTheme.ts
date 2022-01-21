import { createGlobalState } from 'react-hooks-global-state'

const initialState = { theme: 'light' }
const { useGlobalState } = createGlobalState(initialState)

export { useGlobalState }
