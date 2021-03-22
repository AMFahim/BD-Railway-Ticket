import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  return (
    <div className="style">


      <div className="row">
        <div className="column">
          <div className="card">
            <div className="container" style={{ padding: '40px' }}>
              <h4><b>ONE TIME TICKET </b></h4>
              <Link to="/signin"><button className="btn btn-warning for-btn">BUY NOW</button></Link>
              <br />
              <br />
              <h2>$100</h2>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="container" style={{ padding: '40px' }}>
              <h4><b>ONE DAY PASS</b></h4>
              <Link to="/signin"><button className="btn btn-warning for-btn">BUY NOW</button></Link> 
              <br />
              <br />
              <h2>$500</h2>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="container" style={{ padding: '40px' }}>
              <h4><b>MONTHLY PASS</b></h4>
              <Link to="/signin"><button className="btn btn-warning for-btn">BUY NOW</button></Link> 
              <br />
              <br />
              <h2>$1500</h2>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="container" style={{ padding: '40px' }}>
              <h4><b>ANNUL <br />
            PASS</b></h4>
              <Link to="/signin"><button className="btn btn-warning for-btn">BUY NOW</button></Link>
              <br />
              <br />
              <h2>$9000</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;