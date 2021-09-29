
   class Movie(){
       constructor(title,studio,rating){
           this.title=title;
           this.studio=studio;
           this.rating=rating;

       }
   }

   class movie(){
       constructor(title,studio,rating){
           this.title=title;
           this.studio=studio;
           this.rating=PG;
       }
   }



   let Movie[] getPG(Movie[] mov) {
    Movie[] pgMov = new Movie[mov.length];
    int newArrayIndex = 0;
    for (int i = 0; i < mov.length; i++) {
    if (mov[i].rating.equals(“PG”)) {
    pgMov[newArrayIndex] = mov[i];
    newArrayIndex++;
    }
    }
    return pgMov;



    Let mov = new Movie(“Casino Royale”,”Eon
        Productions”,”PG-13”);