import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Form,
  Title,
  Button,
  Footer,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  PinterestIcon,
  SocialMedia,
  Pink,
  Yellow,
  Map,
  YellowRight,
  PinkRight,
  Blue,
  Main,
  ModalComp,
  ButtonModal,
} from './styles.js';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [showModal, setShowModal] = useState(false);


  const api = axios.create({
    baseURL: 'http://localhost:8080',
  });

  const sendMsg = async () => {
    setShowModal(true);
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
      }
    
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const data = {
      user_name: name,
      user_email: email,
      content: message
    };

    api.post('/api/messages', JSON.stringify(data), headers)
      .then(res => res)
      .catch(error => console.log(error))};

  return (
    <>
    { !showModal && (
    <Main>
      <Yellow />
      <Box>
        <Title>
          Reach out to us!
        </Title>
        <Form>
          <input type="text" placeholder='Your name*' onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder='Your email*' onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder='Your message*' onChange={(e) => setMessage(e.target.value)} />
        </Form>
        <Button type="button" onClick={sendMsg}>
          Send message
        </Button>
      </Box>
      <Map />
      <YellowRight />
      <PinkRight />
      <Footer>
        <Pink />
        <SocialMedia>
          <LinkedinIcon />
          <TwitterIcon />
          <FacebookIcon />
          <PinterestIcon />
        </SocialMedia>
        <Blue />
      </Footer>
    </Main>
    )}

    <ModalComp show={showModal}>
            <p className='msg-modal'>You sended a message!</p>
            <ButtonModal onClick={() => setShowModal(false)}>
                <p>New message</p>
            </ButtonModal>
        </ModalComp>
      </>
  );
}

export default App;
