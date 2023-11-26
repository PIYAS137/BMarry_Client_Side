import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../Firebase/firebase.config"
import usePublicAxiosHook from "../hooks/publicAxiosDataFetchHook/usePublicAxiosHook";





export const AuthContext = createContext(null)
const FirebaseAuth = getAuth(app);
const GoogleAuth = new GoogleAuthProvider();

const FirebaseAuthContext = ({ children }) => {

    const [user, setUser] = useState({});
    const [loader, setLoader] = useState(true)
    const publicAxios = usePublicAxiosHook()



    const Firebase_Login_User = (email, pass) => {
        setLoader(true)
        return signInWithEmailAndPassword(FirebaseAuth, email, pass)
    }

    const Firebase_SignUp_User = (email, pass) => {
        setLoader(true)
        return createUserWithEmailAndPassword(FirebaseAuth, email, pass)
    }

    const Firebase_Google_Login = () => {
        setLoader(true)
        return signInWithPopup(FirebaseAuth, GoogleAuth);
    }

    const Firebase_Logout_User = () => {
        setLoader(true)
        return signOut(FirebaseAuth);
    }

    const Firebase_Update_User = (name, photo) => {
        setLoader(true)
        return updateProfile(FirebaseAuth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(FirebaseAuth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                // has user
                const userEmail = { email: currentUser?.email || user?.email };
                publicAxios.post('/jwt', userEmail)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoader(false)
                        }
                    })
            } else {
                // no user
                localStorage.removeItem('access-token');
                setLoader(false)
            }
        })
        return () => {
            return unSubscribe()
        }
    }, [publicAxios])

    const contextVal = {
        user,
        loader,
        Firebase_Login_User,
        Firebase_SignUp_User,
        Firebase_Google_Login,
        Firebase_Logout_User,
        Firebase_Update_User
    }

    return (
        <AuthContext.Provider value={contextVal}>
            {children}
        </AuthContext.Provider>
    )
}

export default FirebaseAuthContext