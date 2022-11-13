const ThemeReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        return {
            isDark: action.payload,
        };
      default:
        return {...state};
    }
  };
  
  export default ThemeReducer;
  