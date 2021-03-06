import { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
        partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1050 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1050, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
};

class ServicesSection extends Component {
    constructor(props) {
        super(props);
        let initialDeviceType = "";
        if (window.innerWidth<1050) {
            initialDeviceType = "mobile";
        }
        this.state = {
            deviceType: initialDeviceType,
            width: window.innerWidth
        };
    }

    handleResizedScreen = () => {
        if(window.innerWidth<1050){
            this.setState({
                deviceType: "mobile",
                width: window.innerWidth
            });
        }else{
            this.setState({
                deviceType: "",
                width: window.innerWidth
            });
        }
        
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResizedScreen);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResizedScreen);
    }
    
    render() {
        return(                
            <div className="services_section">
                <h2>Mes Services</h2>
                <div className="my_services_details">
                <Carousel
                swipeable={true}                
                draggable={false}
                centerMode={this.state.deviceType !== "mobile" ? true : false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.state.deviceType}>
                    <div className='carousel_service_item'>
                        <img src='dev_web.jpg' alt='d??veloppement web' loading="lazy"></img>
                        <h3>D??VELOPPEMENT / CONCEPTION WEB</h3>
                        <p>
                            D??veloppement de votre site internet de A ?? Z.
                            Site vitrine, boutique en ligne, site de gestion, application web...
                            Un accompagnement tout au long du projet pour r??pondre au mieux ?? vos besoins.
                            H??bergement du site inclu.
                            Langages : ReactJs, HTML, CSS, Java Script, PHP, SQL, Symfony
                        </p>
                        <div className='i_container'>
                            <i className='bx bx-code-alt' ></i><i className='bx bxs-chip'></i>
                        </div>
                    </div>
                    <div className='carousel_service_item'>
                        <img src='social_media.jpg' alt='r??seaux sociaux' loading="lazy"></img>
                        <h3>COMMUNITY MANAGEMENT</h3>
                        <p>
                            Mise place et accompagnement vers le marketing digital sur les r??seaux sociaux.
                            Cr??ation de comptes sur les diff??rents r??seaux sociaux, approvisionnement en publications, conseils pour g??rer ses r??seaux sociaux...
                            Augmentation de votre r??f??rencement.
                        </p>
                        <div className='i_container'>
                            <i className='bx bxs-network-chart' ></i><i className='bx bxl-facebook' ></i><i className='bx bxl-instagram-alt' ></i>
                        </div>
                    </div>
                    <div className='carousel_service_item'>
                        <img src='formation.jpg' alt='formation' loading="lazy"></img>
                        <h3>FORMATION</h3>
                        <p>
                            Envie d'en apprendre plus dans l'informatique ?
                            Formation informatique g??n??rale (utilisation des outils informatiques), bureautique (Windows, Linux, Word, Excel, PowerPoint), d??veloppement (Web, Sites internet, Applications mobiles, Logiciels, Programmation).
                        </p>
                        <div className='i_container'>
                            <i className='bx bx-chalkboard' ></i><i className='bx bxs-badge-check'></i>
                        </div>
                    </div>
                    <div className='carousel_service_item'>
                        <img src='montage.jpg' alt='montage r??paration Hardware' loading="lazy"></img>
                        <h3>ASSISTANCE / R??PARATION / MONTAGE</h3>
                        <p>
                            Besoin d'aide ou vous rencontrez un probl??me informatique ?
                            Assistance probl??mes informatiques (tout type de mat??riel informatique), r??paration et am??lioration ordinateur (PC portable et PC de bureau), Montage ordinateur de bureau (Tour professionelle ou gaming).
                        </p>
                        <div className='i_container'>
                            <i className='bx bxs-help-circle'></i><i className='bx bxs-chip'></i><i className='bx bx-desktop' ></i>
                        </div>
                    </div>
                </Carousel>;
                </div>           
            </div>           
        );
    }  
}
export default ServicesSection;