import React, {useState} from "react";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people,setPeople]= useState([
  {
    name:"Steve jobs",
    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Steve_Jobs_Headshot_2010-CROP.jpg/640px-Steve_Jobs_Headshot_2010-CROP.jpg"
  },
  {
    name:"Mark zuckerberg",
    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Mark_Zuckerberg_F8_2019_Keynote_%2847847080001%29_%28cropped%29.jpg/640px-Mark_Zuckerberg_F8_2019_Keynote_%2847847080001%29_%28cropped%29.jpg"
  }
]);
  // BAd 
  //const people =[];
  //people.push('sam','yash')
  //Good
  //setPeople(['sam','yash'])
  //
  return (
    <div>
      <h1>Tinder cards</h1>  

      {people.map(person => (
        <TinderCard
        className="swipe"
        key={person.name}
        preventSwipe={[['up','down']]}
        >
          <div 
          style ={{backgroundImage: `url(${person.url})`,
          backgroundSize: "cover",
              backgroundPosition: "center",
              width: "300px",
              height: "400px",
              display: "flex",
              alignItems: "flex-end",
              padding: "20px",
              color: "white",
              borderRadius: "20px",
              boxShadow: "0 18px 50px rgba(0, 0, 0, 0.3)",
              margin: "20px auto"
        
        }}
          className="card">
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}    
    </div>
  );
}
export default TinderCards;