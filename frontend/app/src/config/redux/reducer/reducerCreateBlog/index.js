const initialState = {
    form: {
        title: "",
        body: "",
        image : "",
    },
    imagePreview : null
}

const reducerCreateBlog = (state = initialState, action) => {
    if(action.type === "SET_FORM_DATA"){
        return{
            ...state,
            form: {
                ...state.form,
                [action.formType] : action.formValue
            }
        }
    }
    if(action.type === "SET_IMG_PREVIEW"){
        return{
            ...state,
            imagePreview : action.payload
        }
    }
    return state
}

export default reducerCreateBlog;