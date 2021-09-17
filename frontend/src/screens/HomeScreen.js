import { Fragment, useEffect } from 'react';
import Welcome from '../components/Welcome';
import axios from 'axios';

const HomeScreen = () => {
  useEffect(() => {
    const fetchServer = async () => {
      const { data } = await axios.get('/api');
      console.log(data);
    };

    fetchServer();
  });
  return (
    <Fragment>
      <Welcome />
    </Fragment>
  );
};

export default HomeScreen;
