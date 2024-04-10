import { useSelector } from "react-redux";
import { clearItem } from "../utils/slices/cartSlice";
import VerticalCards from "../components/VerticalCards";
import { useDispatch } from "react-redux";
const CartPage = () => {
  const data = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // console.log(data);

  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>All Items Are Here</h2>
      <button
        className="p-4 m-4 rounded-lg bg-blue-400 text-white"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {data?.map((res, index) => (
        <div className="" key={index}>
          <VerticalCards resDtat={res} cartPage />
        </div>
      ))}

<div class="w-[50vw] bg-blue-200 rounded-xl p-4  m-4 shadow-lg">
    <div class="text-gray-700">
        <h2 class="font-bold text-xl mb-3">Bill Details</h2>

        <div class="flex justify-between mb-2">
            <span class="font-semibold">Item Total</span>
            <span class="font-bold">738</span>
        </div>

        <div class="flex justify-between mb-2">
            <span class="font-semibold">Delivery Fee</span>
            <span>3.9 kms 44</span>
        </div>
    </div>

    <div class="text-gray-700 mt-4">
        <h2 class="font-bold text-xl mb-3">Delivery Tip</h2>

        <div class="flex justify-between mb-2">
            <span class="font-semibold">Platform fee</span>
            <span>150</span>
        </div>

        <div class="flex justify-between">
            <span class="font-semibold">GST and Restaurant Charges</span>
            <span>874</span>
        </div>
    </div>

    <div class="flex justify-center gap-4 font-bold mt-5 text-lg">
        <span>TO PAY</span>
        <span>848</span>
    </div>

    <div class="flex justify-center mt-4">
        <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-500 transition duration-300">
            Check Out
        </button>
    </div>
</div>

    </div>
  );
};

export default CartPage;
