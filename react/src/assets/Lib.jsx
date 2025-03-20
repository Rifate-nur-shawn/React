import React, { useState } from "react";

function Lib({ themeColor = "bg-indigo-800" }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMembership, setShowMembership] = useState(false);

  return (
    <div className={`${themeColor} text-white p-4 rounded-lg my-5 shadow-lg`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Library Services</h2>
        <span className="px-2 py-1 bg-green-500 rounded-full text-xs">
          Open Now
        </span>
      </div>

      {/* Search Bar */}
      <div className="relative mt-4 mb-6">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pl-8 rounded bg-white bg-opacity-20 focus:bg-opacity-30 outline-none text-white placeholder-gray-300"
        />
        <span className="absolute left-2 top-2.5">🔍</span>
      </div>

      <div className="mt-4">
        <ul className="space-y-2">
          <li className="flex items-center p-2 hover:bg-black hover:bg-opacity-20 rounded transition-all">
            <span className="mr-3 text-xl">📚</span>
            <div>
              <p className="font-semibold">Book Borrowing</p>
              <p className="text-xs opacity-75">
                Borrow up to 5 books for 3 weeks
              </p>
            </div>
          </li>
          <li className="flex items-center p-2 hover:bg-black hover:bg-opacity-20 rounded transition-all">
            <span className="mr-3 text-xl">🔍</span>
            <div>
              <p className="font-semibold">Book Search</p>
              <p className="text-xs opacity-75">Advanced catalog search</p>
            </div>
          </li>
          <li className="flex items-center p-2 hover:bg-black hover:bg-opacity-20 rounded transition-all">
            <span className="mr-3 text-xl">📅</span>
            <div>
              <p className="font-semibold">Reservation System</p>
              <p className="text-xs opacity-75">Reserve books in advance</p>
            </div>
          </li>
          <li className="flex items-center p-2 hover:bg-black hover:bg-opacity-20 rounded transition-all">
            <span className="mr-3 text-xl">💬</span>
            <div>
              <p className="font-semibold">Reading Recommendations</p>
              <p className="text-xs opacity-75">Personalized for your taste</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Membership Section */}
      <div className="mt-6 border-t border-white border-opacity-20 pt-4">
        <button
          onClick={() => setShowMembership(!showMembership)}
          className="w-full py-2 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-all flex justify-between items-center px-3"
        >
          <span>Membership Benefits</span>
          <span>{showMembership ? "▲" : "▼"}</span>
        </button>

        {showMembership && (
          <div className="mt-3 p-3 bg-white bg-opacity-10 rounded">
            <p className="mb-2 text-sm">Join our premium membership for:</p>
            <ul className="text-sm space-y-1">
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✓</span> Extended
                borrowing periods
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✓</span> Access to
                exclusive events
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-400">✓</span> Early access to
                new releases
              </li>
            </ul>
            <button className="mt-3 w-full py-1.5 bg-green-600 rounded text-sm hover:bg-green-700 transition-all">
              Join Now - $4.99/month
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lib;
