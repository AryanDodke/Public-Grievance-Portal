// import React from 'react';
// import '../css/Home.css'

// function Home() {
//   return (
//     <section id="home">
//       		<div class="container">
//     			<div class="row">
//     				<div class="col-md-offset-2 col-md-8">
//     					<h1 class="wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">Connect Common People To<span> Government</span></h1>
//     					<div class="element">
//                             <div class="sub-element">Welcome To Public Grievance Portal.</div>
//                             <div class="sub-element">Please Login/SignUp To Track Or Register Grievances.</div>
//                             <div class="sub-element">Feel Free To Visit Our Other Services In Other Website Sections.</div>
//                         </div>
//     					<a data-scroll href="/about" class="btn btn-default wow fadeInUp" data-wow-offset="50" data-wow-delay="0.6s">GET STARTED</a>
//     				</div>
//     			</div>
//     		</div>
//     </section>
//   );
// }

// export default Home;

import React from 'react';
import '../css/Home.css'

function Home() {
  return (
    <section id="home">
      <div class="container">
        <div class="row">
          <div class="col-md-offset-2 col-md-8">
            <h1 class="wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">
              Connect Common People To<span> Government</span>
            </h1>
            <div class="element">
              <div class="sub-element">
                Welcome To Public Grievance Portal.
              </div>
              <div class="sub-element">
                Please Login/SignUp To Track Or Register Grievances.
              </div>
              <div class="sub-element">
                Feel Free To Visit Our Other Services In Other Website Sections.
              </div>
            </div>
            <div class="button-container wow fadeInUp" data-wow-offset="50" data-wow-delay="0.6s">
              <a data-scroll href="/about" class="btn btn-default">GET STARTED</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

