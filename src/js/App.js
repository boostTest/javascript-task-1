export default class App {
  
  constructor() {
    
    this.books  = [
      {
        title: 'How I mastered C',
        pages: 1000,
        genre: 'action'
      },
      {
        title: 'The art of programming JavaScript',
        pages: 210,
        genre: 'motivational'
      },
      {
        title: 'Books I read in this year',
        pages: 480,
        genre: 'action'
      },
      {
        title: 'Redux explained',
        pages: 700,
        genre: 'classic'
      },
      {
        title: 'JavaScript ES6',
        pages: 100,
        genre: 'classic'
      },
      {
        title: 'Dopamine',
        pages: 200,
        genre: 'best'
      }  
    ];
    
  }

  booksBelow400() {
    return [];
  }

  booksAbove400Below700() {
    return [];
  }

  booksAbove700() {
    return [];
  }

  booksJavaScriptTitle() {
    return [];
  }

  booksPagesDivided2Return50() {
    return [];
  }

  bookDopamine() {
    return {};
  }

  doublePages() {
  return [];
}
  
  sortedObject() {
    return {};
  }
  
  init(){
    console.log([
      this.booksBelow400(),
      this.booksAbove400Below700(),
      this.booksAbove700(),
      this.booksJavaScriptTitle(),
      this.booksPagesDivided2Return50(),
      this.doublePages(),
      this.sortedObject()
    ])
 }
}
