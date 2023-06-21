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

export const cartoons: Film[] = [
  {
    title: 'Tom and Jerry',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'SpongeBob Squarepants',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Looney Tunes',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Simpsons',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Mickey Mouse',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Scooby-Doo',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Dragon Ball Z',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Pokemon',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Adventure Time',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Avatar: The Last Airbender',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Teen Titans',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Powerpuff Girls',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Dora the Explorer',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Flintstones',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Jetsons',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Rugrats',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Courage the Cowardly Dog',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'South Park',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Powerpuff Girls',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Family Guy',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Arthur',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Fairly OddParents',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Little Mermaid',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Aladdin',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Lion King',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Cinderella',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Snow White and the Seven Dwarfs',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Beauty and the Beast',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Toy Story',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Finding Nemo',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Incredibles',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Cars',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Wall-E',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Up',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Ratatouille',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Kung Fu Panda',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Shrek',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Frozen',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Moana',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Tangled',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Coco',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Zootopia',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Big Hero 6',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Princess and the Frog',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Brave',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Wreck-It Ralph',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Inside Out',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'The Good Dinosaur',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Toy Story 4',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Onward',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Soul',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
  {
    title: 'Luca',
    url: `https://picsum.photos/id/${getRandomNumber()}/200/300`,
  },
]
