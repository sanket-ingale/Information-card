import './title.css';

export default function Title() {
  return (
    <title>
        <h1>Sanket Ingale</h1>
        <p>Frontend Developer</p>
        <h4>sanket.ingale</h4>
        <links>
          <button>
            <img src={require('./icons/gmail.png')} alt='gmail'/>
            <a href="mailto:sanket.ingale1998@gmail.com" target="_blank">E-mail</a>
          </button>
          <button>
            <img src={require('./icons/linkedin.png')} alt='linkedin'/>
            <a href="https://www.linkedin.com/in/sanket-ingale1998/" target="_blank">LinkedIn</a>
          </button>
            
        </links>
    </title>
  );
}


