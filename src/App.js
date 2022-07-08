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
} from './styles.js';

function App() {
  return (
    <>
    <Yellow />
      <Box>
        <Title>
          Reach out to us!
        </Title>
        <Form>
          <input type="text" placeholder='Your name*' />
          <input type="text" placeholder='Your email*' />
          <input type="text" placeholder='Your message*' />
        </Form>
        <Button>
          Send message
        </Button>
      </Box>
      <Map/>
      <YellowRight/>
      <PinkRight/>
      <Footer>
      <Pink/>
        <SocialMedia>
        <LinkedinIcon/>
        <TwitterIcon/>
        <FacebookIcon/>
        <PinterestIcon/>
        </SocialMedia>
        <Blue/>
      </Footer>
    </>
  );
}

export default App;
