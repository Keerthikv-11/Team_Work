import './Aboutme.css'
import { Footer } from '../components/Footer'
import { Navigation } from '../components/Navigation'

export const Aboutme = () => {
    return (
        <div className="layout-container">
            <Navigation />
            <div className="page-wrapper">
                <section className="about-hero">
                    <div className="hero-content">
                        <span className="intro-badge">Introduction</span>
                        <h1 className="hero-name">I'm Keerthi</h1>
                        <h3 className="hero-role">GeoAI Intern @ Gesix</h3>
                        <p className="hero-summary">
                            I am a Computer Science and Engineering student and Full Stack Intern at Gesix Solutions, working on real-world product features. I have hands-on experience in web development, Java, and AI-based projects, and I'm passionate about building practical, scalable solutions
                        </p>
                        <div className="hero-details">
                            <p>
                                I enjoy exploring new things, learning continuously, and playing sports in my free time.
                            </p>
                        </div>
                        <button className="hero-btn">View My GitHub</button>
                    </div>

                    <div className="image">
                            <img 
                                src="Animated_Image1.png" 
                                alt="Keerthi imge" 
                                className="animated-img"
                            />
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}