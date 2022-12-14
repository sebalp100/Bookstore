import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.statusReducer);

  const dispatch = useDispatch();

  return (
    <div className="categories">
      <button className="catButton" type="button" onClick={() => { dispatch(checkStatus()); }}>Check Status</button>
      <h1>
        Status:
        {' '}
        {status}
      </h1>
    </div>
  );
};

export default Categories;
