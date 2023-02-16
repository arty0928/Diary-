/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/views/Home';
import Post from './components/views/Post/Post';

function App() {
  return (
    <Router>
   <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/post">Post</Link></li>
        </ul>
        <hr />

        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route exact path="/post" element = {<Post />} />
        </Routes>
</div>
</Router>
  );
}

export default App;
