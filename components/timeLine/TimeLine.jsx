import React from 'react'

import { TimeLineItem } from './TimeLineItem'

export function TimeLine() {
  return (
    <div>
      <TimeLineItem timeDelay={0.1} date={2002} emojis="🇱🇧" content="I was born and raised in my home country Lebanon" next={true} future={false}/>
      <TimeLineItem timeDelay={0.2} date={2005} emojis="🏫" content="I attended DISB German School up until grade 9" next={true} future={false}/>
      <TimeLineItem timeDelay={0.3} date={2017} emojis="🇨🇦" content="I moved to Canada with my family" next={true} future={false}/>
      <TimeLineItem timeDelay={0.4} date={2020} emojis="👨‍🎓" content="Graduated from Iroquois Ridge High School" next={true} future={false}/>
      <TimeLineItem timeDelay={0.5} date={2020} emojis="🏫" content="Enrolled in the Computer Science program at York University" next={true} future={false}/>
      <TimeLineItem timeDelay={0.6} date={2023} emojis="👨‍🎓" content="Graduated with BSc. Computer Science degree?" next={true} future={true}/>
      <TimeLineItem timeDelay={0.7} date={"----"} emojis="👨‍💻" content="Got my first job As a Developer?" next={false} future={true}/>
    </div>
  )
}
