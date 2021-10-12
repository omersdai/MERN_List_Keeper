import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import '../styles/screens/LoginScreen.scss';

const LogInScreen = ({ location, history }) => {
  console.log(location, history);

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user } = useSelector((state) => state.user); // TODO: Handle error and loading

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password));
    console.log('clicked submit');
  };

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user]);

  return (
    <div className="login-screen">
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <h2>Register</h2>
          </div>

          <div className="form-group">
            <label>
              Name
              <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Email Address
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Password
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group">
            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInScreen;
