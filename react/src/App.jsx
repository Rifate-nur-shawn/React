import React from "react";
import Lib from "./assets/Lib";
import TopSaleBooks from "./assets/TopSaleBooks";

function App() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800">Library Dashboard</h1>
        <p className="text-gray-600 mt-2">Your one-stop book portal</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Lib themeColor="bg-indigo-800" />
        <TopSaleBooks bgColor="bg-blue-800" textColor="text-white" />
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
        <p className="text-gray-700">
          If you're seeing this message but not the components, make sure
          Tailwind CSS is properly installed.
        </p>
      </div>
    </div>
  );
}

export default App;
