import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function fetchUserProfile(uid: string) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data();
}
