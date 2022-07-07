// import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
 import Main from '@/layout/mainLayout'
// views
// import UserContext from '@/context/user';
// import { useContext } from 'react';
// import { useNavigate } from "react-router-dom";
import LandPage from '@/views/landPage/landPage.js'
import Signin from '@/views/signIn/signIn.js'
import SignUp from '@/views/signUp/signUp.js'
import ProductDataBase from '@/views/product/productDataBase/productDataBase.js'
import Test from '@/views/test/test.js'

import { useEffect } from "react";
function Webrouter() {
    return (
        <Router >
        <Routes >
                {/* <Route path="/" element={<Main><PublicPage children={<HomePage />} /></Main>} /> */}
                <Route path="/" element={<><PublicPage children={<LandPage />} /></>} />
                <Route path="/signin" element={<><PublicPage children={<Signin />} /></>} />
                <Route path="/signup" element={<><PublicPage children={<SignUp />} /></>} />
                <Route name="product" path="/product" element={<Main><PublicPage children={<ProductDataBase />} /></Main>} />
                <Route name="test" path="/test" element={<Main><PublicPage children={<Test />} /></Main>} />

                </Routes>
        </Router>
    )
}
function PublicPage({ children }) {
    return (<>{children}</>)
}

// function UserPage({ children }) {
//     const navigate = useNavigate();
//     const { user } = useContext(UserContext)
//     const [logged, setLogged] = useState(false)
//     useEffect(() => {
//         if (user === null || user.account === "" || user.account === null) {
//             navigate('/login');
//         } else {
//             setLogged(true);
//         }
//     }, [user, navigate])
//     return (<>{logged && children}
//     </>)
// }
export default Webrouter;