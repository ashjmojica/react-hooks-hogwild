import React from "react";
import HogCard from "./HogCard";

function HogCollection({hogs}) {
    const hogCards = hogs.map(hog => {
        return (
        <HogCard key = {hog.name} 
        name = {hog.name}
        specialty = {hog.specialty}
        greased = {hog.greased}
        weight = {hog.weight}
        medal = {hog["highest medal achieved"]}
        image = {hog.image}
        
        />
    
        )
    })
    return (
        <div className="ui three stackable cards">
            {hogCards}
        </div>
    )
}


export default HogCollection;