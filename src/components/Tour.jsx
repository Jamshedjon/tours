import { useState } from "react";

function Tour({ tour, deleteTour }) {
   const { name, id, image, price, info } = tour;
   const [readMore, setReadMore] = useState(false);
   return (
      <li
         key={id}
         className="flex flex-col w-full md:w-full lg:max-w-[352px] h-min bg-white rounded transition-all hover:shadow-[0_3px_10px_rgb(0,0,0,0.3)] shadow-md "
      >
         <div className="image-wrapper relative">
            <img
               src={image}
               alt={name}
               className="object-cover lg:h-[320px] lg:w-[352px] w-full rounded-t"
            />
            <span className="absolute bg-[#10B981] text-white py-1 px-2 top-0 right-0 rounded-tr">
               ${price}
            </span>
         </div>
         <div className="px-6 py-8">
            <h3 className="text-2xl text-center mb-4">{name}</h3>
            <p className="text-slate-400 inline-block">
               {readMore ? info : ` ${info.substring(0, 100)}...`}
            </p>
            <button
               onClick={() => {
                  setReadMore((prev) => !prev);
               }}
               className="text-green-500 font-bold mb-5 inline-block"
            >
               {!readMore ? "Read More" : "Show less"}
            </button>
            <button
               onClick={() => deleteTour(id)}
               className="border-2 border-emerald-400 block w-full hover:bg-emerald-400 hover:text-white"
            >
               Not Interested
            </button>
         </div>
      </li>
   );
}

export default Tour;
