const reducer = (oldState, action) =>{
    switch(action.type)
    {
        case "INCREMENT" :
            return {...oldState, counter: oldState.counter+action.payload};
        case "DECREMENT" :
            return {...oldState, counter: oldState.counter-action.payload};
        default:
            return oldState;
    }
}

export default reducer;