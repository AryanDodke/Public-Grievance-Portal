import React from 'react';
import '../css/Footer.css'

function Footer() {
  return (
    <footer id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">
              PMC &copy; Copyright © 2023 Pune Municipal Corporation. All rights reserved.
            </p>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12 text-left">
                <p><i className="fa fa-phone"></i><span> Phone:  : +020-25501000</span></p>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                <p><i className="fa fa-envelope-o"></i><span> Email</span><a href="mailto:info@punecorporation.org"> info@punecorporation.org</a></p>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12 text-right">
                <ul className="social-icon">
                  <li><span>Meet us on</span></li>
                  <li><a href="https://www.facebook.com/PMCPune/" className="fa fa-facebook"></a></li>
                  <li><a href="https://twitter.com/pmcpune" className="fa fa-twitter"></a></li>
                  <li><a href="https://www.instagram.com/pmc_pune/" className="fa fa-instagram"></a></li>
                  <li><a href="https://www.youtube.com/pmccare" className="fa fa-youtube"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;