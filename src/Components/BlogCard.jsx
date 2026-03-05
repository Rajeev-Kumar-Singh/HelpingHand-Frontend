import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "Components/ui/badge.jsx";

const BlogCard = ({ post, index }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "News":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Stories":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "Impact":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200";
      case "Events":
        return "bg-amber-100 text-amber-800 hover:bg-amber-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100"
    >
      <Link
        to={`/blog/${post.id}`}
        className="relative h-56 overflow-hidden block"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge
            className={`${getCategoryColor(post.category)} border-none font-semibold px-3 py-1`}
          >
            {post.category}
          </Badge>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readingTime}</span>
          </div>
        </div>

        <Link
          to={`/blog/${post.id}`}
          className="block group-hover:text-emerald-600 transition-colors"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="text-sm font-medium text-gray-900">
            By {post.author}
          </div>
          <Link
            to={`/blog/${post.id}`}
            className="text-emerald-600 font-semibold flex items-center gap-1 hover:text-emerald-700 transition-colors text-sm"
          >
            Read More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
