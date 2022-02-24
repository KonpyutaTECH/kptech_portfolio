import { Component } from 'react';

class ModalWindow extends Component {   

    render() {
        return(                
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                    <span className="close">&times;</span>
                    <h3>Message envoyé</h3>
                    </div>
                    <div className="modal-body">
                        <p>Votre message a été envoyé avec succès !</p>
                    </div>
                </div>        
            </div>         
        );
    }  
}


export default ModalWindow;