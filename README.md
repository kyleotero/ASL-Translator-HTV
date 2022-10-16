# ASL-Translator

## Inspiration
Our group had set out with the goal to create an application where we can tackle some of the daily challenges some people go through.
We were inspired by the challenge of the language barrier between those who sign versus those who verbally communicate. 

## What it does
Our project is a webpage which takes a string input and pulls the ASL versions of the input in video format. The user can navigate forwards/backwards between each words translation and replay the videos to understand the translation better.

## How we built it
Our website is built with generic JavaScript, HTML, and TailwindCSS. Our API is built with Python and Flask. The app takes user input and sends a request directly to our API which then parses the input string and identifies each word separately. From there it sends a request to a database which contains videos describing the ASL actions for each phrase. After that, it returns a string of video links which is then displayed on the webpage, and navigated through using the buttons provided to the user.

## Challenges we ran into

## Accomplishments that we're proud of
We are very proud of the fact that we were able to create a very basic translator from English to ASL. Although it may not always be contextually accurate it is a very great tool to first dive into ASL and be able to sufficiently communicate or understand those who sign.

## What we learned

## What's next for How Sign

Group Members: Kyle Otero, Dvir Malka, Sohban Malik, Mickey Bylasky
