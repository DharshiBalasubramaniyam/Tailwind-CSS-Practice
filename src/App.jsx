import React from 'react';
import Button from './components/Button';
import Grid from './components/Grid';
import Peer from './components/Peer';
import Group from './components/Group';
import Form from './components/Form';
import Nav from './components/Nav';
import Container from './components/Container';

function App() {
  return (
    <>
      <Nav/>
      <Container/>
      <Button/>
      <Group/>
      <Peer/>
      <Grid/>
      <Form/>
    </>
  );
}

export default App;
