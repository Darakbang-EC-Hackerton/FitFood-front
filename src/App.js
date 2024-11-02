// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import store from './store';

import Start from './pages/Start/Start';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import Registration from './pages/Registration/Registration';
import Profile from './pages/Profile/Profile';
import Community from './pages/Community/Community';
import Calculator from './pages/Calculator/Calculator';
import Food from './pages/Food/Food';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<Community />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
