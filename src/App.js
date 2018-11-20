import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.svg';
import './App.css';
import Courses from './courses';

const client = new ApolloClient({
  uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
            <div>
              <h2>GraphQL Example</h2>
            </div>
            <div>
              <Courses />
            </div>
          </ApolloProvider>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           <App />
//       </div>
//     );
//   }
// }

export default App;
