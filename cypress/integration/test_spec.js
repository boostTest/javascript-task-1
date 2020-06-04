import App from '../../src/js/App';

const app = new App();

const books400 = [
    {
        title: 'The art of programming JavaScript',
        pages: 210,
        genre: 'motivational'
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
]

const books400700 = [
    {
        title: 'Books I read in this year',
        pages: 480,
        genre: 'action'
    }

]

const books700 = [
    {
        title: 'How I mastered C',
        pages: 1000,
        genre: 'action'
    }
]

const booksJS = [
    {
        title: 'The art of programming JavaScript',
        pages: 210,
        genre: 'motivational'
    },
    {
        title: 'JavaScript ES6',
        pages: 100,
        genre: 'classic'
    }
]

const booksD250 = [
    {
        title: 'JavaScript ES6',
        pages: 100,
        genre: 'classic'
    }
]

const bookDopamine = {
        title: 'Dopamine',
        pages: 200,
        genre: 'best'
    } 


const doublePages  = [
    {
      title: 'How I mastered C',
      pages: 2000,
      genre: 'action'
    },
    {
      title: 'The art of programming JavaScript',
      pages: 420,
      genre: 'motivational'
    },
    {
      title: 'Books I read in this year',
      pages: 960,
      genre: 'action'
    },
    {
      title: 'Redux explained',
      pages: 1400,
      genre: 'classic'
    },
    {
      title: 'JavaScript ES6',
      pages: 200,
      genre: 'classic'
    },
    {
      title: 'Dopamine',
      pages: 400,
      genre: 'best'
    }  
  ];


const sortedObj  = {
    action: [
        {
            title: 'How I mastered C',
            pages: 1000,
            genre: 'action'
        },
        {
            title: 'Books I read in this year',
            pages: 480,
            genre: 'action'
        }

    ],
    motivational: [
        {
            title: 'The art of programming JavaScript',
            pages: 210,
            genre: 'motivational'
        }
    ],
    classic: [
        {
            title: 'Redux explained',
            pages: 700,
            genre: 'classic'
        },
        {
            title: 'JavaScript ES6',
            pages: 100,
            genre: 'classic'
        }
    ],
    best: [
        {
            title: 'Dopamine',
            pages: 200,
            genre: 'best'
        } 
    ]
}

describe('Javascript Taks 1 Tests', () => {
    it('Create an array containing all books with pages below 400', () => {
        expect(app.booksBelow400()).to.deep.eq(books400);
    });

    it('Create an array containing all books with pages above 400 and below 700', () => {
        expect(app.booksAbove400Below700()).to.deep.eq(books400700);
    });
    
    it('Create an array containing all books with pages above 700', () => {
        expect(app.booksAbove700()).to.deep.eq(books700);
    });

    it('Create an array which returns all books containing JavaScript in their title', () => {
        expect(app.booksJavaScriptTitle()).to.deep.eq(booksJS);
    });

    it('In the original array that you copied, find the book whose pages when divided by 2 return 50', () => {
        expect(app.booksPagesDivided2Return50()).to.deep.eq(booksD250);
    });

    it('Find the book titled Dopamine', () => {
        expect(app.bookDopamine()).to.deep.eq(bookDopamine);
    });

    it('From the original array, create new array where each book\'s pages is doubled', () => {
        expect(app.doublePages()).to.deep.eq(doublePages);
    });

    it('From the original array of books return an object where all books are sorted by genre', () => {
        expect(app.sortedObject()).to.deep.eq(sortedObj);
    });

    it.only('Student used correct syntax', () => {
        cy.readFile('./src/js/App.js').then(file => {
            file = file.replace(/(\r\n|\n|\r)/gm,"").replace(/\s/g,'').replace(/'/g, '"');
            expect(file).to.not.contain(`[${books400.map(r => JSON.stringify(r).replace(/\s/g,'').replace(/"([^"]+)":/g, '$1:'))}]`);
            expect(file).to.not.contain(`[${books400700.map(r => JSON.stringify(r).replace(/\s/g,'').replace(/"([^"]+)":/g, '$1:'))}]`);
            expect(file).to.not.contain(`[${books700.map(r => JSON.stringify(r).replace(/\s/g,'').replace(/"([^"]+)":/g, '$1:'))}]`);
            expect(file).to.not.contain(`[${booksJS.map(r => JSON.stringify(r).replace(/\s/g,'').replace(/"([^"]+)":/g, '$1:'))}]`);
            expect(file).to.not.contain(`[${booksD250.map(r => JSON.stringify(r).replace(/\s/g,'').replace(/"([^"]+)":/g, '$1:'))}]`);
            expect(file).to.not.contain(`[${books400.map(r => JSON.stringify(r).replace(/\s/g,'').replace(/"([^"]+)":/g, '$1:'))}]`);
            expect(file).to.not.contain(`[${doublePages.map(r => JSON.stringify(r).replace(/\s/g,'').replace(/"([^"]+)":/g, '$1:'))}]`);
            expect(file).to.not.contain(JSON.stringify(sortedObj).replace(/\s/g,'').replace(/"([^"]+)":/g, '$1:'))
        })
    });
})