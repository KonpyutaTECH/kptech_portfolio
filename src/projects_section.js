import { Component } from 'react';
import TypeWriter from 'typewriter-effect';


class ProjectsSection extends Component {

    render() {
        return(                
            <div className="projects_section">
                <h2>Dernier Projet</h2>   
                <div className="projects_details">                
                    <a href='https://stikydesign.fr' target="_blank" rel="noreferrer">
                        <div className='project_url'>
                            <i className='bx bx-search search_button_deco'></i>
                            <div className="typeWriterContainer">
                                <TypeWriter 
                                    options={{
                                        strings: ['https://stikydesign.fr'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /> 
                            </div>
                            <i className='bx bxs-pointer bx-fade-down search_button_deco' ></i>                                              
                        </div> 
                    </a>
                    <div className='pc_screen_project_container'>
                        <div className='arrow_container'>
                                <i className='bx bx-down-arrow-alt bx-fade-up scroll_down_arrow' ></i> 
                        </div>                                    
                        <div className="projectVisualPC">                                                
                            <img alt="Stiky Design Website PC"  src="Stiky_Design.jpg" loading='lazy'/>
                        </div>
                    </div>
                    <div className='mobile_screen_project_container'>
                        <div className='arrow_container'>
                                <i className='bx bx-down-arrow-alt bx-fade-up scroll_down_arrow' ></i> 
                        </div>
                        <div className="projectVisualMobile">  
                            <img alt="Stiky Design Website Mobile"  src="Stiky_Design_Mobile.jpg" loading='lazy'/>                        
                        </div>
                    </div>
                    <div className='pc_support'>
                        <div className='support_arm'></div>
                        <div className='support_basement'></div>
                    </div>
                </div>            
            </div>           
        );
    }  
}


export default ProjectsSection;