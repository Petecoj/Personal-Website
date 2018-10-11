import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={"https://cdn.filestackcontent.com/2ZikOAzjQwaEfh8cm72l"}
            colour="#FFFFFF"
            title="Sponsored"
            link="https://frozen-cove-20109.herokuapp.com/#/home"
            timeperiod="2017 - ???"
            subtitle="A Full-Stack"
          />
          <ExperienceUnit
            logo={"https://cdn.filestackcontent.com/ZI8BLg3TxCvgriYkkDg9"}
            colour="#20DC6B"
            title="Gilda's Club Twin Cities Volunteer Portal"
            link="https://shielded-forest-68393.herokuapp.com/#/home"
            timeperiod="2017"
            subtitle="The Gilda’s Club Twin Cities Volunteer Portal 
            is a web application designed to simplify and streamline
             the process for volunteers to sign up for volunteer opportunities 
             with Gilda’s Club Twin Cities. The app has three user access 
             levels, Volunteers, Managing Volunteers, and Administrators."
          />
          <ExperienceUnit
            logo={"https://cdn.filestackcontent.com/ZI8BLg3TxCvgriYkkDg9"}
            colour="#20DC6B"
            title="Pete's MN reality"
            link="https://intense-shelf-45035.herokuapp.com/#!/home"
            timeperiod="2017"
            subtitle="A single page application built in AngularJS that 
            allows users to post homes for rent or sale.  Users can also browse homes
            available."
          />
          <ExperienceUnit
            logo={"https://cdn.filestackcontent.com/YJJUt6FgSwGPS1MlZXvf"}
            colour="#312F31"
            title="MPLS Dog Kennel"
            link="https://intense-journey-22798.herokuapp.com/#!/dashboard"
            timeperiod="2016"
            subtitle=""
          />
           <ExperienceUnit
            logo={"https://cdn.filestackcontent.com/P0XKkKTSuivKL9MJ39AA"}
            colour="#312F31"
            title="Mean To Do List"
            link="https://desolate-depths-43671.herokuapp.com/"
            timeperiod="2016"
            subtitle="A MEAN stack CRUD app to help people manage tasks"
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
