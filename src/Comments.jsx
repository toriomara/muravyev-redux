import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import SingleComment from './SingleComment';
import { commentCreate, commentsLoad } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Loader';

function Comments(props) {
  const [textComment, setTextComment] = useState('');
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div className='card-comments'>
      <Loader />
      <form className='comments-item-create' onSubmit={handleSubmit}>
        <input type='text' value={textComment} onChange={handleInput} />
        <input type='submit' hidden />
      </form>
      {!!comments.length &&
        comments.map((item) => <SingleComment key={item.id} data={item} />)}
    </div>
  );
}

export default Comments;
