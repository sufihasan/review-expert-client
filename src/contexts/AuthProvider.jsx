import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dmode, setDemode] = useState(() =>
        localStorage.getItem('theme') === 'dark');
    // const [totalservices, setTotalServices] = useState(0);

    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login user
    const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //update user
    const updateUser = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    //sign in with google
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //user logout
    const userLogout = () => {

        return signOut(auth);
    }

    //observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log('user in onauthstate change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])


    const userInfo = {

        createUser,
        updateUser,
        signinUser,
        user,
        setUser,
        userLogout,
        googleSignIn,
        loading,
        setDemode,
        dmode
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;