const CHECK_STATUS = './redux/CHECK_STATUS';

const innitialState = [];

export default function statusReducer(state = innitialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return [
        ...state,
        'Under Construction',
      ];
    default: return state;
  }
}

export function checkStatus(book) {
  return {
    type: CHECK_STATUS,
    book,
  };
}
