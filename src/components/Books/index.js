import React from "react";
import { Book } from "../Book";
import "./style.css" ;

export const Books =({books,onRemoveBook, onReadBook})=>{
 
    return(
       
           <ul className="books-list">
               {books.length ? (
                   books.map((item, idx) => {
                       return (
                           <Book
                           key={item.id}
                           count ={idx +1}
                           data = {{...item}}
                           onRemoveBook={onRemoveBook}
                           onReadBook ={onReadBook}
                           />
                       );
                   })
               ) : ( <h1 style={{ textAlign: "center" }}> There is no Book</h1>
               )}
           </ul>
        
    );
};