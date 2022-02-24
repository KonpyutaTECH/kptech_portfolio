import './App.css';

import SideNavBar from './side_navbar.js';
import HomeBanner from './home_banner.js';
import AboutSection from './about_section.js';
import SkillsSection from './skills_section.js';
import ProjectsSection from './projects_section.js';
import ServicesSection from './services_section.js';
import ModalWindow from './modal_window.js';
import ContactSection from './contact_section.js';
import CopyrightsSection from './copyrights_section.js';

import { Component } from 'react';
import $ from 'jquery';

class App extends Component{
  state = { loading: true }; 
  componentDidMount(){ // this simulates an async action, after which the component will render the content 
    demoAsyncCall().then(() => this.setState({ loading: false })); 
  } 
  render(){
    const { loading } = this.state; 
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return null; // render null when app is not ready 
    } return (
      <div className="App">
        <header className="App-header">
          <SideNavBar />
        </header>
        <section id="Home">
          <HomeBanner />
        </section>
        <section id="About">          
          <AboutSection />
        </section>
        <section id="Skills">          
          <SkillsSection />
        </section>
        <section id="Work">        
          <ProjectsSection />
        </section>  
        <section id="Services">          
          <ServicesSection />
        </section> 
        <ModalWindow />   
        <section id="Contact">          
          <ContactSection />
        </section>
        <footer id="copyrights">          
          <CopyrightsSection />
        </footer>
      </div>
    );
  }
  /*  */  
}
function demoAsyncCall() { 
  return new Promise((resolve) => setTimeout(() => resolve(), 2500)); 
}
function elementInViewport(el) {
  var top = el.offsetTop;
  var height = el.offsetHeight;

  while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
  }

  var middle=top;

  if(window.innerWidth<1050){
    middle += (height/5);
  }else{
    middle += ((height/3) * 2);
  }

  return (
      (middle >= window.pageYOffset && middle <= (window.pageYOffset + window.innerHeight)) || 
      (top <= window.pageYOffset)
  );
}

window.addEventListener('scroll', () => {
  var appearelements = $("section:not(#Home, #Work) div");
  var x;
  for (x = 0; x < appearelements.length; x++) {
      var showelement = appearelements[x];
      if(elementInViewport(showelement)){
              showelement.style.opacity='1';
              showelement.style.transform='scale(1)';
          
      }
  } 
});

export default App;

