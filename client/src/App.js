/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/views/Home';
import Post from './components/views/Post/Post';
import Root from './components/views/root';
import Auth from './hoc/auth';

function App() {

  const NewHome = Auth(Home,null);


  return (
    <Router>
   <div>
        <ul>
          <li><Link to="/">Root</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/post">Post</Link></li>
        </ul>
        <hr />

        <Routes>
          <Route exact path="/" element = {<Root/>} />
          <Route exact path="/home" element = {<NewHome />} />
          <Route exact path="/post" element = {<Post />} />
        </Routes>
</div>
</Router>
  );
}

export default App;
