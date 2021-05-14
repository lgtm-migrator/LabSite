import React, { Component } from 'react';
import Paper from './cards/paper.jsx';
// import papersInfo from './data/papers_info.js'

class Papers extends Component {
  
  // A simple function that cycles through the projects and creates a card for each.
  getPapers = () => {
    // let papersList = [];
    // for (var key in papersInfo) {
    //   papersList.push(
    //     <Paper
    //       title={papersInfo[key].title}
    //       authors={papersInfo[key].authors} 
    //       publication={papersInfo[key].publication}
    //       date={papersInfo[key].date}
    //       link={papersInfo[key].link}
    //     />
    //   )
    // }
    // return(
    //   <ul className="list-unstyled pull-left">
    //     {papersList}
    //   </ul>
    // )
  }

  render() {
    return (
      <div id="papers">
        <h2 className="title">Papers</h2>
        {this.getPapers()}
      </div>
    );
  }
}

export default Papers;
