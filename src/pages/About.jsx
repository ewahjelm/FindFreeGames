import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="content">
        <p className="content-header">About us</p>
        <div className="content-body">
          <img src="./public/girl.jpg" />

          <div className="right">
            <p className="subtitle">
              Our site is powered by the FreeToGame API, which provides a
              constantly updated list of free games available for PC and web
              browsers. <br />
              Whether you're into action, RPGs, strategy, or casual games, we
              make it easy to browse, filter, and find games that match your
              style. We don’t host any games ourselves — instead, we connect you
              directly to the official game pages so you can start playing right
              away. No hidden costs, no sign-ups, just free games curated and
              made accessible for everyone. Our mission is simple: make free
              gaming easier to find and more fun to explore.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
