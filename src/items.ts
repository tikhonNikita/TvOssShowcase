export interface Film {
  title: string
  url: string
}

const getRandomNumber = () => {
  return Math.floor(Math.random() * 200) + 1
}

export const films: Film[] = [
  {
    title: 'Inception',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Shawshank Redemption',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Pulp Fiction',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Fight Club',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Dark Knight',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: "Schindler's List",
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Forrest Gump',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Matrix',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Godfather',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Empire Strikes Back',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Avengers',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Interstellar',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Seven',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Gladiator',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Silence of the Lambs',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Avatar',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Lion King',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Dark Knight Rises',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Departed',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Inglourious Basterds',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Saving Private Ryan',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Back to the Future',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Prestige',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Memento',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Green Mile',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Usual Suspects',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'American History X',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Toy Story',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Se7en',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Silence of the Lambs',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Incredibles',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Sixth Sense',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Jurassic Park',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Goodfellas',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Departed',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Terminator',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'A Clockwork Orange',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Mad Max: Fury Road',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Big Lebowski',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'No Country for Old Men',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Reservoir Dogs',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Truman Show',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Scarface',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Oldboy',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Blade Runner',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Back to the Future',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Braveheart',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
]
// export const films: Film[] = [
//   {
//     title: 'Inception',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Shawshank Redemption',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Pulp Fiction',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Fight Club',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Dark Knight',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: "Schindler's List",
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Forrest Gump',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Matrix',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Lord of the Rings: The Fellowship of the Ring',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Godfather',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Empire Strikes Back',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Avengers',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Interstellar',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Seven',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Gladiator',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Goodfellas',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Lion King',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Prestige',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Silence of the Lambs',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Whiplash',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Saving Private Ryan',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Departed',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Dark Knight Rises',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Avengers: Endgame',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Django Unchained',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Green Mile',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Intouchables',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Pianist',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Lord of the Rings: The Two Towers',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Se7en',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Gone Girl',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Social Network',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Revenant',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'La La Land',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Sixth Sense',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'A Clockwork Orange',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Bohemian Rhapsody',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Usual Suspects',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'American Beauty',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Wolf of Wall Street',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'The Shining',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Reservoir Dogs',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Mad Max: Fury Road',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Requiem for a Dream',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Jurassic Park',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Eternal Sunshine of the Spotless Mind',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Oldboy',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Blade Runner',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Back to the Future',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
//   {
//     title: 'Braveheart',
//     url:`https://picsum.photos/id/${getRandomNumber()}/200/300`
//   },
// ]
