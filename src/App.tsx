import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      a
    </Provider>
  )

}

export default App
