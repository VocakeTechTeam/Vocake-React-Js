import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout';
import { Home, Explore, CoBan, Login, Register } from './views';
import FlashCard from './views/Practice';
const Routes_ = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/practice" element={<FlashCard />} />
                <Route path="/explore/co-ban" element={<CoBan />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<>Not found</>} />
        </Routes>
    );
};

export default Routes_;
