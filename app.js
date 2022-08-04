//using selectors inside the element
// traversing the dom

"use strict";
// const questions = document.getElementsByClassName("question");
const questions = document.querySelectorAll(".question");

questions.forEach( (question) => {
        const btn = question.querySelector(".question-btn");
        
        btn.addEventListener("click", () => {
           
            questions.forEach( (item) => {
                if ( item !== question ) {
                    item.classList.remove( "question-text" );
                }
            });

            question.classList.toggle( "question-text" );
        });
    }
);
