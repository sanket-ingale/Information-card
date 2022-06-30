import './footer.css';

export default function Footer() {
  return (
    <footer>
        <a href="mailto:sanket.ingale1998@gmail.com" target="_blank">
            <img src={require('./icons/gmail.png')} alt='gmail'/>
        </a>
        <a href="https://www.linkedin.com/in/sanket-ingale1998/" target="_blank">
            <img src={require('./icons/linkedin.png')} alt='linkedin'/>
        </a>
        <a href="https://www.instagram.com/lightbuster_/" target="_blank">
            <img src={require('./icons/instagram.png')} alt='insta'/>
        </a>
        <a href="https://github.com/sanket-ingale" target="_blank">
            <img src={require('./icons/github.png')} alt='git'/>
        </a>
    </footer>
  );
}
