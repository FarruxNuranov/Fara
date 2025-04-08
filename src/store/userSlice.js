import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  registeredUsers: JSON.parse(localStorage.getItem('registeredUsers')) || [],
  

};



const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    

  

    },
    Registration(state, action) {
      state.user = action.payload;
      state.registeredUsers.push(action.payload);
      
      localStorage.setItem('registeredUsers', JSON.stringify(state.registeredUsers));

     

     
    },
    logout(state) {
      state.user = null;
      
      localStorage.removeItem('user');
     
    
    },
  
  },
});


export const { login, logout, Registration } = userSlice.actions;
export default userSlice.reducer;