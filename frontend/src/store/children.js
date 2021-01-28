import { fetch } from "./csrf";

const SET_All_Children = "children/setChildren";


//Action Creator produces an object
const setChildren = (children) => ({
    type: SET_All_Children,
    children: children,
  });
  //Action creator produces a thunk
  export const fetchAllChildren=(userId)=> {
    return async (dispatch)=>{
        //server
        const response = await fetch(`/api/schedule/${userId}`)
        dispatch(
            setChildren(response.data.children)
        )
    }
}

  


const initialState = [];

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_All_Children:
      newState = action.children
     return newState;
    default:
      return state;
  }
};





export default reducer;
