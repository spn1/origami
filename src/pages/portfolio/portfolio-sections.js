export default {
    'finger-fort': {
        title: 'Finger Fort',
        textContent: [
            'Finger Fort was a collaborative project that I started making with some friends from University. This was in 2015, after my final year at University, and was the first software project I worked on with a team.',
            'The game was designed to be played on mobile devices, and the goal of the game is to defend your Fort on the right side of the screen from enemies that spawn from the left side and run towards it. The enemies spawn in waves, and each level is composed of a set number of waves. If they reach the fort, you lose a life - lose all your lives and it&apos;s game over.',
            'The main method of defeating the enemies was to use the touch-screen to damage them in some way. This could include \'flicking\' them away, tapping away magical shields, or pressing down on the fuse of a bomb to stop it from damaging the castle. Personally, I found it very enjoyable to actually code the logic behind those sorts of game mechanics that previously I had only ever used in other games!',
          ],
        imagePath: '/images/finger-fort-1.png'
    },
    'passive-structured-light': {
        title: 'Passive Structured Light',
        textContent: [
            'This was the topic of my 4th year Major Project (and resulting disseration). The application that I wrote for this was done in C++ using OpenCV.',
            'Structured Light is a technique used to create 3D models of an environment by projecting a pattern of lights (eg laser stripes) onto it using a projector, and then analysing images of the resulting scene. Because we know the pattern of lights, the dimensions of the scene in the image can be derived by looking at how the pattern deforms around the objects in the scene.',
            'This project was focused on a similar technique, but instead of lasers, sunlight could be used to project a pattern of spots onto a scene by reflecting it off of an array of mirrors. This would be advantageous in some areas for use with planetary landers when compared to other techniques. For example, it would require less power than using a projector or stereo vision (see dissertation for an analysis) and could required less bulky equipment.'
        ],
        imagePath: '/images/psl-application-1.png'
    },
    'triple-triad': {
        title: 'Triple Triad',
        textContent: [
            'This was the first project I did in a game-creation tool called Unity, that I did during the Summer of 2014 between my 3rd and 4th years at university. The game is remake of the card mini-game from Final Fantasy 8 - Triple Triad. Since it was my first Unity project, I chose a game with set rules so that I could focus on the development and learning process, instead of the design of the game (rules, ui, balance, etc).',
            'It is played by drawing a hand of 5 cards (that represent different monsters in the orignal game), each of which has a \'power\' value corresponding to each face of the card. Cards are played onto a 3 x 3 grid, and when a card is placed next to another card belonging to the opponent, those cards \'attack\' each other by comparing their adjacent power values. If an attacking card has a higher power value than the defending card, the defending card is captured by the attacker and from then on belongs to that player. This continues untill all the grid slots have been filled, and whomever controls the most cards (including cards in their hand) at this point wins the match.'
        ],
        imagePath: '/images/triple-triad-1.png'
    },
    '8-puzzle-solver': {
        title: '8-Puzzle Solver',
        textContent: [
            'This was an Artificial Intelligence project I did for University. The goal of the project was to develop a program to find the solution to an 8-puzzle game, when given a start state and an end state.',
            'The 8-puzzle game consists of a 3x3 grid where all the sections except one contains a tile with a number on it (from 1 to 8). The tiles can be moved left / right / up / down to an empty section. The goal of the game is to move the tiles from the arrangement they begin in to a specified goal state, after which the puzzle is considered complete. To solve this with a program, I implemented a few different solution-finding algorithms, with different heuristics of varying degrees of \'intelligence\'. After implementing the algorirthms and heuristics, I analysed the performance of each and composed a report detailing which ones were more performant.'
        ],
        imagePath: '/images/8-puzzle-1.png'
    }
};
