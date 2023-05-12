import ArrowRight from '../../assets/images/arrowRight.png';
import WhoVR from '../../assets/images/whoWeAre.jpg';
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <div className="about-us-inner">
          <div className="about-us-text">
            <div className="section-header-left">
              <h2>Who we are</h2>
              <img src={ArrowRight} alt="" />
            </div>
            <h3>Technology investments as a differentiator</h3>
            <p>
              No forced partnership technology here. We focus on the right
              solution to drive our clients’ business forward and employ a
              technology-agnostic approach for all needed stages of the activity
              cycle, allowing access to current, robust, and advanced solutions.
              Paramount to this is ensuring the security and compliant use of
              all information. In the end, it’s not just technology; we ensure
              our methodologies, staff, industry knowledge, and governance align
              with the technology to drive the right client results.
            </p>
            <a href="#" className="link-btn">
              Get started
            </a>
          </div>
          <div className="about-us-img">
            <img src={WhoVR} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
