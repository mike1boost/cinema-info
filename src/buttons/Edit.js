import * as React from 'react';
import './Edit.css'

class btnn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        selectedMovie: {
            title:"", 
            year:0,
        }
    }
  }

  updateField=(field, value)=>{
    this.setState((prevState)=>{
        return{
            selectedMovie:{
                ...prevState.selectedMovie,
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

save = ()=>{
    console.log(this.state.selectedMovie);

    // this.props.onEdit(this.state.selectedUser);
}
  

  render() {
  
  return (
    <div >
        <div id="sendModal" className="modal-send modal fade" aria-label="edit movie" aria-describedby="modal-send-header" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-send-header" id="modal-send-header">
                           <h3>Edit movie</h3>
                           <p>title:<input type="text" id="title" value={this.state.selectedMovie.title} onChange={this.onUpdate} /></p>
                           <p>year:<input type="number" id="year" value={this.state.selectedMovie.year} onChange={this.onUpdate} /></p>
                            
                    </div>
                    
                    <footer>
                        <button type="button" className="save" onClick={this.save} aria-label="update detailes">Save</button>
                        <button type="button" className="cancel" data-dismiss="modal" aria-label="cancel edit">Cancel</button>
                    </footer>
                    
                </div>
            </div>
        </div>      
    
    </div>
    
  );
}

}

export default btnn;






