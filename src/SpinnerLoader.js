import React from 'react';

const SpinnerLoader = (props)=>{

    return(

      
           
            <div className="ui active dimmer">
            <div className="ui text loader">{props.msg}</div>
            </div>
            
          
       

    )



}


SpinnerLoader.defaultProps ={
    msg:'Loading ....'
}

export default SpinnerLoader;