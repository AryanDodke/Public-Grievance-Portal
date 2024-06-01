import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">
              CONTACT <span>PMC</span>
            </h2>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.9s">
            <form action="#" method="post">
              <label htmlFor="fullname">NAME</label>
              <input name="fullname" type="text" className="form-control" id="fullname" />
              
              <label htmlFor="email">EMAIL</label>
              <input name="email" type="email" className="form-control" id="email" />
              
              <label htmlFor="message">MESSAGE</label>
              <textarea name="message" rows="4" className="form-control" id="message"></textarea>
              
              <input type="submit" className="form-control" />
            </form>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
            <address>
              <p className="address-title">OUR ADDRESS</p>
              <span>PMC Main Building, Near. Mangla Theatre, Shivajinagar, Pune- 411 005</span>
              <p><i className="fa fa-phone"></i> +020-25501000</p>
              <p><i className="fa fa-envelope-o"></i> info@punecorporation.org</p>
              <p><i className="fa fa-map-marker"></i> PMC Main Building, Near. Mangla Theatre, Shivajinagar, Pune- 411 005</p>
            </address>
            <ul className="social-icon">
              <li><h4>OUR SOCIALS</h4></li>
              <li><a href="https://www.facebook.com/PMCPune/" className="fa fa-facebook"></a></li>
              <li><a href="https://twitter.com/pmcpune" className="fa fa-twitter"></a></li>
              <li><a href="https://www.youtube.com/pmccare" className="fa fa-youtube"></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
