import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import zomatoLogo from '../../assets/images/experience/zomato-logo.svg'
import fitsoLogo from '../../assets/images/experience/fitso-logo.jpg'
import kayakoLogo from '../../assets/images/experience/kayako-logo-2.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={"https://dewiskbohv5c1.cloudfront.net/assets/logo-primefullwhite-eb279ada1133a6ee7df866998ef05916.svg"}
            colour='#00ACB0'
            title='Prime'
            link='https://primeacademy.io/'
            timeperiod='2018'
            subtitle='Learned the ins and outs of software development and
              built various features including a completely new web application for a client.'
          />
        
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
