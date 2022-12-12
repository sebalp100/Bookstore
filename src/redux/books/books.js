const ADD = './redux/ADD';
const DELETE = './redux/DELETE';

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          author: action.author,
        },
      ];
    case DELETE:
      return console.log('delete book');
    default: return state;
  }
}

export function createBook(book) {
  return {
    type: ADD,
    book,
  };
}