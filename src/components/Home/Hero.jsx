import Main from '../../assets/images/main.jpg';
import Shape from '../../assets/images/shape.png';
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src={Main} alt="" />
      </div>
      <div className="hero-bg"></div>
      <div className="hero-inner">
        <div className="container">
          <div className="hero-text">
            <div className="hero-text-inner">
              <h2>DISCOVER A WORLD OF OPPORTUNITIES</h2>
              <p>
                We empower a diverse IT service-oriented workforce where strong
                individuals are unified by a clear common purpose – to deliver
                excellence and high level of customer satisfaction.
              </p>
              <a href="#" className="link-btn">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="shape">
        <img src={Shape} alt="" />
      </div>
    </div>
  );
};

export default Hero;
