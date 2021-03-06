import React from "react";

export function Subscribe() {
  return (
    <div className="mx-auto max-w-md px-4 pt-6 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
        >
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              className="text-indigo-400 text-opacity-40"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            />
            <path
              className="text-indigo-700 text-opacity-40"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            />
          </svg>
        </div>
        <div className="relative">
          <div className="sm:text-center">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Get notified when we’re launching.
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-100">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque.
            </p>
          </div>
          <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
            <div className="min-w-0 flex-1">
              <label htmlFor="cta_email" className="sr-only">
                Email address
              </label>
              <input
                id="cta_email"
                type="email"
                className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-500 sm:px-10"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
