import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetch_Api } from "./Pages/Fetch_Api";
import "./App.css";

export const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    Fetch_Api(dispatch);
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;


  return (
    <div id="mainContainer">
      {data.map((item) => (
        <div className="card-div" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h5>{item.id}</h5>
          <h3>{item.title}</h3>
          <h4>${item.price}</h4>
          <p>{item.description}</p>
          <h4>{item.category}</h4>
        </div>
      ))}
 </div>
  );
};