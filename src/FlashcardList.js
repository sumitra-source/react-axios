import React from 'react';
import Flashcard from './Flashcard';

export default function FlashcardList({flashCards}) {

  return (
  
    <div className="card-grid">
    {flashCards.map(flashcard=>{
  
      return<Flashcard flashcard={flashcard} key={flashcard.id}/>
    })}
      
    </div>
  )
}
