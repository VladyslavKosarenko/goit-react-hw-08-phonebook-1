import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { RestrictedRoute } from 'components/App/RestrictedRoute';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../../pages/Home'));
const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );

  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<HomePage />} />
  //       <Route
  //         path="/register"
  //         element={
  //           <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
  //         }
  //       />
  //       <Route
  //         path="/login"
  //         element={
  //           <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
  //         }
  //       />
  //       <Route
  //         path="/tasks"
  //         element={
  //           <PrivateRoute redirectTo="/login" component={<TasksPage />} />
  //         }
  //       />
  //     </Route>
  //   </Routes>
  // );
};
