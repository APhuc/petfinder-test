import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../Api/productApi";
import Header from "../../Components/Header";

import "../../Styles/Pages/Home/style.css";
import Data from "../../Model/animals.json";
import CardItem from "../../Components/CardItem";

export default function HomePage() {
  const { access_token, token_type } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [state,setState] = useState({
    animals:[],
    pagination: {}
  })

  console.log(Data);
  // const getProduct = async () => {
  //   const TOKEN = `${token_type} ${access_token}`;
  //   const config = {
  //     headers: { Authorization: `${TOKEN}`, "Content-Type": "application/json" },
  //     params: { limit: 5, page: 2 },
  //   };
  //   const post = await productApi.getAll(config);
  //   console.log(post, "Postssss");
  //   setState(post)
  // };
  // useLayoutEffect(() => {
  //   getProduct();
  // }, []);
  return (
    <div className="home-page">
      <Header />

      <div className="container">
        <div className="gallery">
          {Data.animals?.map((item, index) => {
            return (
              <div key={index}>
                <CardItem
                  url={item?.photos[0]?.full}
                  breeds={item?.breeds}
                  species={item?.species}
                  name={item?.name}
                  description={item?.description}
                  age={item.age}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
