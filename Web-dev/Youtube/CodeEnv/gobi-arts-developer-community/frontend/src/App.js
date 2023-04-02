import './Styles/app.scss';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Register, Home, Profile, ProfileEdit, Post } from './pages/';
import { useSelector } from 'react-redux';
function App() {
    const theme = useSelector((state) => state.theme);
    return (
        <div
            className='App'
            data-theme={theme}
        >
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<Home />}
                    />
                    <Route
                        path='/login'
                        element={<Login />}
                    />
                    <Route
                        path='/register'
                        element={<Register />}
                    />
                    <Route
                        path='/profile/:id'
                        element={<Profile />}
                    />
                    <Route
                        path='/profile/:id/edit'
                        element={<ProfileEdit />}
                    />
                    <Route
                        path='/post/:id'
                        element={<Post />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
