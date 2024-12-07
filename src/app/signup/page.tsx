import { SignUpForm } from "@/auth/signup/components/form/form";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-16 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-r-4">
        <div>
          <svg
            className="mx-auto h-14 w-auto text-indigo-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <h2 className="mt-8 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
            Create a new account
          </h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors duration-300">
              sign in to your account
            </Link>
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}