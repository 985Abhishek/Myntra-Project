import React from "react";
import Homeitem from "../components/Homeitem";
import { useSelector } from "react-redux";
const Home = () => {
  const items = useSelector((store) => store.items);
  
  return (
    <main>
      <div className="items-container"></div>
      {items.map((item) => (
        <Homeitem key={item.id} item={item} />
      ))}
    </main>
  );
};

export default Home;
