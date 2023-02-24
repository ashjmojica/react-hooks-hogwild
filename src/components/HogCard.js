import React, { useState } from "react";


function HogCard({ name, specialty, greased, weight, medal, image }) {
const [isClicked, setisClicked] = useState(false);
function handleClick() {
    setisClicked(isClicked => !isClicked);
}

return (
<div className="ui card two wide column pigTile" onClick = {handleClick}>
<h2>{name}</h2>
<img src= {image} alt={name}></img>

{isClicked ? (
<div>
    <li>Specialty: {specialty}</li>
    <li>Weight: {weight}</li>
    <li>{greased ? "Is Greased" : "Is not Greased"}</li>
    <li>Highest Medal Achieved: {medal.toUpperCase()}</li>
</div> 
) : null}
</div>
);
}


export default HogCard;


