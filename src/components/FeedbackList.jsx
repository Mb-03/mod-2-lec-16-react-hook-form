import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(feedbacks);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-medium">
        Loading Feedbacks ...
      </div>
    );
  }

  return (
    <div className="">
      {feedbacks.length === 0 ? (
        <p className="text-center text-gray-600">No feedback yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {feedbacks.map((item) => (
            <Link to={`/feedbacks/${item.id}`}>
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h2 className="text-xl font-semibold mb-1">{item.username}</h2>
                <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Email:</strong> {item.email}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Phone:</strong> {item.phone}
                </p>
                <p className="text-gray-700 mt-3 line-clamp-2">
                  {item.website}
                </p>
                <p className="text-gray-400 text-xs mt-3">ID: {item.id}</p>
              </div>
            </Link>
          ))}
        </div>
      )}{" "}
    </div>
  );
};

export default FeedbackList;
