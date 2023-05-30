const initialStateGlobal = {
    name: "Adrian"
}

const reducerGlobal = (state = initialStateGlobal, action) => {
    if (action.type === "UPDATE_NAME") {
        return {
            ...state,
            name: "silalahi"
        }
    }
    return state
}

export default reducerGlobal