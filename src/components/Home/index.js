import './index.css'
import Header from '../Header/index'

const Home = () => (
  <div className="bg-container">
    <Header />
    <div className="home-container">
      <div className="home-info">
        <h1 className="home-head">
          Clothes That Get YOU <br /> Noticed
        </h1>
        <p className="home-para">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been the maker of the era
          and we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="home-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-image"
      />
    </div>
  </div>
)

export default Home
