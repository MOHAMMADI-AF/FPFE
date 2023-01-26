import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import docService from "./docService";

const initialState = {
  docs: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new doc
export const createDoc = createAsyncThunk(
  "docs/create",
  async (docData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await docService.createDoc(docData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user docs
export const getDocs = createAsyncThunk("docs/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await docService.getDocs(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Update user doc
export const updateDoc = createAsyncThunk(
  "docs/update",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await docService.updateDoc(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//. Delete user doc
export const deleteDoc = createAsyncThunk(
  "docs/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await docService.deleteDoc(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const docSlice = createSlice({
  name: "doc",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      //.create document
      .addCase(createDoc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDoc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.docs.push(action.payload);
      })
      .addCase(createDoc.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //.get document
      .addCase(getDocs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDocs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.docs = action.payload;
      })
      .addCase(getDocs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //.update document
      .addCase(updateDoc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDoc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.docs = state.docs.filter((doc) => doc._id !== action.payload.id);
      })
      .addCase(updateDoc.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //.delete document
      .addCase(deleteDoc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDoc.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.docs = state.docs.filter((doc) => doc._id !== action.payload.id);
      })
      .addCase(deleteDoc.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = docSlice.actions;
export default docSlice.reducer;
