import './seasonDisplay.css';
import React from 'react';


const seasonConfig = {
    summer:{
        text:'Lets hit the beach',
        iconName:'sun'
    },
    winter:{
        text:'Burr, it is Chilly',
        iconName:'snowflake'
    }
}

//<i class={`${icon} icon`}></i>

const SeasonsDsiplay = (props)=>{
    const season = getSeason(props.lat, new Date().getMonth())
    // console.log(seasonConfig[season]); //{text,iconName}
    const {text, iconName} = seasonConfig[season];


    
    return(


        <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName} icon massive`}></i>
            <h1>{text}</h1>
        <i className={`icon-right ${iconName} icon massive`}></i>
        </div>
    )
}


const getSeason=(lat, month)=>{

   if(month>2 && month<9){
      return  lat > 0 ? 'summer':'winter';
   } else{
    return  lat > 0 ? 'winter': 'summer';
   }




}
export default SeasonsDsiplay;