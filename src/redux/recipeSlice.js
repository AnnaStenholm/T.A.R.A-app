import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useParams } from "react-router-dom"; 
const initialState = {
    data: [], 
    //Här finns initial state
    addCommentForm: {
      title: '',
      content: ''
    }
}; 

// Den här funkar utmärkt för att ladda data 
export const loadCommentData = createAsyncThunk(
  'recipe/loadCommentData',
  async (recipeUrl, thunkAPI) => {
    const response = await fetch(recipeUrl);
    const data = await response.json();
    return data;
  }
)

//FUNKAR INTE
export const postComment = createAsyncThunk(
  'recipe/postComment',
  async (recipe, thunkAPI) => {
    //const {id} = useParams();
    const response = await fetch(`https://forum-api-jkrop.ondigitalocean.app/thread/60828d8d282ecd001e7dd30f/comment`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(recipe)
    });
    const createdComment = await response.json();
    return createdComment;
  }
)

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setCommentTitle(state, action) {
      state.addCommentForm.title = action.payload;
    },
    setCommentContent(state, action) {
      state.addCommentForm.content = action.payload;
    }
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [loadCommentData.fulfilled]: (state, action) => {
      // Add user to the state array
      state.data = action.payload;
    },
    [postComment.fulfilled]: (state, action) => {
      // Add user to the state array
      state.data.push(action.payload);
      state.addCommentForm = initialState.addCommentForm;
      
    }
  }
})
export const { setCommentTitle, setCommentContent } = recipeSlice.actions;
export default recipeSlice.reducer;
 