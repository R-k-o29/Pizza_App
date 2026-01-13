import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="col-md-10 align-self-center mx-auto">
      <Header />
      <div className="p-4 bg-light shadow">
        <h2 className="text-center">Our story</h2>
        <p>
          We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on
          our Facebook fan page. Fans were given situations where they had to
          come up with wacky and fun excuses. The person with the best excuse
          won the Best Excuse Badge and won Pizzeria’s vouchers. Their
          enthusiastic response proved that Pizzeria’s Fresh Pan Pizza is the
          Tastiest Pan Pizza Ever!
          <br />
          <br />
          Ever since we launched the Tastiest Pan Pizza, ever, people have not
          been able to resist the softest, cheesiest, crunchiest, outsmart
          Domino’s Fresh Pan Pizza. They have been leaving the stage in the
          middle of a performance and even leaving excuses to be disqualified in
          football matches to get their hands on Pizzeria’s Fresh Pan Pizza.{" "}
          <br />
          <br /> We launched Fresh Pan Pizza Best Excuse Awards on our Facebook
          fan page. Fans were given situations where they had to come up with
          wacky and fun excuses. The person with the best excuse won the Best
          Excuse Badge and won Domino’s vouchers. Their enthusiastic response
          proved that Pizzeria’s Fresh Pan Pizza is the Tastiest Pan Pizza Ever.
        </p>
      </div>
      <div className="d-flex">
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1559183533-ee5f4826d3db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBpbmdyZWRpZW50c3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className="bg-light shadow p-5 m-3">
          <h2 className="text-center">Ingredients</h2>
          <p>
            We’re ruthless about goodness. We have no qualms about teaming up a
            day-old lettuce leaf straight from the farm, or steaming a baby
            (carrot). Cut. Chop. Chop. Steam. Stir. Stir. While they’re still
            young and fresh – that’s our motto. It makes the kitchen a better
            place.
          </p>
        </div>
      </div>
      <div className="d-flex">
        <div className="bg-light shadow p-5 m-3">
          <h2 className="text-center">Our Chefs</h2>
          <p>
            They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). They make goodness so good, it doesn’t know what to do with itself. We do though. We send it to you.
          </p>
        </div>
        <div className="p-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1661288474987-1e90159ff2ca?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className="d-flex">
        <div className="p-2">
          <img
            src="https://images.unsplash.com/photo-1550851405-d07690a23a5a?q=80&w=450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="bg-light shadow p-5 m-3 col-7">
          <h2 className="text-center">45 min delivery</h2>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
