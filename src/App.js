import * as React from 'react';
import './App.css';
import {getMovies} from './server-api'
import ThemeSwitcher from './ThemeSwitcher'

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
      });
  }


// List = () => (
//   <div className="info-card">
//       {
//           this.state.moviesList.map((movie, index) => <div className="tile-image" key={index}>
//           <p>{movie.Title}</p>
//           <p>{movie.Year}</p>
//           </div>)
//       }
//   </div>
// );

List = () => (
  <div className="container">
	<div className="cards">
  {
    this.state.moviesList.map((movie, index) => <div className="card" key={index}>
    
			 <span className="card-header">
        <img  src= {require('./images/cinema.jpeg')}  alt="cinema"></img>
				<span className="card-title">
					<h3>{movie.Title}</h3>
				</span>
			</span>
			
      <span className="card-summary">
        <p>{movie.Year}</p>
			</span>
			<span className="card-meta">
				Published: June 18th, 2015
			</span>
		
    </div>
    )}
	</div>
</div>
);




render() {
  
  return (
    <div >
      <header className="App-header">
        <h1 className="App-title">Herolo Cinema</h1>
      </header>
      <ThemeSwitcher/>
       {this.List()} 
    </div>
  );
}

}

export default App;
