import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "../Login/Login"
import {Home} from "../Home/Home";
import {SignUp} from "../Signup/Signup.jsx";
import Results from "../Results/Results";
import {Profile} from "../Profile/Profile";
import {ErrorPage} from '../ErrorPage';
import {Search} from "../Search/Search";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Login/>} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Signup" element={<SignUp />} />
                    <Route path="Results" element={<Results />} />
                    <Route path="Profile" element={<Profile />}/>
                    <Route path="Search" element={<Search />}/>
                    <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}