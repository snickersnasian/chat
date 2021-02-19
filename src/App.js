import React from 'react';
import { Route } from 'react-router-dom';
import { Join } from './components/Join';
import { General } from './components/General';
import { Work } from './components/Work';


function App() {


  return (
    <div className="App">
      <Route path="/chatapp" exact component={Join} />
      <Route path="/general" component={General} />
      <Route path="/work" component={Work} />
    </div>
  );
}

export default App;
