import React, { Component } from 'react';
import TypeWriter from 'typewriter-effect';


class HomeBanner extends Component {
    
    render() {
        return (
            <div id="banner">
                <div className="firstWords">                    
                    <h1 className='name'>
                        <TypeWriter 
                            onInit={(typewriter) => {
                                typewriter.typeString("Dohan<br/>Gosselin").start();
                            }}
                        />                           
                    </h1><br/>                    
                    <h1 className='class'>
                        <TypeWriter 
                            onInit={(typewriter) => {
                                typewriter.typeString("développeur web").start();
                            }}
                        />                        
                    </h1>
                    <div className="intro">
                        <p>
                            Développeur Front-End / ReactJS spécialiste<br/>
                            Prêt à intégrer votre projet web !
                        </p>  
                    </div>
                    <a href="#About" className="button"><span>Découvrir</span></a>
                    <i className='bx bx-down-arrow-alt bx-fade-up discover-arrow' ></i>                                     
                </div> 
            </div>
            
        );
    }  
}

export default HomeBanner;