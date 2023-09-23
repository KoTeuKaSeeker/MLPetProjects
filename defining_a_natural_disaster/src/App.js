import logo from './logo.svg';
import './App.css';
import { ReactComponent as GithubLogo } from './images/github-mark-white.svg';

function App() {
  return (
    <div className="app">
      <div className="header">

        <div className="left-block">
        <GithubLogo 
          className="github-icon" 
          alt="Link to my github"
          viewBox='0 0 100 100'
          />
        </div>
    
        <div className="center-block">
          <div className="header-name-container">
            <p className="header-name">Sentiment analysis</p>
            <p className="header-name header-name-glowing">Sentiment analysis</p>
          </div>
        </div>

        <div className="right-block">
          
        </div>
      </div>
    </div>
  );
}

export default App;
