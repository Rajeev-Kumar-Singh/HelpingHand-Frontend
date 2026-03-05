import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Share2,
  Home,
} from "lucide-react";
import { blogData } from "data/blogData.js";
import Header from "Components/Header.jsx";
import Footer from "Components/Footer.jsx";
import BlogRelatedPosts from "Components/BlogRelatedPosts.jsx";
import { Badge } from "Components/ui/badge.jsx";
import { Button } from "Components/ui/button.jsx";
import { useToast } from "Components/ui/use-toast.js";

const BlogPostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const postIndex = blogData.findIndex((p) => p.id === postId);
  const post = blogData[postIndex];

  const prevPost = postIndex > 0 ? blogData[postIndex - 1] : null;
  const nextPost =
    postIndex < blogData.length - 1 ? blogData[postIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Post Not Found
        </h1>
        <Button onClick={() => navigate("/")}>Return Home</Button>
      </div>
    );
  }

  const handleShare = (platform) => {
    toast({
      title: `Shared on ${platform}`,
      description:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>{`${post.title} | Hope Foundation Blog`}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        <main className="pt-24 pb-20">
          {/* Breadcrumbs */}
          <div className="bg-gray-50 py-4 border-b border-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <Link
                  to="/"
                  className="hover:text-emerald-600 flex items-center gap-1 transition-colors"
                >
                  <Home size={14} /> Home
                </Link>
                <span>/</span>
                <Link
                  to="/#blog"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Blog
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-md">
                  {post.title}
                </span>
              </div>
            </div>
          </div>

          <article className="container mx-auto px-4 mt-12 max-w-4xl">
            {/* Header */}
            <header className="text-center mb-12">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border-none mb-6 px-4 py-1.5 text-sm">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-emerald-600" />
                  <span className="font-medium text-gray-900">
                    {post.author}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-emerald-600" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-emerald-600" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl mb-12"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
            </motion.div>

            {/* Content */}
            <div className="prose prose-lg prose-emerald max-w-none mb-12">
              {post.content.split("\n\n").map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-gray-700 leading-relaxed mb-6 text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags & Share */}
            <div className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-b border-gray-200 mb-12 gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-gray-900 mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-gray-50 text-gray-600 border-gray-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-900 flex items-center gap-2">
                  <Share2 size={18} /> Share:
                </span>
                <button
                  onClick={() => handleShare("Facebook")}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <Facebook size={18} />
                </button>
                <button
                  onClick={() => handleShare("Twitter")}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </button>
                <button
                  onClick={() => handleShare("LinkedIn")}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-emerald-50 rounded-2xl p-8 mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-emerald-200 flex items-center justify-center flex-shrink-0">
                <User size={40} className="text-emerald-700" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                  About {post.author}
                </h3>
                <p className="text-gray-700">{post.authorBio}</p>
              </div>
            </div>

            {/* Post Navigation */}
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.id}`}
                  className="group flex flex-col p-6 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all text-left"
                >
                  <span className="text-sm text-gray-500 mb-2 flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                    <ChevronLeft size={16} /> Previous Post
                  </span>
                  <span className="font-bold text-gray-900 font-serif line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  to={`/blog/${nextPost.id}`}
                  className="group flex flex-col p-6 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all text-right items-end"
                >
                  <span className="text-sm text-gray-500 mb-2 flex items-center gap-1 group-hover:text-emerald-600 transition-colors">
                    Next Post <ChevronRight size={16} />
                  </span>
                  <span className="font-bold text-gray-900 font-serif line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
            </div>

            {/* Comments Section (Display Only) */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif flex items-center gap-2">
                <MessageCircle className="text-emerald-600" /> Comments (
                {post.comments})
              </h3>
              <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
                <p className="text-gray-600 mb-4">
                  Join the conversation! Leave a comment below.
                </p>
                <Button
                  onClick={() => handleShare("Comments")}
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                >
                  Sign in to Comment
                </Button>
              </div>
            </div>

            {/* Related Posts */}
            <BlogRelatedPosts
              currentPostId={post.id}
              category={post.category}
            />
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostDetail;
