import * as React from 'react';
const uuidv1 = require('uuid/v1');

class addModal extends React.Component {

    constructor(props){
    super(props);
    this.state = {
        newMovie: {
            Title:"", 
            Year:"",
            id:""
        }
    }
  }

//   componentDidUpdate(prevProps) {
   
//     if (this.props.selectedMovie.id !== prevProps.selectedMovie.id) {
//       this.setState(()=>{
//         return{
//         selectedMovie:this.props.selectedMovie
//         }
//       });
//     }
//   }

updateField=(field, value)=>{
    this.setState((prevState)=>{
        return{
            newMovie:{
                ...prevState.newMovie,
                [field] : value
            }
        }
    })
}

onUpdate = (e)=>{
    const field = e.target.id;
    const value = e.target.value;
    this.updateField(field, value);
}

addMovie = ()=>{
    //  check input  ###
    
    // console.log(this.state.selectedMovie);
    let newMovie = this.state.newMovie;
    newMovie.id = uuidv1(); 
    this.props.addMovie(newMovie);
}
  
  render() {
  
  return (
    <div >
        <div id="addModal" className="modal-send modal fade" aria-label="edit movie" aria-describedby="modal-send-header" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-send-header" id="modal-send-header">
                           <h3>Add movie</h3>
                           <p>title:<input type="text" id="Title" value={this.state.newMovie.Title} onChange={this.onUpdate} /></p>
                           <p>year:<input type="number" id="Year" value={this.state.newMovie.Year} onChange={this.onUpdate} /></p>
                    
                    </div>
                    <footer>
                        <button type="button" className="add" data-dismiss="modal" onClick={this.addMovie} aria-label="add new movie">Add</button>
                        <button type="button" className="cancel" data-dismiss="modal" aria-label="cancel delete">Cancel</button>
                    </footer>
                    
                </div>
            </div>
        </div>      
    
    </div>
  );
}

}

export default addModal;






