export const selectAuth = state => {
    const { isLoggedIn, token } = state.auth;
    return { isLoggedIn, token };
  };
  
  export const selectIsLoggedIn = state => state.auth.isLoggedIn;
  
  export const selectUser = state => state.auth.user;
  
  export const selectIsRefreshing = state => state.auth.isRefreshing;
  
  export const selectIsLoading = state => state.auth.isLoading;
  
  export const selectError = state => state.auth.error;
  
  export const selectToken = state => state.auth.token;

//   export const isUserLogin = ({ auth }) => auth.isLoggedIn;
// export const getUser = ({ auth }) => auth.user;
// export const getAuth = ({ auth }) => {
//   const { isLoggedIn, token, user } = auth;
//   return { isLoggedIn, token, user };
// };

// export const selectUser = ({ auth }) => auth.user;
// export const selectAuth = ({ auth }) => {
//   const { isLoggedIn, token } = auth;
//   return { isLoggedIn, token };
// };
// export const selectLoading = ({ auth }) => auth.loading;
