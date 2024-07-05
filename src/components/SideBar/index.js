import './index.css'

const SideBar = () => (
  <div className="container">
    <div className="image-card">
      <button type="button" className="button">
        <img
          src="https://res.cloudinary.com/duaagdzlh/image/upload/fl_preserve_transparency/v1720166400/Icon_eg9glv.jpg?_s=public-apps"
          alt="home"
        />
      </button>
      <p className="para">Home</p>
    </div>
    <div className="image-card">
      <button type="button" className="button">
        <img
          src="https://res-console.cloudinary.com/duaagdzlh/thumbnails/v1/image/upload/v1720166617/SWNvbmRhc2hib2FyZF9menp5ZW0=/drilldown"
          alt="dashboard"
        />
      </button>
      <p className="para">Dashboard</p>
    </div>
    <h1 className="heading">Services</h1>
    <h1 className="heading">Airports</h1>
    <h1 className="heading">Videos</h1>
    <div>
      <h1 className="heading">Others</h1>
      <p className="list">List 1</p>
      <p className="list">List 2</p>
      <p className="list">List 3</p>
    </div>
  </div>
)

export default SideBar
