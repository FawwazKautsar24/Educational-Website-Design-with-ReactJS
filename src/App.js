import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/common/heading/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import CourseHome from './components/all_courses/CourseHome';
import Team from './components/home/team/Team';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/courses' exact component={CourseHome} />
          <Route path='/team' exact component={Team} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
