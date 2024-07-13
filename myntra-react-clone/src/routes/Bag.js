import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import BagSummry from "../component/BagSummry";
import BagItem from "../component/BagItem";
import { useSelector } from "react-redux";
function Bag() {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem item={item}></BagItem>
            ))}
          </div>
          <BagSummry></BagSummry>
        </div>
      </main>
    </>
  );
}

export default Bag;
