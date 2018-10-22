import * as React from 'react';

class deleteModal extends React.Component {
 
delete = () => {
    this.props.onDelete(this.props.selectedMovie);
}
  
render() {
    
    return (
        <div >
            <div id="deleteModal" className="modal-send modal fade" aria-label="edit movie" aria-describedby="modal-send-header" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-send-header" id="modal-send-header">
                            <h3>Delete movie</h3>
                        </div>
                        <footer>
                            <button type="button" className="delete" data-dismiss="modal" onClick={this.delete} aria-label="delete movie">Ok</button>
                            <button type="button" className="cancel" data-dismiss="modal" aria-label="cancel delete">Cancel</button>
                        </footer>    
                    </div>
                </div>
            </div>      
        </div>
    );
}

}

export default deleteModal;






