import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "Components/ui/input.jsx";
import { Button } from "Components/ui/button.jsx";

const BlogFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortOrder,
  onSortChange,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-10">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-6 ${
                activeCategory === category
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "text-gray-600 hover:text-emerald-600 border-gray-200"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Search and Sort */}
        <div className="flex w-full md:w-auto gap-3 items-center">
          <div className="relative w-full md:w-64">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-gray-50 border-gray-200 focus:bg-white rounded-full"
            />
          </div>

          <Button
            variant="outline"
            onClick={() =>
              onSortChange(sortOrder === "newest" ? "oldest" : "newest")
            }
            className="rounded-full border-gray-200 text-gray-600 hover:text-emerald-600 px-4 flex items-center gap-2"
            title={`Sort by date: ${sortOrder === "newest" ? "Oldest first" : "Newest first"}`}
          >
            <SlidersHorizontal size={18} />
            <span className="hidden sm:inline">
              {sortOrder === "newest" ? "Newest" : "Oldest"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogFilter;
