# ASL Translator

## :bulb: Inspiration 
Our group had set out with the goal to create an application where we can tackle some of the daily challenges some people go through.
We were inspired by the challenge of the language barrier between those who sign versus those who verbally communicate. 

## :gear: What it does
Our project is a webpage which takes a string input and pulls the ASL versions of the input in video format. The user can navigate forwards/backwards between each words translation and replay the videos to understand the translation better.

## :hammer_and_wrench: How we built it
Our website is built with generic JavaScript, HTML, and TailwindCSS. Our API is built with Python and Flask. The app takes user input and sends a request directly to our API which then parses the input string and identifies each word separately. From there it sends a request to a database which contains videos describing the ASL actions for each phrase. After that, it returns a string of video links which is then displayed on the webpage, and navigated through using the buttons provided to the user.

## :construction: Challenges we ran into
One big challenge we encountered was when we were finding a way to get videos for each name, as we noticed that the endpoints had different patterns for specific groups of words. We decided that the best way to combat this would be to test for successful requests with multiple formats if the base formats didn't work. Using this method solved our issue and significantly increased the number of words in our current database.

## :trophy: Accomplishments that we're proud of
We are very proud of the fact that we were able to create a very basic translator from English to ASL. Although it may not always be contextually accurate it is a very great tool to first dive into ASL and be able to sufficiently communicate or understand those who sign.

## :building_construction: What's next for How Sign
The next goal for How Sign is to try and make the reverse version of the translator. We will be attempting to allow users to input a video of them signing and turn it into a written translation so they could communicate back to the other person.
