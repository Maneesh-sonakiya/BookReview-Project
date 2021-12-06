# BookReview-Project
this is a basic project for book review 

//create 2- tables
 1. create table book (tittle varchar primary_key,isbn varchar) ;
   //where isbn is book unique id
 2. create table bookreview(id int serial_key primary_key, book review, isbn);
  //id is for the purpose of delete 
  --first page is ShowBook  which fetch detail of all books;
  --then we select book to see its review which will send isbn no to ShowBookReview, InputReview
  --here in showBookReview we can edit and delete book review.
  --in input review we can insert review about a book where isbn no is fix
  
  
