import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FeedbackDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div>
      <div>
        {data && <h2>name: {data.name}</h2>}
        {data && <h2>first name: {data.username}</h2>}
        {data && <h2>last name: {data.lastName}</h2>}
        {data && <h2>created at: {data.createdAt}</h2>}
        {data && <h2>phone number: {data.phone}</h2>}
        {data && <h2>id: {data.id}</h2>}
        {data && <h2>feedback: {data.description}</h2>}
      </div>
    </div>
  );
};

export default FeedbackDetails;
