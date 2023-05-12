import MissionImg from '../../assets/images/mission.jpg';
import ArrowLeft from '../../assets/images/arrowLeft.png';
import MissionVison from '../../assets/images/mission-vision.svg';
import Approach from '../../assets/images/approach.svg';

const Mission = () => {
  return (
    <div className="mission">
      <div className="container">
        <div className="mission-inner">
          <div className="mission-img">
            <img src={MissionImg} alt="" />
          </div>
          <div className="mission-text">
            <div className="section-header-right">
              <h2>We build future</h2>
              <img src={ArrowLeft} alt="" />
            </div>
            <div className="mission-paragraf">
              <div className="paragraf-icon">
                <img src={MissionVison} alt="" />
              </div>
              <div className="paragraf-text">
                <h4>Our Mission & Vision </h4>
                <p>
                  As experienced professionals in the field of software
                  development, user experience, and marketing performance, we
                  are aware of the hard work, dedication, and overall diligence
                  required to prosper in modern-day business.
                </p>
              </div>
            </div>
            <div className="mission-paragraf">
              <div className="paragraf-icon">
                <img src={Approach} alt="" />
              </div>
              <div className="paragraf-text">
                <h4> Our Approach </h4>
                <p>
                  As a result, we offer our clients with the development of CRM
                  cloud systems, bespoke website development and design, project
                  and R&D management, custom development, and system
                  integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
