import { errorOn } from './actions';
import { COMMENT_CREATE } from './types';

const badWords = ['козёл', 'дурак']

export const spamFilter = ({dispatch}) => {
  return function(next) {
    return function(action) {
      if (action.type === COMMENT_CREATE) {
        console.log('spamFilter =>', action.data.text);
        const hasBadWords = badWords.some(item => action.data.text.includes(item));
        if (hasBadWords) {
          return dispatch(errorOn('Обзывать людей неприемлемо!'))
        }
      }
      return next(action);
    }
  }
}
