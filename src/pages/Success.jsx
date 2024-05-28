import { PropagateLoader } from "react-spinners";
import { useEffect, useState } from "react";
const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className=" flex flex-col items-center justify-center h-screen text-green-500">
      {loading ? (
        <PropagateLoader color="green" />
      ) : (
        <div>
          <h2 className="text-4xl font-semibold mb-4">Order Succesful !</h2>

          <p>Your order has been successfully placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
