import { useSelector } from 'react-redux';

export const Loader = (props) => {
  const loader = useSelector((state) => state.appReducer.loading);
  console.log(loader);
  return loader && <Spinner />;
};

const Spinner = () => {
  return <div className='loader'></div>;
};
