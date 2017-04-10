import React from 'react';
import Landing from './Landing.jsx';
import { render } from 'react-dom';
import {Route} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <Route path="/" component={() => {
            return <Landing />;
          }} />
      </div>
    );
  }
}

export default App;