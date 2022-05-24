export const loginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

export const Follow = (userId) => ({
  type:"FOLLOW",
  payload:userId,
})

export const UnFollow = (userId) => ({
  type:"UNFOLLOW",
  payload:userId,
})

export const ReadingTargetAct = (targetCount) => ({
  type:"READINGTARGET",
  payload:targetCount,
})

export const AddNewShelf = (newShelf) => ({
  type:"ADDNEWSHELF",
  payload:newShelf,
})

export const AddNewBook = (bookShelf) => ({
  type:"ADDNEWBOOK",
  payload:bookShelf,
})