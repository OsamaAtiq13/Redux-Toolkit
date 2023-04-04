import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

export const fetchPosts = createAsyncThunk("fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const initialState = {
  value: 0,
  data: null,
  Posts: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.Posts = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
