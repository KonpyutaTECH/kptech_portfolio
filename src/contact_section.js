import { Component } from 'react';
import emailjs from '@emailjs/browser';

class ContactSection extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        nom: "",
        email: "", 
        tel: "", 
        sujet: "", 
        message: "",  
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {      
      const name = event.target.name ;
      this.setState({
        [name]: event.target.value
      });
    }

    sendFeedback(templateId, variables){
      emailjs.send('service_3kgkrvd', templateId, variables, 'user_c0p0AHTL76SAXv8coPt95')
        .then((res) => {
          console.log('success !');
          // Get the modal
          var modal = document.getElementById("myModal");

          // Get the <span> element that closes the modal
          
          modal.style.display = "block";

          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
          modal.style.display = "none";
          }

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
              if (event.target === modal) {
                  modal.style.display = "none";
              }
          }
          this.setState({
            nom: "",
            email: "", 
            tel: "", 
            sujet: "", 
            message: "",
          });
        })
        .catch(
          (err) =>
            document.querySelector('.form-message').innerHTML =
              "Une erreur s'est produite, veuillez réessayer.")       
    };
  
    handleSubmit(event) {
      event.preventDefault();
      this.sendFeedback("template_9h0ii3c", {
        nom: this.state.nom,
        email: this.state.email, 
        tel: this.state.tel, 
        sujet: this.state.sujet, 
        message: this.state.message,
      });
    }    

    render() {
        return(                
            <div className="contact_form_container">              
                <h2>Contactez-moi</h2>
                <div className="contact_form">
                    <form id="mail_form" method="post" onSubmit={this.handleSubmit}>
                        <input type="text" name="nom" placeholder="Nom" value={this.state.nom} onChange={this.handleChange} required/>
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required/>
                        <input type="tel" name="tel"  placeholder="Téléphone" value={this.state.tel} onChange={this.handleChange} required/>
                        <input type="text" name="sujet" placeholder="Sujet" value={this.state.sujet} onChange={this.handleChange} required/>
                        <textarea name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange} required></textarea>
                        <input className="submit" type="submit" value="Envoyer"/>
                    </form>
                </div>
                <div id="contact_details">
                  <h3>Mes Coordonnées</h3>
                  <img src='bitmoji.png' alt='Dohan Bitmoji' loading="lazy"/>
                  <a href="tel:+33761486774"><i className='bx bxs-phone-call'></i> : 07 61 48 67 74</a><br/>
                  <a href="mailto:contact@dohangosselin-kptech.com"><span>@</span> : contact@dohangosselin-kptech.com</a><br/>
                  <i className='bx bxs-hand-up bx-fade-down' ></i>
                </div>             
            </div>           
        );
    }  
}


export default ContactSection;