const INITIAL_STATE = {
        data: []
    }; 

   export const loadRecipeData = (categoryUrl) => {
      return (dispatch) => {    
         fetch(categoryUrl)
         .then(res => res.json())
         .then((data) => dispatch( { type: 'LOAD_RECIPE_DATA_SUCCESS', payload: data })); 
      };
    }

    const reducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case "LOAD_RECIPE_DATA_SUCCESS":
               return { data: action.payload }
             default: 
             return state;
        }
    };

    export default reducer;