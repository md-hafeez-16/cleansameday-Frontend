import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import BlogContent from "../../components/BlogContent";
import BlogSeoHead from "../../components/BlogSeoHead";
import Button from "../../components/ui/Button";
import PageShell from "../../components/layout/PageShell";
import { BASE_URL } from "../../constants";
import {
  formatBlogDate,
  getFeaturedImageAlt,
  getFeaturedImageUrl,
} from "../../utils/blog";

const BlogNotFound = () => (
  <div className="font-marcellus bg-[#F0F2F4] max-w-7xl mx-auto min-h-[50vh] flex items-center justify-center px-4 py-16">
    <div className="text-center bg-white rounded-2xl shadow-lg px-8 py-12 max-w-md w-full">
      <p className="text-6xl text-secondary/30 font-bold mb-4">404</p>
      <h1 className="text-2xl md:text-3xl text-primary mb-3 font-semibold">
        Post not found
      </h1>
      <p className="text-gray-600 mb-8 text-sm">
        This blog post may have been removed or is not published yet.
      </p>
      <Link
        to="/blog"
        className="relative inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white rounded-lg overflow-hidden group"
      >
        <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
          Back to Blog <FaArrowRightLong />
        </span>
        <div className="absolute inset-0 bg-secondary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
      </Link>
    </div>
  </div>
);

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchPost = async () => {
      setLoading(true);
      setNotFound(false);

      try {
        const response = await axios.get(`${BASE_URL}/blog/getBySlug`, {
          params: { slug },
        });

        const postData = response.data?.success ? response.data.data : null;

        if (!postData || postData.status !== "published") {
          setPost(null);
          setNotFound(true);
          return;
        }

        setPost(postData);
      } catch (err) {
        if (err.response?.status === 404) {
          setNotFound(true);
        } else {
          console.error("Error fetching blog post:", err);
          setNotFound(true);
        }
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="font-marcellus bg-[#F0F2F4] max-w-7xl mx-auto min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-primary">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return <BlogNotFound />;
  }

  const imageUrl = getFeaturedImageUrl(post.featuredImage);
  const imageAlt = getFeaturedImageAlt(post.featuredImage, post.title);

  return (
    <>
      <BlogSeoHead post={post} />

      <PageShell>
        <header className="relative">
          {imageUrl ? (
            <div className="relative w-full h-[280px] md:h-[440px] overflow-hidden">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/20" />
            </div>
          ) : (
            <div className="relative w-full h-48 md:h-56 bg-gradient-to-br from-primary to-primary/80" />
          )}

          <div
            className={`px-4 md:px-8 pb-8 ${
              imageUrl ? "absolute bottom-0 left-0 right-0 text-white" : "pt-8 text-primary"
            }`}
          >
            <div className="max-w-3xl mx-auto">
              <nav
                className={`text-xs md:text-sm mb-4 ${
                  imageUrl ? "text-white/70" : "text-gray-500"
                }`}
                aria-label="Breadcrumb"
              >
                <Link
                  to="/"
                  className={`hover:underline ${imageUrl ? "hover:text-white" : "hover:text-primary"}`}
                >
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link
                  to="/blog"
                  className={`hover:underline ${imageUrl ? "hover:text-white" : "hover:text-primary"}`}
                >
                  Blog
                </Link>
              </nav>

              {post.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        imageUrl
                          ? "bg-white/15 text-white border border-white/25"
                          : "bg-secondary/10 text-secondary border border-secondary/30"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1
                className={`text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
                  imageUrl ? "text-white" : "text-primary"
                }`}
              >
                {post.title}
              </h1>

              <div
                className={`flex flex-wrap items-center gap-4 text-sm ${
                  imageUrl ? "text-white/80" : "text-gray-500"
                }`}
              >
                {post.author ? (
                  <span className="inline-flex items-center gap-1.5">
                    <FaRegUser className="text-secondary shrink-0" />
                    {post.author}
                  </span>
                ) : null}
                <span className="inline-flex items-center gap-1.5">
                  <FaRegCalendarAlt className="text-secondary shrink-0" />
                  {formatBlogDate(post.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="px-4 md:px-6 pb-12 md:pb-16">
          <div className="max-w-3xl mx-auto -mt-6 relative z-10">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 lg:p-12">
              <BlogContent html={post.content} />

              {/* Bottom CTA */}
              <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                <p className="text-lg text-primary font-semibold mb-2">
                  Need professional cleaning in Dubai?
                </p>
                <p className="text-gray-600 text-sm mb-6">
                  Our team is ready to help — same-day booking available.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button to="/contact-us" variant="primary">
                    Contact Us <FaArrowRightLong />
                  </Button>
                  <Button to="/service" variant="outline">
                    View Services
                  </Button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate("/blog")}
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm"
            >
              ← Back to all articles
            </button>
          </div>
        </div>
      </PageShell>
    </>
  );
};

export default BlogPost;
