# Chatbot!

## Our favorite AI nemesis, HAL9000 vs. Dave Bowman

## Grading Rubric (Pass/Partial/Fail)

### Required

* Have the AI respond to user input CHECK
* Do at least 3 different things CHECK
* One of the commands must utilize the list of people in the class to send a reply CHECK
* Use at least 1 conditional to change the response
* Leverage a for loop to iterate over a collection CHECK
* Use a random component CHECK
* Go above and beyond simple `if/else` statements

### Stretch Goals

* Have 2 or more AIs responding based upon user input
* Use a regular expression to parse and manipulate the response
* Have a conversation between two AIs (without creating an infinite loop!)

## Deliverables

* A working chatbot hosted somewhere publicly accessible (CodePen, Github Pages, etc.)
* A new git respository containing your code
* A `README.md` file with explanations of what your bot does, what commands it responds to, the approach taken, unsolved problems, etc.

-----------

This Chatbot takes in user input and responds to simple commands. The response function is based on if/else statements.

The Chatbot opens with the message "Good Morning, Dave"
The Chatbot responds to 8 different messages:

In response to "Good Morning, Hal" "Hi" or "Hello", Hal returns "How are you today?"
In response to "What is the best football team?", Hal returns "The Patriots!"
In response to "What time is it?", Hal returns the time in military time.
In response to "What's the date?", Hal returns the month, day and year.
In response to "Who's your favorite programmer?" The chatbot iterates over an array and returns the name of a student in the class. 
