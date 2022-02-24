import React, { Component } from 'react';
import logo from './Media/Logo_BlackBack.png';
/*import $ from 'jquery';*/

class TopLogo extends Component{
    render(){
        return(
            <a className="nav_logo" href="#Home">
                <img src={logo} alt="Logo KPTech"></img>
                <p className="MyName">Dohan</p>                
                <p className="DevWeb">Développeur Web</p>
            </a>
        );
    }
} 
function dropDown() {  
        var hideNavBar = document.getElementById("hideNavBar");  
        var dropDownIcon = document.getElementById("dropDownIcon");

        if(hideNavBar.classList.contains("show")===false){
            setTimeout(function() {hideNavBar.classList.toggle("animate")}, 1);       
            hideNavBar.classList.toggle("show");
            dropDownIcon.classList.replace("bx-menu","bx-x");                 
        }else{   
            setTimeout(function() {hideNavBar.classList.toggle("show")}, 1000); 
            hideNavBar.classList.toggle("animate");
            dropDownIcon.classList.replace("bx-x","bx-menu");
        }     
}
class DropDownButton extends Component {
    render() {
        return (<button onClick={() => dropDown()} className="dropbtn"><i id="dropDownIcon" className='bx bx-menu'></i></button>);
    }

    
        
}

class MenuItems extends Component {
    constructor(props){
        super(props);
        this.isResponsive=false;
    }
    componentDidMount(){
        this.isResponsive= this.props.dropDownA;
    }
    componentDidUpdate(){
        this.isResponsive=this.props.dropDownA;
    }
    shouldComponentUpdate(nextProps,nextState){
        // your condition if you want to re-render every time on props change
        return true;
    }

    render() {
        if(this.isResponsive==="true"){
            return (
                <span id="myDropdown" className="dropdown-content">
                    <a onClick={() => dropDown()} href="#About">&Agrave; Propos</a>
                    <a onClick={() => dropDown()} href="#Skills">Compétences</a>
                    <a onClick={() => dropDown()} href="#Work">Projets</a>
                    <a onClick={() => dropDown()} href="#Services">Services</a>       
                    <a onClick={() => dropDown()} href="#Contact">Contact</a>
                </span>
            );

        }else{
            return (
            <span id="myDropdown" className="dropdown-content">
                <a href="#About">&Agrave; Propos</a>
                <a href="#Skills">Compétences</a>
                <a href="#Work">Projets</a>
                <a href="#Services">Services</a>       
                <a href="#Contact">Contact</a>
            </span>
        );
        }
        
    }
}

class SocialBottom extends Component{
    render(){
        return(
            <span className="SocialMedia">
                <a rel='noreferrer' href="https://www.linkedin.com/in/dohan-gosselin-a6b4b8159/" target="_blank"><i className='bx bxl-linkedin'></i></a>
                <a rel='noreferrer' href="https://www.instagram.com/leaky_974/?hl=fr" target="_blank" ><i className='bx bxl-instagram'></i></a>
            </span>
        );
    }
} 


class SideNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    handleResizedScreen = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    componentDidMount() {
        window.addEventListener('resize', this.handleResizedScreen);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizedScreen);
    }

    render() {
        if(this.state.width>1000 && this.state.height<this.state.width){
            return (
                <nav className="sideNavbar"> 
                    <TopLogo /> 
                    <MenuItems dropDownA="false"/>
                    <SocialBottom />           
                </nav>
            );
        }else{
            return (
                <span>
                    <img src={logo} alt="Logo KPTech" className="responsiveLogo"/>
                    <DropDownButton />
                    <nav id="hideNavBar" className="responsiveNavbar">                    
                        <TopLogo /> 
                        <MenuItems dropDownA="true"/>
                        <SocialBottom />   
                    </nav>
                </span>
            );
        }
        
    }  
}

export default SideNavBar;