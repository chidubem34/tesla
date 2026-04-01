"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User, signOut, updateProfile } from "firebase/auth";
import { auth, db } from "@/firebase/config";
import { doc, onSnapshot, DocumentSnapshot, FirestoreError } from "firebase/firestore";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  role: string | null;
  profile: any | null;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  role: null,
  profile: null,
  logout: async () => {}, // default no-op
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);
  const [profile, setProfile] = useState<any | null>(null);

  useEffect(() => {
    let profileUnsub: (() => void) | null = null;

    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      
      // Cleanup previous profile listener
      if (profileUnsub) {
        profileUnsub();
        profileUnsub = null;
      }

      if (u) {
        // Listen for real-time profile changes
        profileUnsub = onSnapshot(doc(db, "users", u.uid), (snap: DocumentSnapshot) => {
          if (snap.exists()) {
            const data = snap.data() as any;
            setProfile(data);
            const userRole = (data.role || "user").trim().toLowerCase();
            console.log("AuthContext: Profile updated. Role:", userRole);
            setRole(userRole);
          } else {
            setProfile(null);
            setRole(null);
          }
          setLoading(false);
        }, (error: FirestoreError) => {
          console.error("Profile listener error:", error);
          setLoading(false);
        });
      } else {
        setProfile(null);
        setRole(null);
        setLoading(false);
      }
    });

    return () => {
      unsub();
      if (profileUnsub) profileUnsub();
    };
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setProfile(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, role, profile, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
