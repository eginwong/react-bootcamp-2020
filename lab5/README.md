Source: https://github.com/min1c/lab-router-classes.git

# Lab: Router (Classes)

This lab aims to apply the basics of:

- event-binding
- state
- lifecycle methods
- routing

## Running the App

1. Clone

    ### `git clone https://github.com/min1c/lab-router-classes.git`

2. Install dependencies

    ### `npm install`

3. Start the web application

    ### `npm start`

4. Open in web browser at http://localhost:3000/

5. Follow instructions and edit code

## In App.js:

1. Modify the behaviour of the Navbar.Brand and Nav.Link elements to behave as a react-router <NavLink>.  
    
    - Using <NavLink> will not trigger a full page refresh when navigating within a router.
    
    - Hint: Use 'as' attribute

2. Replace the current <Home> return with two <Route> components within a <Switch> component
    
    a. The first route will render the <Films> component if the path is "/films"

    b. The second route will render the <Home> component if the path is "/"

## In FilmsClass.js:

1. Add state variables for "films" and "id"

2. Add a lifecycle method which fetches the films and sets the films state upon first time loading

3. Get the match object in the render method

    - Add a "to" property to the ListGroup.Item elements to link to the film details. Use the match object and film.id

4. Replace { C.INCOMPLETE_2_FULL } with two <Route> components within a <Switch> component

    a. The first route will render the <FilmDetails> component if the path is exactly the match path + "/:id"

    b. The second route will render { C.SELECT_FILM } if the path is the match path

5. Add an event handler to the class

    a. It should accept selectedId and set the "id" state to selectedId

    b. Pass it as a prop called onIdChange to the FilmDetails component in the route you created in the previous step

    c. Add a "className" property to the ListGroup.Item elements that will conditionally set the class to "active" or "" depending if the state id matches the element's film.id

## In FilmDetailsClass.js:

1. Add state variables for "film" and "filmChildren"

2. Add lifecycle methods:

    a. Get "id" parameter from the match object

    b. Fetch the film and set the film state:
    
    - upon first time loading
    
    - when id is different than previous id

    c. Generate the film children and set the filmChildren state:
    
    - when film state is different from previous film state

3. Add an event handler to the class

    a. It should accept id and pass it to the callback provided in the props by the parent

    b. This event handler should be called upon first time loading and when id is different than previous id
