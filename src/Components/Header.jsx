import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/light-bulb.svg';

const Header = () => {
  return (
    <>
      <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
      <Heading color='white' marginBottom='1rem'>
        Extractify
      </Heading>
      <Text fontSize={25} textAlign='center'>
      Paste in your text below and Extractify will extract the keywords for you.
      </Text>
    </>
  );
};

export default Header;