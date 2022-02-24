import { Component } from 'react';


class AboutSection extends Component {
    render() {
        return(
            <div className="presentation">                
                <h2>À Propos de Moi</h2>
                <div className='tableContainer'>
                    <div className='bodyCells'>
                        <p>
                            Diplomé d'un bac +2 (DUT) en Informatique.<br/>
                            Passioné depuis toujours par les metiers du web et les nouvelles technologies.<br/><br/>
                            J'ai eu l'opportunité de travailler dans de nombreux domaines en rapport avec le développement et la programmation. 
                            Cela m'a permis d'acquérir de l'expérience et des compétences dans de nombreuses technologies.
                            J'ai donc décidé de me lancer dans le monde du Freelance et ainsi proposer mes services et compétences en tant que développeur web.<br/><br/>
                            Je suis là pour répondre le plus efficacement possible et vous apporter des solutions pertinantes et adaptées à vos besoins.
                        </p>
                    </div>                    
                    <div className='bodyCells techno_boxincons'>
                        <i title="Développement Web" className='bx bx-code-alt'></i>
                        <i title="ReactJS" className='bx bxl-react' ></i>
                        <i title="JavaSrcipt" className='bx bxl-javascript' ></i>
                        <i title="HTML" className='bx bxl-html5' ></i>
                        <i title="CSS" className='bx bxl-css3' ></i>
                        <i title="PHP" className='bx bxl-php' ></i>
                        <i title="VSCode" className='bx bxl-visual-studio'></i>
                        <i title="Git" className='bx bxl-git' ></i>
                        <i title="GiHub" className='bx bxl-github' ></i>
                        <i title="jQuery" className='bx bxl-jquery lastIcon' ></i>
                    </div>
                </div>                
            </div>           
        );
    }  
}

export default AboutSection;