import orderImg from "../assets/online-shopping.svg";
import deliveryImg from "../assets/delivery-man.svg";
import qualityImg from "../assets/brand.svg";

const Features = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-12 my-8">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
        <div className="bg-orange-300 rounded-full p-6">
          <img src={orderImg} className="w-12 h-12" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800 py-3">
            Easy To Order
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
        <div className="bg-orange-300 rounded-full p-6">
          <img src={deliveryImg} className="w-12 h-12" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800 py-3">
            Fastest Delivery
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
        <div className="bg-orange-300 rounded-full p-6">
          <img src={qualityImg} className="w-12 h-12" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800 py-3">
            Best Quality
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
