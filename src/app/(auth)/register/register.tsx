"use client";

import Link from "next/link";
import { useState } from "react";
import { auth, db } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Notification from "@/components/Notification";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setNotif(null);

    const form = e.currentTarget;
    const fullName = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value.trim();
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value.trim();
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      // Update Firebase Auth profile with name
      await updateProfile(user, { displayName: fullName });

      // Save user profile in Firestore with default role "user"
      await setDoc(doc(db, "users", user.uid), {
        displayName: fullName,
        email,
        balance: 0,
        role: "user",
        createdAt: new Date().toISOString(),
      });

      // Show success notification
      setNotif({ message: "Account created successfully!", type: "success" });

      // Redirect to dashboard after short delay
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code || "";
      if (code === "auth/email-already-in-use") {
        setNotif({
          message: "That email is already registered.",
          type: "error",
        });
      } else if (code === "auth/weak-password") {
        setNotif({
          message: "Password is too weak. Use at least 6 characters.",
          type: "error",
        });
      } else if (code === "auth/invalid-email") {
        setNotif({
          message: "Please enter a valid email address.",
          type: "error",
        });
      } else {
        setNotif({
          message:
            (err as { message?: string })?.message ||
            "Sign up failed. Try again.",
          type: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-5 shadow-xl">
        <div className="text-center mb-3">
          <h1 className="text-3xl sm:text-4xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">
            Create Account
          </h1>
          <p className="text-white/60 text-sm sm:text-base">
            Start your investment journey with Tesla today
          </p>
        </div>

        <form onSubmit={handleSubmit} method="post" className="space-y-5 sm:space-y-3">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors text-white placeholder-white/40"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors text-white placeholder-white/40"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white/70 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-red-500 transition-colors text-white placeholder-white/40"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="mt-1 mr-3 w-4 h-4 text-red-500 bg-white/10 border-white/20 rounded focus:ring-red-500"
            />
            <label htmlFor="terms" className="text-sm text-white/70">
              I agree to the{" "}
              <Link
                href="/terms-of-service"
                className="text-red-500 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="text-red-500 hover:underline"
              >
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-base sm:text-lg transition-colors shadow-sm shadow-red-500/40 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          <div className="text-center pt-4 sm:pt-6">
            <p className="text-white/60 text-sm sm:text-base">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-red-500 hover:underline font-semibold"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
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
