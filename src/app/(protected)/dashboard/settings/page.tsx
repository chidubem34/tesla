"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { db } from "@/firebase/config";
import {
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import Notification from "@/components/Notification";

export default function SettingsPage() {
  const { user } = useAuth();

  const [firstName, setFirstName] = useState(
    user?.displayName?.split(" ")[0] || "",
  );
  const [lastName, setLastName] = useState(
    user?.displayName?.split(" ")[1] || "",
  );
  const [email, setEmail] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notif, setNotif] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  const handleProfileUpdate = async () => {
    if (!user) return;
    try {
      await updateProfile(user, { displayName: `${firstName} ${lastName}` });

      if (email !== user.email) {
        await updateEmail(user, email);
      }

      await updateDoc(doc(db, "users", user.uid), {
        displayName: `${firstName} ${lastName}`,
        email,
      });

      setNotif({ message: "Profile updated successfully!", type: "success" });
    } catch (err: unknown) {
      setNotif({ message: (err as Error).message, type: "error" });
    }
  };

  const handlePasswordUpdate = async () => {
    if (!user) return;
    if (newPassword !== confirmPassword) {
      setNotif({ message: "Passwords do not match.", type: "error" });
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(
        user.email!,
        currentPassword,
      );
      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, newPassword);
      setNotif({ message: "Password updated successfully!", type: "success" });
    } catch (err: unknown) {
      setNotif({ message: (err as Error).message, type: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex justify-center py-8">
      <div>

        {/* Profile Information */}
        <section className="mb-8 w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4">
            Profile Information
          </h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-red-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-red-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-red-500"
            />
            <div className="flex gap-4">
              <button
                onClick={handleProfileUpdate}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition"
              >
                Save Changes
              </button>
              <button
                onClick={() => {
                  setFirstName(user?.displayName?.split(" ")[0] || "");
                  setLastName(user?.displayName?.split(" ")[1] || "");
                  setEmail(user?.email || "");
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4">Security</h2>
          <form className="space-y-4" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
            <input
              type="password"
              placeholder="Current Password"
              aria-autocomplete="none"
              autoComplete="off"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-red-500"
            />
            <input
              type="password"
              placeholder="New Password"
              autoComplete="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-red-500"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-red-500"
            />
            <button
              onClick={handlePasswordUpdate}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              Update Password
            </button>
          </form>
        </section>
      </div>

      {/* Notification */}
      {notif && (
        <Notification
          message={notif.message}
          type={notif.type}
          onClose={() => setNotif(null)}
        />
      )}
    </div>
  );
}
