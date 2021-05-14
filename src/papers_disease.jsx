import React, { Component } from 'react';
import Paper from './cards/paper.jsx';
import papersInfo from './data/papers_info_disease.js'

class Papers_disease extends Component {
  
  // A simple function that cycles through the projects and creates a card for each.
  getPapers = () => {
    let papersList = [];
    for (var key in papersInfo) {
      papersList.push(
        <Paper
          title={papersInfo[key].title}
          authors={papersInfo[key].authors} 
          publication={papersInfo[key].publication}
          date={papersInfo[key].date}
          link={papersInfo[key].link}
        />
      )
    }
    return(
      <ul className="list-unstyled pull-left">
        {papersList}
      </ul>
    )
  }

  render() {
    return (
      <div id="papers_disease">
        <h2 className="title">Diseases</h2>
        {this.getPapers()}
      </div>
    );
  }
}

export default Papers_disease;
