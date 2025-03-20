import React, { useState } from "react";

function TopSaleBooks({ bgColor = "bg-blue-800", textColor = "text-white" }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("list");

  const categories = ["All", "Fiction", "Non-Fiction", "Science", "Self-Help"];

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xs ${
              i < rating ? "text-yellow-400" : "text-gray-400"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={`${bgColor} ${textColor} p-4 rounded-lg my-5 shadow-lg`}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold">Top Sale Books</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode("list")}
            className={`p-1 rounded ${
              viewMode === "list" ? "bg-white bg-opacity-30" : "bg-transparent"
            }`}
            title="List View"
          >
            📋
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`p-1 rounded ${
              viewMode === "grid" ? "bg-white bg-opacity-30" : "bg-transparent"
            }`}
            title="Grid View"
          >
            📊
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex overflow-x-auto pb-2 mb-3 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 mr-2 text-sm rounded-full whitespace-nowrap 
              ${
                selectedCategory === category
                  ? "bg-white text-blue-800 font-bold"
                  : "bg-white bg-opacity-20 hover:bg-opacity-30"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className={`mt-4 ${
          viewMode === "grid" ? "grid grid-cols-2 gap-3" : "space-y-3"
        }`}
      >
        <div
          className={`${
            viewMode === "list" ? "flex" : ""
          } items-center p-2 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all`}
        >
          <div className="relative mr-3">
            <span className="text-xl">🏆</span>
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1.5 rounded-full font-bold animate-pulse">
              -15%
            </span>
          </div>
          <div className="flex-grow">
            <p className="font-semibold">Atomic Habits</p>
            <p className="text-sm opacity-80">James Clear</p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-xs">Sold: 5.6M copies</p>
              <div className="flex items-center">
                <span className="font-bold mr-1">$16.99</span>
                <span className="text-xs line-through opacity-70">$19.99</span>
              </div>
            </div>
            {renderStars(5)}
          </div>
        </div>

        <div
          className={`${
            viewMode === "list" ? "flex" : ""
          } items-center p-2 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all`}
        >
          <span className="mr-3 text-xl">🥈</span>
          <div className="flex-grow">
            <p className="font-semibold">The Four Winds</p>
            <p className="text-sm opacity-80">Kristin Hannah</p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-xs">Sold: 4.8M copies</p>
              <span className="font-bold">$14.99</span>
            </div>
            {renderStars(4)}
          </div>
        </div>

        <div
          className={`${
            viewMode === "list" ? "flex" : ""
          } items-center p-2 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all`}
        >
          <span className="mr-3 text-xl">🥉</span>
          <div className="flex-grow">
            <p className="font-semibold">The Midnight Library</p>
            <p className="text-sm opacity-80">Matt Haig</p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-xs">Sold: 4.2M copies</p>
              <span className="font-bold">$12.99</span>
            </div>
            {renderStars(4)}
          </div>
        </div>

        <div
          className={`${
            viewMode === "list" ? "flex" : ""
          } items-center p-2 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-lg transition-all`}
        >
          <div className="relative mr-3">
            <span className="text-xl">📚</span>
            <span className="absolute -top-2 -right-2 bg-green-500 text-xs px-1.5 rounded-full font-bold">
              NEW
            </span>
          </div>
          <div className="flex-grow">
            <p className="font-semibold">Project Hail Mary</p>
            <p className="text-sm opacity-80">Andy Weir</p>
            <div className="flex justify-between items-center mt-1">
              <p className="text-xs">Sold: 3.9M copies</p>
              <span className="font-bold">$18.99</span>
            </div>
            {renderStars(5)}
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <button className="px-4 py-2 bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-all">
          View All Bestsellers
        </button>
        <button className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition-all text-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default TopSaleBooks;
