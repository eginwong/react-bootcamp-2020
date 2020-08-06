import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

function setup(props = {}, state = {}) {
    return shallow(<App {...props} />).setState(state);
}

function findByTestAttr(wrapper, searchAttribute) {
    return wrapper.find(`[data-test="${searchAttribute}"]`);
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component).toBeDefined();
});

describe("question #2", () => {

    test("verify counter displays", () => {
        const wrapper = setup();
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay).toBeDefined();
    })
    test("verify counter starts at 0", () => {
        const wrapper = setup();
        expect(wrapper.state('counter')).toBe(0);
    })
    test("verify counter button click increments counter", () => {
        const counter = 11;
        const wrapper = setup(null, { counter });
        const incrementButton = findByTestAttr(wrapper, 'increment-button');
        incrementButton.simulate('click');

        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter + 1);
    })
});

describe("increment", () => {
    test("it renders", () => {
        const wrapper = setup();
        const incrementButton = findByTestAttr(wrapper, 'increment-button');
        expect(incrementButton).toBeDefined();
    });   
    test("it updates state on click", () => {
        const counter = 11;
        const wrapper = setup(null, { counter });
        const incrementButton = findByTestAttr(wrapper, 'increment-button');
        incrementButton.simulate('click');

        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter + 1);
    });
});

describe("decrement", () => {
    test("it renders", () => {
        const wrapper = setup();
        const decrementButton = findByTestAttr(wrapper, 'decrement-button');
        expect(decrementButton).toBeDefined();
    });   
    test("it updates state on click", () => {
        const counter = 11;
        const wrapper = setup(null, { counter });
        const decrementButton = findByTestAttr(wrapper, 'decrement-button');
        decrementButton.simulate('click');

        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter - 1);
    });
});

test("error message does not show when not triggered", () => {
    const wrapper = setup();
    const errorMessage = findByTestAttr(wrapper, 'error-message');
    expect(errorMessage.hasClass('hidden')).toBe(true);
});

describe("edge cases", () => {
    let wrapper;
    let decrementButton;

    beforeEach(() => {
        wrapper = setup();
        decrementButton = findByTestAttr(wrapper, 'decrement-button');
        decrementButton.simulate('click');
    });

    test("verify error message when decrement button is clicked", () => {
        const errorMessage = findByTestAttr(wrapper, 'error-message');
        expect(errorMessage.hasClass('hidden')).toBe(false);
    })

    test("verify 0 in counter display when decrement button is clicked at 0", () => {
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(0);
    })

    test("verify error message goes away when increment button is clicked after error state", () => {
        const errorMessage = findByTestAttr(wrapper, 'error-message');
        expect(errorMessage.hasClass('hidden')).toBe(false);
        
        const incrementButton = findByTestAttr(wrapper, 'increment-button');
        incrementButton.simulate('click');
        expect(findByTestAttr(wrapper, 'error-message').hasClass('hidden')).toBe(true);
    })
})