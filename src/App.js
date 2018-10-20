import * as React from 'react';
import './App.css';
import {getMovies} from './server-api'
import {sameHeightF} from './sameHeight'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      moviesList:[]
    };
  }
  
  componentDidMount(){    
    
    getMovies() 
      .then((moviesList)=>{
        this.setState({moviesList})
        console.log(moviesList);
        console.log(this.state.moviesList);
        sameHeightF(".same-height");
      });
      
  }

   
List = () => (
  <div className="container">
	<ul className="row cards">
  {
    this.state.moviesList.map((movie, index) => <li className="card col-sm-6 col-lg-4" key={index}>
      <div className="card-in">
        <img  src= {require('./images/cinema.jpeg')}  alt="cinema"></img>
        <div className="card-details">
          <h2 className="card-title same-height">{movie.Title}</h2>
          <div>year:{movie.Year}</div>
          <div className="card-meta">Published: June 18th, 2015</div>
        </div>
      </div>
    </li>
    )}
	</ul>
</div>
);


render() {
  
  return (
    <div >
      
      <header className="App-header">
        <h1 className="App-title">Herolo Cinema</h1>
      </header>      
       
       {this.List()} 

    </div>
    
  );
}

}

export default App;
