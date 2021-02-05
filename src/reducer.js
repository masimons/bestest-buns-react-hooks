const initialState = {
  bunList: [{ bunName: "Lucky", bunType: "agouti" }]
};

export default function rootReducer(state = initialState, action) {
  console.log("action.type", action.type);
  console.log("action.payload", action.payload);
  switch (action.type) {
    case "bunAdded": {
      return {
        ...state,
        bunList: [
          ...state.bunList,
          action.payload // what does this look like?
        ]
      };
    }
    default:
      return state;
  }
}
