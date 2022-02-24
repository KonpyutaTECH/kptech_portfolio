import { Component } from 'react';
import { Radar, RadarChart, PolarGrid, 
  PolarAngleAxis, ResponsiveContainer} from 'recharts';

const data = [
    {
        subject: "Front-end",
        A: 210,
        B: 240,
        C: 250
    },
    {
        subject: "ReactJS",
        A: 200,
        B: 240,
        C: 250
    },
    {
        subject: "SQL",
        A: 230,
        B: 240,
        C: 250
    },
    {
        subject: "Back-end",
        A: 200,
        B: 240,
        C: 250
    },
    {
        subject: "Symphony",
        A: 160,
        B: 240,
        C: 250
    },
    {
        subject: "CSS3",
        A: 210,
        B: 240,
        C: 250
    }
  
];

class SkillsSection extends Component {    
    render() {
        return(                
            <div className="skills_section">             
                <h2>Mes Compétences</h2> 
                <div className='tableContainer'>          
                    <div className='bodyCells'>
                        <div className='radarChartContainer'>
                            <ResponsiveContainer>
                                <RadarChart fill="white" data={data}>                    
                                    <Radar dataKey="B" fill="#868686"  isAnimationActive={false}/>
                                    <PolarGrid stroke="#1d1d1d"/>
                                    <Radar dataKey="A" fill="#51007d" fillOpacity={0.9} />
                                    <Radar dataKey="C" fill="#00000000"  isAnimationActive={false}/>     
                                    <PolarAngleAxis dataKey="subject"  />               
                                </RadarChart>
                            </ResponsiveContainer>  
                        </div>
                        
                    </div>                
                    <p className='bodyCells'>
                        À la sortie de mon DUT Informatique, j'ai acquis de nombreuses compétences dans le développement informatique et principalement en développement web.<br/>
                        J'ai pu expérimenté durant mon parcours professionel en entreprise ainsi qu'en tant que Freelance de nombreuses téchnologies du développement web.<br/><br/>
                        Ainsi, j'ai réalisé plusieurs projets de sites web avec mes connaissances en HTML, CSS et JS pour la partie Front-end et en PHP, SQL et Symfony pour la partie Back-end.
                        Mes connaissances dans les langages de programmation web et dans les différents Framework me permettent d'être actuellement développeur web Full-stack.<br/><br/>
                        Durant mon expérience en entreprise, j'ai aussi été amené à devoir maitriser les environnements de développement WinDev, WebDev et SQL Management Studio.
                    </p>  
                </div>    
            </div>           
        );
    }  
}

export default SkillsSection;