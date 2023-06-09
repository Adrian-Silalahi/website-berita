const initialStateHome = {
    dataBlog: [],
    page : {
        currentPage : 1,
        totalData : 1
    }
}

const reducerHome = (state = initialStateHome, action) => {
    if (action.type === "UPDATE_DATA_BLOG") {
        return {
            ...state,
            dataBlog: action.payload
        }
    }
    if (action.type === "UPDATE_PAGE") {
        return {
            ...state,
            page: action.payload
        }
    }
    return state
}

export default reducerHome