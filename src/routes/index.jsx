import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RoutesContainer = () => {
  const LoginPage = lazy(() => import('@/pages/Auth/Login'));
  const SignupPage = lazy(() => import('@/pages/Auth/Signup'));
  const ChangePasswordPage = lazy(() => import('@/pages/Auth/ChangePassword'));
  const ForgotPasswordPage = lazy(() => import('@/pages/Auth/ForgotPassword'));
  const OtpPage = lazy(() => import('@/pages/Auth/Otp'));
  const NotFoundPage = lazy(() => import('@/pages/NotFound'));
  const HomePage = lazy(() => import("@/pages/Home"));
  const CategoryPage = lazy(()=> import('@/pages/Category'))
  const CategoryBatsPage = lazy(()=> import('@/pages/Category/Bats'))
  const CategoryApprealPage = lazy(()=> import('@/pages/Category/Appreal'))
  const CategoryBallsPage = lazy(()=> import('@/pages/Category/Balls'))
  const CategoryKitsPage = lazy(()=> import('@/pages/Category/Kits'))
  const CategoryShoessPage = lazy(()=> import('@/pages/Category/Shoes'))

  
  return (
    <Suspense fallback={ <>Loading...</> }>
      <Router>
        <Routes>
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/signup" element={ <SignupPage /> } />
          <Route path="/otp-verification" element={ <OtpPage /> } />
          <Route path="/forgot-password" element={ <ForgotPasswordPage /> } />
          <Route path="/reset-password" element={ <ChangePasswordPage /> } />
          <Route path="/" element={ <HomePage /> } />
          <Route path="*" element={ <NotFoundPage /> } />
          <Route path="/category" element={<CategoryPage/>} />
          <Route path="/bats-category" element={<CategoryBatsPage/>}/>
          <Route path="/appreal-category" element={<CategoryApprealPage/>} />
          <Route path="/Balls-category" element={<CategoryBallsPage/>} />
          <Route path="/Kits-category" element={<CategoryKitsPage/>} />
          <Route path="/shoes-category" element={<CategoryKitsPage/>} />
        </Routes>
      </Router>
    </Suspense>
  );
};
export default RoutesContainer;
