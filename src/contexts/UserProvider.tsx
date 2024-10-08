import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, facebookProvider, googleProvider } from "@/firebase";

type UserProviderProps = {
  children: ReactNode;
};

type UserInfos = {
  id: string;
  email: string | null;
  [key: string]: any;
};

type TypeUserContext = {
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  registerWithEmail: (
    email: string,
    password: string,
    additionalData: { [key: string]: any }
  ) => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  setUserInfos: (userInfos: UserInfos | null) => void;
  currentUser: User | null;
  userInfos: UserInfos | null;
};

const UserContext = createContext({} as TypeUserContext);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userInfos, setUserInfos] = useState<UserInfos | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentU) => {
      setCurrentUser(currentU || null);

      /* get more infos */
      if (currentU) {
        const userRef = doc(db, "users", currentU.uid);
        const userDoc = await getDoc(userRef);
        setUserInfos((prev) => ({
          ...prev,
          id: currentU.uid,
          email: currentU.email,
          ...userDoc?.data(),
        }));
      } else setUserInfos(null);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setCurrentUser(result.user);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  const loginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      setCurrentUser(result.user);
    } catch (error) {
      console.error("Facebook login error:", error);
    }
  };

  const registerWithEmail = async (
    email: string,
    password: string,
    additionalData: { [key: string]: any }
  ) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = result;

      const userData = {
        email: user.email,
        id: user.uid,
        ...additionalData,
      };

      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, userData);

      setCurrentUser(user);
      setUserInfos(userData);
    } catch (error) {
      console.error("Email registration error:", error);
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      setCurrentUser(result.user);
    } catch (error) {
      console.error("Email login error:", error);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
  };

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const value = useMemo(
    () => ({
      loginWithGoogle,
      loginWithFacebook,
      registerWithEmail,
      loginWithEmail,
      logout,
      resetPassword,
      setUserInfos,
      currentUser,
      userInfos,
    }),
    [currentUser, userInfos]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
