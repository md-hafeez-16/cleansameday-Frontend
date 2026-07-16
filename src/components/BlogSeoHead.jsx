import { Helmet } from "react-helmet-async";
import { getFeaturedImageUrl } from "../utils/blog";

const SITE_URL = "https://cleansameday.com";

const BlogSeoHead = ({ post }) => {
  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt || "";
  const keywords = post.keywords || [];
  const imageUrl = getFeaturedImageUrl(post.featuredImage);
  const canonical = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    author: {
      "@type": "Person",
      name: post.author || "Clean Same Day",
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    image: imageUrl || undefined,
    description,
    url: canonical,
  };

  return (
    <Helmet>
      <title>{title}</title>
      {description ? <meta name="description" content={description} /> : null}
      {keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonical} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default BlogSeoHead;
