# Getting Started with Create React App


### `npm install`
This commmand fetches all the requirements of the project by cheking the package.json file

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Redux is used for the state management

Enter the name and proceed to play the game

Rules –
- If the card drawn from the deck is a cat card, then the card is removed from the deck.
- If the card is exploding kitten (bomb) then the player loses the game.
- If the card is defusing card, then the card is removed from the deck. This card can be used to defuse one bomb that may come in subsequent cards drawn from the deck.
- If the card is a shuffle card, then the game is restarted and the deck is filled with 5 cards again.

The game will be saved automatically in every stage so that it can be continued from same stage even after shutting down and reopening the page
