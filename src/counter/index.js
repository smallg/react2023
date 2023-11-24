import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, addToNum } from '../store/modules/counterStore';
import { fetchChannelList } from '../store/modules/channelStore';
import { useEffect } from 'react';

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChannelList());
  }, []);

  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(addToNum(10))}>Add 10</button>
        <button onClick={() => dispatch(addToNum(20))}>Add 20</button>
        Counter: {count}
      </div>
      <ul>
        {channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </>
  );
};

export default Counter;
