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
import heroFallback from "../../assets_optimized/images/servicebg.webp";
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

  const heroImage =
    getFeaturedImageUrl(post.featuredImage) || heroFallback;
  const imageAlt = getFeaturedImageAlt(post.featuredImage, post.title);

  return (
    <>
      <BlogSeoHead post={post} />

      <PageShell>
        <div className="px-4 md:px-6 pt-6 md:pt-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-primary via-[#4f4c9a] to-secondary rounded-2xl px-6 md:px-10 py-6 md:py-8 mb-6 shadow-lg">
              <nav
                className="text-xs md:text-sm mb-3 text-white/75"
                aria-label="Breadcrumb"
              >
                <Link to="/" className="hover:text-white hover:underline">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <Link to="/blog" className="hover:text-white hover:underline">
                  Blog
                </Link>
              </nav>

              {post.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full font-medium bg-white/15 text-white border border-white/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-white">
                {post.title}
              </h1>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-300">
              <img
                src={heroImage}
                alt={imageAlt}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>

        <article className="px-4 md:px-6 pb-12 md:pb-16 pt-6 md:pt-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 pb-6 mb-6 border-b border-gray-100">
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

              <BlogContent html={post.content} />

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
        </article>
      </PageShell>
    </>
  );
};

export default BlogPost;
