import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KingdomInfo from '../components/kingdom-info'

function App() {
  return (
    <Container fixed>
      <KingdomInfo />
      <Button variant="contained" color="primary">Hello World</Button>
    </Container>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
