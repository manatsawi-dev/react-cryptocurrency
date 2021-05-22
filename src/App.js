import {Provider} from 'react-redux';
import IndexScreen from './screens';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <IndexScreen />
    </Provider>
  );
}

export default App;
