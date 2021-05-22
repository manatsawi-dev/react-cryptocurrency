import {Provider} from 'react-redux';
import MarketScreen from './screens/markets';
import store from './redux/store';
import {GlobalStyle} from './styles/global-style';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MarketScreen />
    </Provider>
  );
}

export default App;
