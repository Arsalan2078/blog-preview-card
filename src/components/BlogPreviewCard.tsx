function BlogPreviewCard () {
  return (
    <div className="card grid">
      <img
        className="blog-image"
        src="./images/illustration-article.svg"
        alt="Blog Image"
      />

      <div className="content">
        <p className="category">
          Learning
        </p>

        <p className="publish-date">
          Published 21 Dec 2023
        </p>

        <h1 className="title">
          <a href="#">HTML & CSS foundations</a>
        </h1>

        <p className="description">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
      </div>

      <div className="author">
        <img
          className="author-pic"
          src="./images/image-avatar.webp"
          alt="Image Avatar"
        />

        <p className="author-name">
          Greg Hooper
        </p>
      </div>
    </div>
  )
}

export default BlogPreviewCard