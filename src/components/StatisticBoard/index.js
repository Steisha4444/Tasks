import React, { Component } from 'react'
import "./style.css" ;

export const StatisticBoard = ({all, readBooks, notReadBooks, onRemoveAll}) =>{
    return(
        <div className="statistic-board">
              <button className="remove-button" onClick={onRemoveAll}>Remove all</button>
            <div className="statistic-data">
          
            <br></br>
                <span className="all">All: {all}</span>
                <span className="readBooks"> Read: { readBooks}</span>
                <span className=" notReadBooks">Not read: { notReadBooks}</span>
               
            </div>
          
        </div>
    );
};
