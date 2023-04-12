import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className='flex flex-row ml-10'>
        <a href="https://www.linkedin.com/in/achhayapathak/" style={{ marginRight: '20px' }}><FaLinkedin size={24} /></a>
        <a href="https://github.com/achhayapathak" style={{ marginRight: '20px' }}><FaGithub size={24} /></a>
        <a href="https://twitter.com/frozen_parantha" style={{ marginRight: '20px' }}><FaTwitter size={24} /></a>
        <a href="mailto:achhayapathak11@gmail.com" style={{ marginRight: '20px' }}><FaEnvelope size={24} /></a>
      </div>
      <p className='mr-5'>&copy; 2023 Made by Achhaya Pathak.</p>
    </footer>
  );
}

export default Footer;
