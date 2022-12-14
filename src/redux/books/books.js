const ADD = './redux/ADD';
const DELETE = './redux/DELETE';

const innitialState = [{
  id: 1,
  name: 'Title',
  author: 'Author',
}, {
  id: 2,
  name: 'Title 2',
  author: 'Author 2',
}, {
  id: 3,
  name: 'Title 3',
  author: 'Author 4',
}];

export default function bookReducer(state = innitialState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state, action.payload,
      ];
    case DELETE:
      return state.filter((book) => book.id !== action.payload.id);
    default: return state;
  }
}

export function createBook(book) {
  return {
    type: ADD,
    payload: book,
  };
}

export function deleteBook(book) {
  return {
    type: DELETE,
    payload: book,
  };
}
