import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import SeoHead from "../../components/SeoHead";
import PageHero from "../../components/layout/PageHero";
import PageShell from "../../components/layout/PageShell";
import SectionHeading from "../../components/layout/SectionHeading";
import { BASE_URL } from "../../constants";
import {
  formatBlogDate,
  getFeaturedImageAlt,
  getFeaturedImageUrl,
  truncateText,
} from "../../utils/blog";
import backgroundImage from "../../assets_optimized/images/servicebg.webp";

const BlogCard = ({ post, featured = false }) => {
  const imageUrl = getFeaturedImageUrl(post.featuredImage);
  const imageAlt = getFeaturedImageAlt(post.featuredImage, post.title);
  const excerpt = truncateText(post.excerpt, featured ? 220 : 140);

  return (
    <article
      className={`group bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl relative ${
        featured ? "md:flex md:min-h-[320px]" : "hover:scale-[1.02]"
      }`}
    >
      <Link
        to={`/blog/${post.slug}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`block h-full ${featured ? "md:flex md:w-full" : ""}`}
      >
        <div
          className={`relative overflow-hidden ${
            featured ? "md:w-1/2 h-64 md:h-auto" : "w-full h-56"
          }`}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageAlt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center px-8">
              <span className="text-white/90 text-center text-lg font-semibold">
                {post.title}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-tint-fill pointer-events-none" />
          {featured && (
            <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        <div
          className={`flex flex-col justify-center ${
            featured ? "md:w-1/2 p-8 md:p-10" : "p-6"
          }`}
        >
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.slice(0, featured ? 4 : 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border border-secondary/30 text-secondary bg-secondary/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h2
            className={`font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-snug ${
              featured ? "text-2xl md:text-3xl" : "text-xl"
            }`}
          >
            {post.title}
          </h2>

          {excerpt ? (
            <p className="text-gray-600 text-sm md:text-base line-clamp-3 mb-5">
              {excerpt}
            </p>
          ) : null}

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-auto">
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

          <span className="inline-flex items-center gap-2 mt-5 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
            Read article <FaArrowRightLong />
          </span>
        </div>
      </Link>
    </article>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blog/getPublished`);
        const postsData = response.data?.success ? response.data.data : [];
        setPosts(Array.isArray(postsData) ? postsData : []);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const [featuredPost, ...otherPosts] = posts;

  return (
    <>
      <SeoHead
        url="/blog"
        canonicalPath="/blog"
        defaults={{
          title: "Blog | Clean Same Day",
          description:
            "Cleaning tips, guides, and updates from Clean Same Day — professional home and office cleaning in Dubai.",
          keywords: [],
        }}
      />

      <PageShell>
        <PageHero
          title="Blog"
          breadcrumb={{ label: "Blog" }}
          image={backgroundImage}
        />

        <section className="section-padding">
          <SectionHeading
            eyebrow="Insights & Tips"
            title="Cleaning Tips & Expert Guides"
            subtitle="Practical advice from our Dubai cleaning professionals — for homes, offices, and everything in between."
          />

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse"
                >
                  <div className="h-56 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-100 rounded w-full" />
                    <div className="h-3 bg-gray-100 rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12 px-6 bg-white rounded-2xl shadow-md max-w-lg mx-auto">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="text-primary font-semibold hover:underline"
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-16 px-6 bg-white rounded-2xl shadow-md max-w-lg mx-auto">
              <p className="text-2xl text-primary font-semibold mb-2">
                No blog posts yet
              </p>
              <p className="text-gray-600 text-sm">
                Check back soon for cleaning tips and updates from our team.
              </p>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="space-y-10">
              {featuredPost && (
                <div>
                  <BlogCard post={featuredPost} featured />
                </div>
              )}

              {otherPosts.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherPosts.map((post) => (
                    <BlogCard key={post._id} post={post} />
                  ))}
                </div>
              )}
            </div>
          )}
        </section>
      </PageShell>
    </>
  );
};

export default Blog;
