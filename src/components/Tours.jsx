import Tour from "./Tour";

function Tours({ tours, deleteTour }) {
   return (
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 ">
         {tours.map((tour) => {
            return <Tour key={tour.id} tour={tour} deleteTour={deleteTour} />;
         })}
      </ul>
   );
}

export default Tours;
