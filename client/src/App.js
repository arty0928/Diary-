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
      <div className="min-h-full">
          <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <Link to="/home" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>
                      <Link to="/post" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Post</Link>
                      </div>
                  </div>
                </div>      
              </div>
            </div>
          </nav>
  
</div>
        <div>
          {/* <div id = "header"> */}
            {/* <h1><Link to="/">Root</Link></h1> */}
            {/* <h1><Link to="/home">home</Link></h1> */}
            {/* <h1><Link to="/post">post</Link></h1> */}
          {/* </div> */}
          
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
