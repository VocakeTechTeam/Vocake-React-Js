import { Route, Routes } from 'react-router-dom';
import { MainLayout, TeacherLayout } from './layout';
import { Home, Explore, CoBan, Login, Register } from './views';
import FlashCard from './views/Practice';
import Onboard from './views/Onboard';
import NotFound from './views/NotFound';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { MyList } from './views/MyList';

const PrivateRoute = () => {
    const { isAuth } = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

const Routes_ = () => {
    return (
        <Routes>
            <Route path="/onboard" element={<Onboard />} />
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route
                        path="/explore/co-ban/practice"
                        element={<FlashCard />}
                    />
                    <Route path="/explore/co-ban" element={<CoBan />} />
                    <Route path="/mylist" element={<MyList />} />
                </Route>
            </Route>
            <Route path="/teacher" element={<TeacherLayout />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Routes_;
