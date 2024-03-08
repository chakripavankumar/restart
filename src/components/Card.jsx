 import React from "react";

  const Card= ({ name, description , socialMedia,interests})=>{
     return(
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                {socialMedia.linkedin && <a href={socialMedia.linkedin} target="./www.google.com"></a>}
                {socialMedia.Twitter &&  <a href={socialMedia.Twitter} target="heyyy.com"></a>}
            </div>
            <div>
                <h3>{interests}</h3>
            </div>
        </div> 
        
     )
  }
   export default Card;