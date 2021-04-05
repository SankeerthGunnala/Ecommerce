import { HashRouter } from 'react-router-dom';
import Navigation from './components/Navigation';



 function App() {
  return (
    <div> 
    <HashRouter>
    <Navigation></Navigation>
    </HashRouter>   
    </div>
  );
}

export default App;
