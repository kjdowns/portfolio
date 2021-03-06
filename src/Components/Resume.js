import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var learningmessage = this.props.data.learningmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <div key={skills.name} className="tech"><img alt="" width="100" height="100" src={'/images/icons/' + skills.icon}></img><h5>{skills.name}</h5></div>
      })
      var learningskills = this.props.data.learningskills.map(function(learningskills){
        var className = 'bar-expand '+learningskills.name.toLowerCase();
        return <div key={learningskills.name} className="tech"><img alt="" width="100" height="100" src={'/images/icons/' + learningskills.icon}></img><h5>{learningskills.name}</h5></div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      {/* <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div> */}



      <div className="row skill" >

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   {/* <ul className="skills"> */}
					  {skills}
					{/* </ul> */}
				</div>
			</div>
      </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Learning</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{learningmessage}
            </p>

				<div className="bars">
				   {/* <ul className="skills"> */}
					  {learningskills}
					{/* </ul> */}
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
