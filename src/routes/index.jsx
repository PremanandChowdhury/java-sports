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
        </Routes>
      </Router>
    </Suspense>
  );
};
export default RoutesContainer;
