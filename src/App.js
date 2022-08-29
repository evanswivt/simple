//import logo from './logo.svg';
import './App.css';
import axios from 'axios'
function App() {
const data=  axios.get('https://jsonplaceholder.typicode.com/todos');
console.log(data);
  return (
   
   <h1>Welcome to Amplify website again</h1>
   
  );
}


export default App;
