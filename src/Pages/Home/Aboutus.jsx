import "./Home.css";
import aboutpic from "../../assets/family4.jpg";
function Aboutus() {
  return (
    <div className="Aboutus">
      <div className="AboutusLeft">
        <h3>About us:-</h3>
        <h1>Out Dream is delivery fun, adventure, memories, and nature</h1>
        <p>
          Welcome to Zaph Tours, your gateway to unforgettable travel
          experiences. Founded with a passion for exploration and a commitment
          to excellence, Zaph Tours specializes in crafting personalized
          journeys that reveal the true essence of each destination.
          <br /> <br />
          Whether you're a solo adventurer, a couple seeking romance, or a
          family looking for fun, our tours are designed to meet your unique
          needs and preferences. We believe that travel is more than just
          visiting new places; it's about creating lasting memories and
          connecting with different cultures in meaningful ways.
          <br /> <br />
          Our team at Zaph Tours comprises expert local guides who are not only
          knowledgeable about the regions we visit but also deeply passionate
          about sharing their insights and stories. With years of experience and
          a genuine love for their homeland, our guides provide an enriching
          perspective that transforms ordinary trips into extraordinary
          adventures.
        </p>
      </div>
      <div className="AboutusRight">
        <img src={aboutpic} alt="" />
        <div className="Aboutstats">
          <div>
            <h1>10000+</h1>
            <p>Satisfied Customers</p>
          </div>
          <div>
            <h1>95%</h1>
            <p> Satisfaction Rate</p>
          </div>
          <div>
            <h1>900+</h1>
            <p>Destinations Worldwide</p>
          </div>
          <div>
            <h1>50+</h1>
            <p>Partnership with 50+ Local Communities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
