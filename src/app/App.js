import './stylesheets/App.css';
import NavBar from './components/navbar/NavBar';
import SubnetCalculator from './components/tools/SubnetCalculator';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SubnetCalculator/>
    </div>
  );
}

export default App;
