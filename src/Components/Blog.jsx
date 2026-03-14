import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { blogData } from "../data/blogData.js";
import BlogCard from "./BlogCard.jsx";
import BlogFilter from "./BlogFilter.jsx";
import BlogNewsletterSignup from "./BlogNewsletterSignup.jsx";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const categories = ["All", "News", "Stories", "Impact", "Events"];

  const filteredAndSortedPosts = useMemo(() => {
    let result = [...blogData];

    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter((post) => post.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    // Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [activeCategory, searchQuery, sortOrder]);

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Our Stories & News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore field updates, impact journeys, and community voices that
            show how collective action is creating measurable change.
          </p>
        </motion.div>

        <BlogFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />

        {filteredAndSortedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No posts found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or category filter.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 text-emerald-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

        <BlogNewsletterSignup />
      </div>
    </section>
  );
};

export default Blog;
