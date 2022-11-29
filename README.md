# Memory Card Game

### [Live Demo](https://tomcoso.github.io/memory-card/)

This project is a memory cards game with a Doctor Who theme, click on each doctor once to get to the next level.

## Technologies used

- node
- react
- create-react-app
- sass
- styled-components
- react-icons
- uniqid

# Planning

Following is the original planning I did before starting the project, I leave it here for documentation's sake. A few things ended up different, of course!

Feel free to ignore.

This is the initial planning, I am was thinking of using Fragments to unclog the DOM and of using Portals to display a counter on the header, that updates based on the Game component. In the end I used portals to create overlays instead.

I will also look into styled-components to see if its worth it to learn and use in this project.

### Components

- `<Header>` Will have the title, a restart button portal, and a section to hold the score counter portals.

- `<Game>` Will contain all the game logic, along with the portals for restart and the scores. It will be composed with :

  - `<Gameboard>`
    - `<Card>` component for each card (12)
    - Shuffle() method
  - `<Counter>` counting logic
    - A portal element to display the score in `<Header>`
  - `Restart` method with a portal button on `<Header>`

- `<Footer>` Will contain links to my gh and portfolio.

### Some game logic sketches :

```jsx
# In <Gameboard props={endGame, addScore}>

cards = useState([all cards])
clicked = useSTate([])

After click on card {
	if (clicked card in clicked?) {
		setClicked( [] )
		--> To <Game> endGame()
	}
	else {
		setClicked( clicked + clicked card )
		--> To <Game> addScore()

		if clicked.length === 12 {
			--> To <Game> endGame()
		}
	}

	shuffleCards()
}
```

```jsx

# In <Game>

score = useState(0)
highScore = useState(0)

endGame = () => {

	if score === 12 {
		display win panel
	}
	else {
		display losing panel
	}

	setScore( 0 )
}

addScore = () => {
	setScore( score + 1 )

	if score > highScore {
		setHighScore( score )
	}
}

```
