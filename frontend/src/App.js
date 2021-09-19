// import { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ListScreen from './screens/ListScreen';
import ListInventoryScreen from './screens/ListInventoryScreen';

const App = () => {
  return (
    <div className='app-body'>
      <Router>
        <Header />
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LogInScreen} exact />
          <Route path='/signup' component={SignUpScreen} exact />
          <Route path='/listinventory' component={ListInventoryScreen} exact />
          <Route path='/list/:id' component={ListScreen} exact />
        </main>
        <Footer />
      </Router>
    </div>
  );
};
// list.id === props.match.params.id
export default App;
