import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
    <>
      <Navbar title = "TextAnalyzer"/>

      <div className="container my-3">
        <TextForms heading= "Enter the text to analyze"/>
      </div>

    </>
  );
}

export default App;
