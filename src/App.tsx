
function App () {
  return (
    <div className="blog-preview-card m-xs-300 p-xs-300 flex flex-direction-xs-column gap-xs-300 bg-neutral-xs-white text-neutral-xs-gray-950">
      <img className="blog-image" src="./images/illustration-article.svg" alt="Illustration Article" />

      <div className="content flex flex-direction-xs-column align-items-xs-flex-start gap-xs-150">
        <p className="category p-xs-100 pt-xs-50 pb-xs-50 bg-primary-xs-yellow text-preset-3-bold">
          Learning
        </p>

        <p className="publish-date text-preset-3">
          Published 21 Dec 2023
        </p>

        <h1 className="title">
          <a className="text-preset-1 text-hover-primary-xs-yellow" href="#">
            HTML & CSS foundations
          </a>
        </h1>

        <p className="description text-preset-2 text-neutral-xs-gray-500">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
      </div>

      <div className="author flex flex-direction-xs-row align-items-xs-center gap-xs-150">
        <img src="./images/image-avatar.webp" alt="Author Avatar" className="author-pic" />

        <p className="author-name text-preset-3-bold">
          Greg Hooper
        </p>
      </div>
    </div>      
  )
}

export default App