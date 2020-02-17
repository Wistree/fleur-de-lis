// a reducer is just a func that get 2 properties
// 1. a state obj which represent the last state or initial state that we try to store
// 2. an action, its an obj that has a type, which is a string value, it just a name to tell what specific action to do

// the other that it may or may not have is the payload
// they payload can be anything. we can do anything with it to update our state
/*
{
    type:
    payload:
}
*/ 
const INITIAL_STATE = {
    currentUser: null
}

/*

------------------------------------------------------------------------------
why need to return the state?
because the reducer takes the state and the action and return the next state. if u do not return a state from a reducer. U no longer have that state

-------------------------------------------------------------------------------
why need to destructure a state?
because we need to copy a state - an object
REMEMBER, state MUST be updated IMMUTABLY

how to do that?
can not just copy the state...

let objectA = {color: 'blue'};
let objectB = objectA;

objectA.color = 'red';
console.log(objectB.color) > 'red'

we didnt change obj B directly, it still change to match obj A. This due to how object in JS stored in memory. Objs are reference types, mean when u create a copy of an object, u actually just create a pointer to the original object you copied. 

The 2 obj is just point to the same location in memory, so when you change one, you change the other. 

=> Can not update the state this way because it not immutable. 

We need to create new object from the old state and update a new one 

one way is to use spreading operator (...object):
let objectA = {color: 'blue'};
let objectB = { ...objectA };
objectA.color = 'red';

console.log(objectB.color) > 'blue'

using the spread operator is a way to create anew object in the reducer, which we can now update with new properties(immutable)
*/ 

/*
example action file:

export const loginUser = (loginStuff) => ({
    type: LOGIN_USER
    payload: loginStuff
});

action.payload is just the data that was sent along in the original action.
in this example: the currentUser was sent in the payload
The reducer grab the payload (userStuff) and does something with it (like set the current user to the state)
*/ 
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
};

// this func will return an object. the object is going to be the new state of user reducer
// => { currentUser: {...} }
// React components only re-render if their prop is different

export default userReducer;