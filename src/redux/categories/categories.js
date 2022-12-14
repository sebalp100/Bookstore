const CHECK_STATUS = './redux/CHECK_STATUS';

const text = '';

export default function statusReducer(state = text, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default: return state;
  }
}

export function checkStatus(categories) {
  return {
    type: CHECK_STATUS,
    categories,
  };
}
