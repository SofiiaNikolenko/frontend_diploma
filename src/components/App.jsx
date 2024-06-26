import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';

const Home = lazy(() => import('../pages/Home'));
const PublicTrips = lazy(() => import('../pages/PublicTrips'));
const PopularTrips = lazy(() => import('../pages/PopularTrips'));
const User = lazy(() => import('../pages/User'));
const Login = lazy(() => import('../pages/Login'));
const Registration = lazy(() => import('../pages/Registration'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="publictrips" element={<PublicTrips />} />
        <Route path="populartrips" element={<PopularTrips />} />
        <Route path="user" element={<User />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
