import {Switch,Route} from 'react-router-dom';
import Home from './container/homePageContainer';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import Game from './container/gameContainer/game';
import 'antd/dist/antd.css';
function App() {
  return (
    <Provider store={store}>
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/game" component={Game} />
    </Switch>
</Provider>
  );
}

export default App;
