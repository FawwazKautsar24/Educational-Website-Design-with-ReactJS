import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from './components/common/heading/Header';

const App = () => {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
}

export default App;
