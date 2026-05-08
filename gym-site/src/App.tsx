import { Navbar } from './components/Navbar';
import heroImg from './assets/hero.png'
import strengthImg from './assets/strength.png'
import yogaImg from './assets/yoga.png'
import hiitImg from './assets/hiit.png'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-overlay"></div>
          <img src={heroImg} alt="Gym Hero" className="hero-bg" />
          <div className="container hero-content animate-fade">
            <h1>UNLEASH YOUR <span className="text-primary">POTENTIAL</span></h1>
            <p className="hero-subtitle">Premium equipment, world-class trainers, and a community that pushes you further.</p>
            <div className="hero-btns">
              <button className="btn btn-primary">Start Trial</button>
              <button className="btn btn-outline">View Classes</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section container">
          <h2 className="section-title">WHY CHOOSE <span className="text-primary">US</span></h2>
          <div className="features-grid">
            <div className="glass feature-card">
              <div className="feature-icon">🏋️‍♂️</div>
              <h3>Modern Equipment</h3>
              <p>Top-of-the-line machines and free weights for every fitness level.</p>
            </div>
            <div className="glass feature-card">
              <div className="feature-icon">🧘</div>
              <h3>Expert Trainers</h3>
              <p>Certified professionals dedicated to your personal growth.</p>
            </div>
            <div className="glass feature-card">
              <div className="feature-icon">📅</div>
              <h3>Flexible Hours</h3>
              <p>Open 24/7 to fit your busy lifestyle and training needs.</p>
            </div>
          </div>
        </section>

        {/* Classes Section */}
        <section id="classes" className="section bg-alt">
          <div className="container">
            <h2 className="section-title">POPULAR <span className="text-primary">CLASSES</span></h2>
            <div className="classes-grid">
              <div className="class-item glass" style={{ backgroundImage: `url(${strengthImg})` }}>
                <div className="class-info">
                  <h3>Hypertrophy Plus</h3>
                  <p>Strength & Muscle Building</p>
                </div>
              </div>
              <div className="class-item glass" style={{ backgroundImage: `url(${yogaImg})` }}>
                <div className="class-info">
                  <h3>Flow Yoga</h3>
                  <p>Mind & Body Balance</p>
                </div>
              </div>
              <div className="class-item glass" style={{ backgroundImage: `url(${hiitImg})` }}>
                <div className="class-info">
                  <h3>HIIT Core</h3>
                  <p>High Intensity Burn</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


      <footer className="footer container">
        <p>&copy; 2024 GymFit. Built for performance.</p>
      </footer>
    </>
  )
}

export default App

