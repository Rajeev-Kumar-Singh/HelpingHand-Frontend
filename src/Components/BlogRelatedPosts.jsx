import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard.jsx";
import { blogData } from "../data/blogData.js";

const BlogRelatedPosts = ({ currentPostId, category }) => {
  // Find related posts: same category, exclude current post, limit to 3
  const relatedPosts = blogData
    .filter((post) => post.category === category && post.id !== currentPostId)
    .slice(0, 3);

  // If not enough related posts in the same category, fill with recent posts
  if (relatedPosts.length < 3) {
    const additionalPosts = blogData
      .filter(
        (post) =>
          post.id !== currentPostId &&
          !relatedPosts.find((rp) => rp.id === post.id),
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3 - relatedPosts.length);

    relatedPosts.push(...additionalPosts);
  }

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-16 pt-16 border-t border-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
          Related Stories
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogRelatedPosts;
