import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


var headers = ["Book","Author","Language","Published","Sales"];
var data = [
    ["The lord of the ring","J.R.R Tolkien","English","1954-1955","150 million"],
    ["Le Petit Prince","Antoine de Saint-Exupery","French","1943","140 million"],
    ["Harry Potter and the Philosopher's stone","J.K.Rowling","English","1997","107 million"],
    ["And Then There Were None","Agatha Christie","English","1939","100 million"]
  ]
// propTypes :{
//     headers:React.PropTypes.arrayOf(
//       React.PropTypes.string
//     )
//   };

      
ReactDOM.render(<App headers={headers} initialData={data}/>, document.getElementById('root'));
registerServiceWorker();
