import featuredBlogImage from '../assets/blog-1.png';
import blogImage1 from '../assets/blog-2.png';
import blogImage2 from '../assets/blog-3.png';
import blogImage3 from '../assets/blog-4.png';

const Blog = () => {
  return (
    <section className="blog-section container">
      <h2 className="section_title">Recent Blogs</h2>
      <div className="blog-post blog-post-featured">
        <div className="blog-post_content">
          <span className="blog-post_category">Best Practices</span>
          <h3 className="blog-post_title">In design active temper be uneasy. Thirty for remove plenty regard.</h3>
          <a href="#" className="blog-post_link">Read More &rarr;</a>
        </div>
        <div className="blog-post_image">
          <img src={featuredBlogImage} alt="Business professionals" />
        </div>
      </div>
      <div className="blog-posts-grid">
        <div className="blog-post">
          <div className="blog-post_image"><img src={blogImage1} alt="Collaborating over a tablet" /></div>
          <div className="blog-post_content">
            <span className="blog-post_category">Best Practices</span>
            <h3 className="blog-post_title">Partiality on or continuing particular principles as.</h3>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post_image"><img src={blogImage2} alt="Cityscape sunset" /></div>
          <div className="blog-post_content">
            <span className="blog-post_category">Best Practices</span>
            <h3 className="blog-post_title">Village did removed enjoyed explain.</h3>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-post_image"><img src={blogImage3} alt="Analyzing a chart on a tablet" /></div>
          <div className="blog-post_content">
            <span className="blog-post_category">Best Practices</span>
            <h3 className="blog-post_title">Wise busy past both park when an ye no. Nay likely her length.</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;