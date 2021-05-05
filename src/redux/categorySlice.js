import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
}; 

// First, create the thunk
export const loadRecipeData = createAsyncThunk(
  'category/loadRecipeData',
  async (categoryUrl, thunkAPI) => {
    const response = await fetch(categoryUrl);
    const data = await response.json();
    return data;
  }
)

// Then, handle actions in your reducers:
const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [loadRecipeData.fulfilled]: (state, action) => {
      // Add user to the state array
      state.data = action.payload;
    }
  }
})

export default categorySlice.reducer;
 