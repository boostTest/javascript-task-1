# 📦 Webpack Boilerplate

Complete the following tasks in the corresponding functions
*To complete the tasks use the books array in the src/js/App.js file*
1. Using this array, create an array containing all books with pages below 400
2. Create an array containing all books with pages above 400 and below or equal to 700
3. Create an array containing all books with pages above 700
4. Create an array which returns all books containing JavaScript in their title
5. In the original array that you copied, find the book whose pages when divided by 2 return 50
6. Find the book titled Dopamine
7. From the original array, create new array where each book's pages is doubled
8. From the original array of books return an object where all books are sorted by genre
``` 
    Example :
    const result = {
     classic: [{title: 'JavaScript ES6', pages:'700', genre: 'classic'}],
     best: [{title: 'Dopamine', pages:'200', genre: 'best'}]
    }
```
## Installation

```
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash 
npm i -g http-server
```

You can view the deploy by creating a server in `dist`. 

```bash
cd dist && http-server
```
