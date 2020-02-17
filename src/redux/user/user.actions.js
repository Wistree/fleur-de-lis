/*
need to create an action that going to trigger the correct case inside of the switch statement
*/
// this is a function - action creator func
// this func just return an obj
// it takes user obj as an args, watever the user obj is, either the userAuth, or userSnapShot obj that we create inside the firebase util
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})