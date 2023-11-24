import { useEffect, useState } from 'react';
import axios from 'axios';

const useUserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getUserList = async () => {
      const res = await axios.get('http://localhost:3004/list');
      setUserList(res.data);
    };
    getUserList();
  }, []);

  return { userList, setUserList };
};

const Item = ({ item, handleClick }) => {
  return (
    <li onClick={() => handleClick(item.id)}>
      {item.id}: {item.name}
    </li>
  );
};

const UserList = () => {
  const { userList, setUserList } = useUserList();
  const handleClick = (id) => {
    console.log('fk', id);
  };

  return (
    <ul>
      {userList.map((item) => (
        <Item key={item.id} item={item} handleClick={handleClick} />
      ))}
    </ul>
  );
};

export default UserList;
