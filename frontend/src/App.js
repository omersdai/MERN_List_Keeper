import { Fragment } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import './styles/App.scss';

const App = () => {
  return (
    <div className='app-body'>
      <Header />
      <main>
        <Welcome />
      </main>
      <Footer />
    </div>
  );
};

export default App;
