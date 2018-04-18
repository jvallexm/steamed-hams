import React, { Component } from 'react';
import './App.css';

const initialize = () =>{
  
  return   [{name: 1, alt: "I hope you're prepared for an unforgettable luncheon"},
            {name: 2, alt: "Oh, ye gods! My roast is ruined"},
            {name: 3, alt: "But what if... I were to purchase fast food and disguise it as my own cooking?"},
            {name: 4, alt: "Ho-Ho-Ho-Ho-Ho. Delightfully devilish Seymour"},
            {name: 5, alt: "Isometric exercise -- care to join me?"},
            {name: 6, alt: "Uh... oh! That isn't smoke it's steam. Steam from the steamed clams we're having"},
            {name: 7, alt: `Oh, no, I said "Steamed Hams" that's what I call hamburgers`},
            {name: 8, alt: `Well I'm from Utica and I've never heard anyone use the phrase "Steamed Hams"`},
            {name: 9, alt: "Oh, not in Utica, no, it's an Albany expression"},
            {name: 10, alt: `Yes, and you call them "Steamed Hams" despite the face that they are obviously grilled`},
            {name: 11, alt: "Good lord! What's going on in there? Aurora borealis"},
            {name: 12, alt: "Aurora Borealis!? At this time of year at this time of day in this part of the country localized entirely within your kitchen?"},
            {name: 13, alt: "Yes"},
            {name: 14, alt: "May I see it?"},
            {name: 15, alt: "No"},
            {name: 16, alt: "Well, Seymour, you are an odd fellow but I must say, you steam a good ham"}];
}

class App extends Component{

  state = {
     pictures: initialize(),
     points: 0,
     clickedPix: [],
     topScore: 0,
     message: "Click on an image to earn points, but don't click on any more than once!"
  };

  click(pic){

    let clickedPix = this.state.clickedPix;
    let points     = this.state.points;
    let message    = this.state.message;
    let topScore   = this.state.topScore;

     if(this.state.clickedPix.includes(pic) && this.state.points < 16) {
       
       clickedPix = [];
       points     = 0;
       message    = "Incorrect Guess!";
       
     } else if (this.state.points === 16){
       
       
       
     } else {
       
       clickedPix.push(pic);
       points++;
       message = "Correct!";
       if(points > topScore)
          topScore++;
       
     }
    
     //console.log(this.state.clickedPix);
    
     if(points === 16){
       
       this.setState({message: "You win!", topScore: topScore , points: points});
       
     } else {
       
       this.shuffle();
       this.setState({message: message, clickedPix: clickedPix, points: points, topScore: topScore});
       
     }
  }
  shuffle(){ 
     let oldPix = this.state.pictures;
     let newPix = [];
     while(oldPix.length > 0){
       let roll = Math.floor(Math.random() * oldPix.length);
       newPix.push(oldPix.splice(roll,1)[0]);
     }
    //console.log(newPix);
    this.setState({pictures: newPix});
  };
  render(){
    return(
      <div id="main">
        <nav className="row text-center container-fluid">
          <div className="col-sm-3">
              <h2>Points: {this.state.points}</h2>
          </div>
          <div className="col-sm-6">
              <h1>Steamed Hams</h1>
              <h5>But It's My Homework</h5>
          </div>
          <div className="col-sm-3">
              <h2>Top Score: {this.state.topScore}</h2>
          </div>
        </nav>
       
        <main className="text-center container-fluid">
            <div className="row">
                <div className="col-sm-12">
                   <div id="message">{this.state.message}</div>
                </div>
                {this.state.pictures.map((i,ind) => 
                      <div className="col-sm-3" 
                           key={"picture-" + ind}
                           onClick={()=>this.click(i)}>
                                       <div className="click-div">
                                          <img alt   = {i.alt} 
                                               title = {i.alt} 
                                               src   = {`/assets/images/${i.name}.jpg`}/>
                                       </div>
                      </div>)}
            </div>
        </main>
        <div className="sticky">
            {this.state.message !== "Click on an image to earn points, but don't click on any more than once!" ?
            <img alt = "Result" src={this.state.message==="Correct!"?"/assets/images/ho.jpg":"/assets/images/seymour.jpg"}/>
            : ""}
            <h4>Points: {this.state.points}</h4>
            <h4>Top Score: {this.state.topScore}</h4>
        </div>
      </div>
     )
  }

}

export default App;
