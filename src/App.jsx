import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import Tours from "./components/Tours";
import Loader from "./components/Loader";
import Title from "./components/Title";

function App() {
   const [url, setUrl] = useState("https://course-api.com/react-tours-project");
   const { data, isPending, error } = useFetch(url);
   const [tours, setTours] = useState(null);

   useEffect(() => {
      setTours(data);
   }, [data]);

   const deleteTour = (id) => {
      setTours((prev) => {
         return prev.filter((tour) => {
            return tour.id !== id;
         });
      });
   };
   if (error) {
      return <div>{error}</div>;
   }

   if (isPending) {
      return (
         <>
            <Loader />
         </>
      );
   }

   return (
      <main className="bg-[#f8fafc]">
         <section className="text-center pt-32">
            <Title
               title={tours && tours.length === 0 ? "No Tours" : "Our Tours"}
            />
         </section>
         <section className=" max-w-7xl mx-auto px-3 py-10 min-h-screen ">
            {tours && <Tours tours={tours} deleteTour={deleteTour} />}

            {tours && tours.length === 0 && (
               <div className=" flex flex-col items-center">
                  <button
                     onClick={() => {
                        setTours(data);
                     }}
                     className="border-2 border-emerald-400 block hover:bg-emerald-400 hover:text-white px-2"
                  >
                     Refresh
                  </button>
               </div>
            )}
         </section>
      </main>
   );
}

export default App;
