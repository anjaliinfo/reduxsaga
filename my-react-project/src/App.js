import React from 'react';
import { connect } from 'react-redux';

class MyComponent extends React.Component {
  componentDidMount() {
    // Dispatch the action to start your saga
    this.props.dispatch({ type: 'START_ACTION' });
  }
  render() {
    return (
      <div>
        {/* Your component content */}
      </div>
    );
  }
}
export default connect()(MyComponent);


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
