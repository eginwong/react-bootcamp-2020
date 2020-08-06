Reference: git clone https://bitbucket.org/reactjestenzyme2020/testing-react-enzyme.git

# Lab - Testing with Jest and Enzyme

In this lab you will be writing test-cases to test the functionality of a simple counter app.  Your test code will reside in 'App.test.js.' The solutions for each question is available in the branch ['feature/lab-answers'](https://bitbucket.org/reactjestenzyme2020/testing-react-enzyme/src/2e704448ba1fde6b1cbc29c3401630e424604509/?at=feature%2Flab-answers).

### Question 1:

**Part a)** Write a factory function called ‘setup’  to create  a shallow wrapper for the App component. 

 >The function should take in as arguments, any component props and state specific to the setup.

**Part b)** Write a test helper function called *findByTestAttr* which expects two arguments. 
>The first argument should be the Enzyme shallow wrapper to search within. The second argument should be the value of the data-test attribute to search.

**Part c)** Write a test-case to verify the component app renders without error.

Solution: [66d3218](https://bitbucket.org/reactjestenzyme2020/testing-react-enzyme/commits/66d32189b1bdffbc70c321225bb0a2ff9e79bc6d)

### Question 2:

**Part a)** Write a test-case to verify the counter displays.

**Part b)** Write a test-case to verify the counter starts at 0.

**Part c)** Write a test-case to verify clicking the increment button will increase the counter.

>*HINT:* Expect the rendered text within the counter display to contain the incremented number.

Solution: [4a95269](https://bitbucket.org/reactjestenzyme2020/testing-react-enzyme/commits/4a952697d339cda7629a30054e8c5a08e8289f11)

### Question 3:

**Part a)** Create a test-suite for each of the increment and decrement functions.

**Part b)** For each test-suite create two test-cases.  A test-case to verify the increment/decrement button renders and another to verify clicking increment/decrement button updates the counter display when state is greater than 0

**Part c)** Write a test-case to verify the error message does not show when not triggered. (ie. by default the error message will not display)

>*HINT:* Use enzyme’s “.hasClass()” function.
http://airbnb.io/enzyme/docs/api/ShallowWrapper/hasClass.html

Solution: [c2280fe](https://bitbucket.org/reactjestenzyme2020/testing-react-enzyme/commits/c2280fed1f598d9b7ae61c0b5f6c03de3918bb65)

### Question 4:

**Part a)** Create a test-suite to contain test-cases for when the counter state is 0 and the decrement button is clicked

**Part b)** Use a setup/teardown function that initializes the shallow wrapper and find the decrement button and simulate a click

**Part c)** Write a test-case to verify the error message shows when the decrement button is clicked.

**Part d)** Write a test-case to verify the counter will still display 0 after the decrement button is clicked.

**Part e)** Write a test-case to verify clicking increment clears the error.

Solution: [2e70444](https://bitbucket.org/reactjestenzyme2020/testing-react-enzyme/commits/2e704448ba1fde6b1cbc29c3401630e424604509)
