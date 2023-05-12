import ArrowRight from '../../assets/images/arrowRight.png';
import Integration from '../../assets/images/integration.svg';
import Services from '../../assets/images/services.svg';
import Optimization from '../../assets/images/optimization.svg';

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="products-inner">
          <div className="products-header">
            <div className="section-header-left">
              <h2>Our products</h2>
              <img src={ArrowRight} alt="" />
            </div>
          </div>
          <div className="products-body">
            <div className="product-card">
              <div className="card-header">
                <div className="card-icon">
                  <img src={Integration} alt="" />
                </div>
              </div>
              <div className="card-body">
                <h4>System Integration</h4>
                <p>
                  In today’s digital world, the ability to effectively integrate
                  across different systems, data sources, and channels is
                  fundamental. Indium technologies has a long history of
                  successfully and efficiently integrating a variety of
                  client-based systems
                </p>
                <a href="#">READ MORE</a>
              </div>
            </div>
            <div className="product-card">
              <div className="card-header">
                <div className="card-icon">
                  <img src={Services} alt="" />
                </div>
              </div>
              <div className="card-body">
                <h4>IT Services</h4>
                <p>
                  While you focus on delivering the best products or services
                  you can to your customers, we provide the support you need to
                  keep up with industry demands and emerging trends
                </p>
                <a href="#">READ MORE</a>
              </div>
            </div>
            <div className="product-card">
              <div className="card-header">
                <div className="card-icon">
                  <img src={Optimization} alt="" />
                </div>
              </div>
              <div className="card-body">
                <h4>Process Optimization</h4>
                <p>
                  Improve efficiencies by leveraging methodology and
                  productivity tools. Re-energize workforce management to
                  identify saving opportunities, optimize contacts or enhance
                  front-/back-office productive output
                </p>
                <a href="#">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
