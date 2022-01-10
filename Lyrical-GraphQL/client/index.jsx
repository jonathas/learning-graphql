import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router, Route, hashHistory, IndexRoute,
} from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import App from './components/App.jsx';
import SongList from './components/SongList.jsx';
import SongCreate from './components/SongCreate.jsx';

const client = new ApolloClient({});

function Root() {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
        </Route>
      </Router>
    </ApolloProvider>
  );
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root'),
);
