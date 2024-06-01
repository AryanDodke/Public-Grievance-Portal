import React from 'react';
import '../css/Team.css'
function Team() {
  const teamMembers = [
    {
      name: 'Aryan Dodke',
      college: 'Vishwakarma Institute Of Technology',
      year: 'Third Year, CS-B, GRP-41',
      image: require('../assets/aryan.png'),
    },
    {
      name: 'Apoorva Holkar',
      college: 'Vishwakarma Institute Of Technology',
      year: 'Third Year, CS-B, GRP-41',
      image: require('../assets/apoorva.png'),
    },
    {
      name: 'Tejas Hande',
      college: 'Vishwakarma Institute Of Technology',
      year: 'Third Year, CS-B, GRP-41',
      image: require('../assets/tejas.png'),
    },
    {
      name: 'Pranav Jain',
      college: 'Vishwakarma Institute Of Technology',
      year: 'Third Year, CS-B, GRP-41',
      image: require('../assets/pranav.png'),
    },
  ];

  return (
    <section id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">
              <span>OUR</span> TEAM
            </h2>
          </div>
          {teamMembers.map((member, index) => (
            <div
              className={`col-md-3 col-sm-6 col-xs-12 wow fadeIn ${index % 2 === 0 ? '1.3s' : '1.6s'}`}
              data-wow-offset="50"
              data-wow-delay={index % 2 === 0 ? '1.3s' : '1.6s'}
              key={index}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <div className="team-wrapper">
                <img
                  src={member.image}
                  className="img-responsive"
                  alt={`team img ${index + 1}`}
                  style={{ width: '100px', height: '100px' }}
                />
                <div className="team-des">
                  <h4>{member.name}</h4>
                  <span>{member.college}</span>
                  <p>{member.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
