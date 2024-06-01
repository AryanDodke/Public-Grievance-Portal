import React from 'react';
import '../css/About.css'
function About() {
  return (

    <section id="about">
      <div class="container">
				<div class="row">
					<div class="col-md-12">
    					<h2 class="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">Provided Services<span> Are As Follows</span></h2>
    				</div>
					<div class="col-md-4 col-sm-4 col-xs-12 wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.6s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-left">
									<i class="fa fa-mobile"></i>
								</div>
								<h3 class="media-heading">Consumer Login</h3>
							</div>
							<div class="media-body">
								<p>Users can securely log in using their unique credentials. This will ensures that only authorized individuals can access and submit their complaints, helping maintain the privacy and security of their personal information.</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-offset="50" data-wow-delay="0.9s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-left">
									<i class="fa fa-comment-o"></i>
								</div>
								<h3 class="media-heading">Consumer SignUp</h3>
							</div>
							<div class="media-body">
								<p>New users can easily create an account by providing their basic information. This allows them to participate in the grievance resolution process, track their complaints, and stay informed about updates related to their submissions.</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-sm-4 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
						<div class="media">
							<div class="media-heading-wrapper">
								<div class="media-object pull-left">
									<i class="fa fa-check"></i>
								</div>
								<h3 class="media-heading">Track/Register Complaints </h3>
							</div>
							<div class="media-body">
								<p>Once logged in, admin can register and track their complaints efficiently. The Users can submit details about their Grievances. The tracking feature enables admin to monitor the progress of their complaints in real-time, ensuring transparency and accountability in the resolution process.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
    </section>
	
  );

}

export default About;