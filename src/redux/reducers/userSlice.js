import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiEndpoint = 'https://connections-api.herokuapp.com';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async userData => {
    try {
      const response = await fetch(`${apiEndpoint}/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async credentials => {
    try {
      const response = await fetch(`${apiEndpoint}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    const response = await fetch(`${apiEndpoint}/users/logout`, {
      method: 'POST',
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async () => {
    try {
      const response = await fetch(`${apiEndpoint}/users/current`, {
        method: 'GET',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
