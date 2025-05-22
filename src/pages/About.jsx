import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="content">
        {/* <h1 className="content-header">Let us tell you about this site...</h1> */}
        <div className="content-body">
          <img src="./public/girl.jpg" />

          <div className="right">
            <h3 className="standard-h3">Have you ever grown tired of a game you used to love? <br /></h3>
            <p className="p-text">
              Felt there might be a new fun game out there but don't know where to look?
              Then you're in the right place, my friend!
            </p>
            <p className="p-text">
              What would you say if I told you that you could play for free? <br />
              Our site is powered by the FreeToGame API, which provides a
              continuously updated list of free-to-play games available for PC and web
              browsers from several official publishers and platforms. And no, these are not the only free games in the world. There are many others, but FreeToGame focuses on high-quality, multiplayer, and online games that are completely free to play (not just demos or trials). Isn’t it great!
              Whether you're into action, RPGs, strategy, or casual games, we
              make it easy to browse, filter, and find games that match your
              preferences. We don't host any games ourselves — instead, we direct you
              to the official game pages so that you can start playing right
              away. </p>
            <h3 className="standard-h3">We bring you free games made accessible for everyone</h3>
            <p className="p-text">Our mission is simple: To make free
              gaming easier to find and accessible to everyone. Enjoy!

            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
