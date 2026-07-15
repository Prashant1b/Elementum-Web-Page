import "./styles.css";

const assets = {
  hiker: new URL("../Image/9fafd71fcaf807d27868bc021bfd2b706ca4a104.png", import.meta.url).href,
  hat: new URL("../Image/e1510bf92e503b24bd6f16dfd4f7bd4643d7dff7.png", import.meta.url).href,
  meeting: new URL("../Image/da7717ef2f3a21b6e13dc4d9c4b346bc9b5a7682.png", import.meta.url).href,
  work: new URL("../Image/image 348.png", import.meta.url).href,
  p256: new URL("../Image/Ellipse 256.png", import.meta.url).href,
  p257: new URL("../Image/Ellipse 257.png", import.meta.url).href,
  p258: new URL("../Image/Ellipse 258.png", import.meta.url).href,
  p259: new URL("../Image/Ellipse 259.png", import.meta.url).href,
  p260: new URL("../Image/Ellipse 260.png", import.meta.url).href,
  p261: new URL("../Image/Ellipse 261.png", import.meta.url).href,
  p263: new URL("../Image/Ellipse 263.png", import.meta.url).href,
  p264: new URL("../Image/Ellipse 264.png", import.meta.url).href,
  p265: new URL("../Image/Ellipse 265.png", import.meta.url).href,
  p266: new URL("../Image/Ellipse 266.png", import.meta.url).href,
  p267: new URL("../Image/Ellipse 267.png", import.meta.url).href,
  p268: new URL("../Image/Ellipse 268.png", import.meta.url).href,
  p269: new URL("../Image/Ellipse 269.png", import.meta.url).href,
  p270: new URL("../Image/Ellipse 270.png", import.meta.url).href,
  purple: new URL("../Image/Ellipse 736.png", import.meta.url).href,
  triangle: new URL("../Image/Polygon 1.png", import.meta.url).href,
  curve: new URL("../Image/Vector 2517.png", import.meta.url).href,
  redSquiggle: new URL("../Image/Vector 2510.png", import.meta.url).href,
  blackSquiggle: new URL("../Image/Vector 2511.png", import.meta.url).href,
  badge: new URL("../Image/Rectangle 661.png", import.meta.url).href,
};

const heroPeople = [
  [assets.hat, "hero-person hero-person-1"],
  [assets.p261, "hero-person hero-person-2"],
  [assets.hiker, "hero-person hero-person-3"],
  [assets.p256, "hero-person hero-person-4"],
  [assets.p257, "hero-person hero-person-5"],
  [assets.p258, "hero-person hero-person-6"],
  [assets.p259, "hero-person hero-person-7"],
  [assets.p260, "hero-person hero-person-8"],
];

const testimonialPeople = [
  [assets.p263, "orbit orbit-1"],
  [assets.p266, "orbit orbit-2"],
  [assets.p268, "orbit orbit-3"],
  [assets.p267, "orbit orbit-4"],
  [assets.p265, "orbit orbit-5"],
  [assets.p269, "orbit orbit-6"],
  [assets.p270, "orbit orbit-7"],
  [assets.p264, "orbit orbit-8"],
];

const offerRows = [
  ["Office of multiple\ninterest content", "Collaborative & partnership"],
  ["The hanger US Air force\ndigital experimental", "We talk about our weight"],
  ["Delta faucet content,\nsocial, digital", "Piloting digital confidence"],
];

function Highlight({ children, color = "green" }) {
  return <span className={`highlight highlight-${color}`}>{children}</span>;
}

function Underline({ children }) {
  return <span className="underline">{children}</span>;
}

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#home">Elementum</a>
      <nav>
        <a href="#home">Home</a>
        <a href="#studio">Studio</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#faqs">FAQs</a>
      </nav>
      <button className="menu-button" aria-label="Open menu">
        <span />
        <span />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <img className="side-squiggle red" src={assets.redSquiggle} alt="" />
      <img className="side-squiggle black" src={assets.blackSquiggle} alt="" />
      <img className="purple-shape hero-purple" src={assets.purple} alt="" />
      <div className="hero-text reveal">
        <h1>
          The <Underline>thinkers</Underline> and
          <br />
          doers were <Highlight color="pink">changing</Highlight>
          <br />
          the <Highlight>status</Highlight> Quo with
        </h1>
        <p>
          We are a team of strategists, designers communicators, researchers.
          Together, we belive that progress only happapens when you refuse to
          play things safe.
        </p>
      </div>
      <div className="hero-people" aria-hidden="true">
        {heroPeople.map(([src, className]) => (
          <img src={src} className={className} key={className} alt="" />
        ))}
      </div>
    </section>
  );
}

function ReadMore() {
  return (
    <a className="read-more" href="#services">
      Read more <span />
    </a>
  );
}

function StoryIntro() {
  return (
    <section className="story story-intro" id="studio">
      <div className="story-copy reveal">
        <h2>
          Tomorrow should
          <br />
          be better than <Highlight>today</Highlight>
        </h2>
        <p>
          We are a team of strategists, designers communicators, researchers.
          Together, we belive that progress only happapens when you refuse to
          play things safe.
        </p>
        <ReadMore />
      </div>
      <div className="story-image-wrap story-image-right">
        <img className="triangle triangle-top" src={assets.triangle} alt="" />
        <img className="circle-photo" src={assets.meeting} alt="Team in a strategy meeting" />
      </div>
    </section>
  );
}

function StoryProgress() {
  return (
    <section className="story story-progress">
      <img className="main-curve" src={assets.curve} alt="" />
      <div className="story-image-wrap story-image-left">
        <img className="triangle triangle-left" src={assets.triangle} alt="" />
        <img className="triangle triangle-bottom" src={assets.triangle} alt="" />
        <img className="circle-photo" src={assets.work} alt="People working together" />
      </div>
      <div className="story-copy reveal">
        <h2>
          <Highlight>See</Highlight> how we can
          <br />
          help you <Underline>progress</Underline>
        </h2>
        <p>
          We add a layer of fearless insights and action that allows change
          makers to accelerate their progress in areas such as brand, design,
          digital, comms and social research.
        </p>
        <ReadMore />
      </div>
    </section>
  );
}

function Offers() {
  return (
    <section className="offers" id="services">
      <img className="offer-curve" src={assets.curve} alt="" />
      <h2 className="reveal">
        What we <Highlight>can</Highlight>
        <br />
        <Underline>offer</Underline> you!
      </h2>
      <div className="offer-list">
        {offerRows.map(([meta, title], index) => (
          <a className="offer-row" href="#contact" key={title}>
            <p>{meta}</p>
            <h3>
              {title}
              {index === 2 && <img className="offer-badge" src={assets.badge} alt="" />}
            </h3>
            <span aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      {testimonialPeople.map(([src, className]) => (
        <img src={src} className={className} key={className} alt="" />
      ))}
      <h2 className="reveal">
        <Highlight>What</Highlight> our customer
        <br />
        says <Underline>About Us</Underline>
      </h2>
      <blockquote>
        <span className="quote quote-start">“</span>
        Elementum delivered the site with the timeline as they requested. Inthe
        end, the client found a 50% increase in traffic with in days since its
        launch. They also had an impressive ability to use technologies that the
        company hasnt used, which have also proved to be easy to use and reliable
        <span className="quote quote-end">”</span>
      </blockquote>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-lines" />
      <img className="purple-shape footer-purple" src={assets.purple} alt="" />
      <div className="newsletter reveal">
        <h2>
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p>To make your stay special and even more memorable</p>
        <button>Subscribe Now</button>
      </div>
      <div className="footer-grid">
        <div>
          <h3>Company</h3>
          <a href="#home">Home</a>
          <a href="#studio">Studio</a>
          <a href="#services">Service</a>
          <a href="#blog">Blog</a>
        </div>
        <div>
          <h3>Terms & Policies</h3>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#explore">Explore</a>
          <a href="#accessibility">Accessibility</a>
        </div>
        <div>
          <h3>Follow Us</h3>
          <a href="#instagram">Instagram</a>
          <a href="#linkedin">LinkedIn</a>
          <a href="#youtube">Youtube</a>
          <a href="#twitter">Twitter</a>
        </div>
        <div>
          <h3>Terms & Policies</h3>
          <p>149Bw Fulton ste, STE<br />2D Chicago, IL 63867.</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </div>
      </div>
      <small>©2023 Elementum. All rights reserved</small>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StoryIntro />
        <StoryProgress />
        <Offers />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
