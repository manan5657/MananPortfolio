import { clientReviews } from "../constants/index.js";

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from My Clients</h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review group">
            <div>
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  {/* Client Image with Hover Blur and Reveal */}
                  <div className="relative">
                    <img
                      src={item.img}
                      alt="reviewer"
                      className="w-12 h-12 rounded-full object-cover transition-all duration-500 group-hover:blur-0 group-hover:scale-110 group-hover:opacity-100 opacity-60 blur-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {item.position}
                    </p>
                  </div>
                </div>

                {/* Stars with Hover Animation */}
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5 transform transition-transform duration-300 group-hover:scale-125 group-hover:text-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
