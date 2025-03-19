import React from "react";

function TopSaleBooks({ bgColor = "bg-blue-800", textColor = "text-white" }) {
  return (
    <div className={`${bgColor} ${textColor} p-4 rounded-lg my-5 shadow-md`}>
      <h2 className="text-xl font-bold mb-3">Top Sale Books</h2>

      <div className="mt-4">
        <ul className="space-y-3">
          <li className="flex items-center p-2 hover:bg-opacity-20 hover:bg-black rounded">
            <span className="mr-3 text-xl">🏆</span>
            <div>
              <p className="font-semibold">Atomic Habits</p>
              <p className="text-sm opacity-80">James Clear</p>
              <p className="text-xs mt-1">Sold: 5.6M copies</p>
            </div>
          </li>
          <li className="flex items-center p-2 hover:bg-opacity-20 hover:bg-black rounded">
            <span className="mr-3 text-xl">🥈</span>
            <div>
              <p className="font-semibold">The Four Winds</p>
              <p className="text-sm opacity-80">Kristin Hannah</p>
              <p className="text-xs mt-1">Sold: 4.8M copies</p>
            </div>
          </li>
          <li className="flex items-center p-2 hover:bg-opacity-20 hover:bg-black rounded">
            <span className="mr-3 text-xl">🥉</span>
            <div>
              <p className="font-semibold">The Midnight Library</p>
              <p className="text-sm opacity-80">Matt Haig</p>
              <p className="text-xs mt-1">Sold: 4.2M copies</p>
            </div>
          </li>
          <li className="flex items-center p-2 hover:bg-opacity-20 hover:bg-black rounded">
            <span className="mr-3 text-xl">📚</span>
            <div>
              <p className="font-semibold">Project Hail Mary</p>
              <p className="text-sm opacity-80">Andy Weir</p>
              <p className="text-xs mt-1">Sold: 3.9M copies</p>
            </div>
          </li>
        </ul>
      </div>

      <button className="mt-4 px-4 py-2 bg-opacity-20 bg-white rounded hover:bg-opacity-30 transition-all">
        View All Bestsellers
      </button>
    </div>
  );
}

export default TopSaleBooks;
