import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  registeredUsers: JSON.parse(localStorage.getItem('registeredUsers')) || [],
  accessToken:  null,
  refreshToken: null

};



const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    

  

    },
    Registration(state, action) {
      state.user = action.payload;
      state.registeredUsers.push(action.payload);
     
      localStorage.setItem('registeredUsers', JSON.stringify(state.registeredUsers));

     

     
    },
    logout(state) {
      state.user = null;
     
    
    },
    refreshAccessToken(state, action) {
      state.accessToken = action.payload;
      localStorage.setItem('accessToken', action.payload);
    }
  },
});


export const { login, logout, Registration } = userSlice.actions;
export default userSlice.reducer;