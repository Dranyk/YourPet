// export const ROUTES = {
//     HOME: '/',
//     NEWS: '/news',
//     FRIENDS: '/friends',
//     REGISTER: '/register',
//     LOGIN: '/login',
//     USER: '/user',
//     NOTICES: '/notices',
//     NOTICES_SELL: '/notices/sell',
//     NOTICES_FOR_FREE: '/notices/for-free',
//     NOTICES_LOST_FOUND: '/notices/lost-found',
//     NOTICES_FAVORITE: '/notices/favorite',
//     NOTICES_OWN: '/notices/own',
//   };
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));

const routes = () => {
    return (
      <>
        <SharedLayout />
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            {/* <Route path="/news" element={<NewsPage />} /> */}
            <Route path="/notices" element={<NoticesPage />}>
              {/* <Route path=":categoryName" element={<NoticesCategoriesList />} /> */}
            </Route>
            {/* <Route path="/friends" element={<OurFriendsPage />} /> */}
  
            {/* <Route element={<Public />}> */}
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            {/* </Route> */}
  
            {/* <Route element={<Private />}> */}
              <Route path="/user" element={<UserPage />} />
            {/* </Route> */}
  
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Suspense>
      </>
    );
  };
  
  export default routes;