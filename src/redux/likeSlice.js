import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [], 
    //Här finns initial state
    addLike: {
      currentId: ''
    }

}; 

// Den här funkar utmärkt för att ladda data 
/*export const loadLikeData = createAsyncThunk(
  'recipe/loadLikeData',
  async (likeUrl, thunkAPI) => {
    const response = await fetch(likeUrl);
    const data = await response.json();
    return data;
  }
)*/

//FUNKAR INTE
export const postLike = createAsyncThunk(
  'recipe/postLike',
  async (recipe) => {
    const reqBody = {}
    const response = await fetch(`https://forum-api-jkrop.ondigitalocean.app/thread/${recipe.currentId}/like`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    });
    const createdLike = await response.json();
    return createdLike;
  }
)

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setLike(state, action) {
      state.addLike = action.payload;
    },
    setCurrentId(state, action) {
      state.addLike.currentId = action.payload;
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    /*[loadLikeData.fulfilled]: (state, action) => {
      // Add user to the state array
      state.data = action.payload;
    },*/
    [postLike.fulfilled]: (state, action) => {
      // Add user to the state array
      state.data.push(action.payload);
      state.addLike = initialState.addLike;
      
    }
  }
})
export const { setCurrentId } = likeSlice.actions;
export default likeSlice.reducer;
 