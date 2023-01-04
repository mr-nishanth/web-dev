export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_BENEFICIARY":
      const updatedMembers = [...state.beneficiaryList, action.payload];
      return {
        ...state,
        beneficiaryList: updatedMembers,
      };
      break;

    default:
      return state;
  }
}
