import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <main>
        <p>About us</p>
        <section>
          <img src="./public/girl.jpg" />
        </section>
        <section>
          <p>
            Our site is powered by the FreeToGame API, which provides a
            constantly updated list of free games available for PC and web
            browsers. <br />
            Whether you're into action, RPGs, strategy, or casual games, we make
            it easy to browse, filter, and find games that match your style. We
            don’t host any games ourselves — instead, we connect you directly to
            the official game pages so you can start playing right away. No
            hidden costs, no sign-ups, just free games curated and made
            accessible for everyone. Our mission is simple: make free gaming
            easier to find and more fun to explore.
          </p>
        </section>
      </main>
    </div>
  );
}

export default About;
