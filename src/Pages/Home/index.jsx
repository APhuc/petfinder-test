import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../../Api/productApi";
import Header from "../../Components/Header";

import "../../Styles/Pages/Home/style.css";
import Data from "../../Model/animals.json";
import CardItem from "../../Components/CardItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default function HomePage() {
  const { access_token, token_type } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const [state, setState] = useState({
  //   animals: [],
  //   pagination: {},
  // });
  const [state, setState] = useState(Data);
  const [hasMore, setHasMore] = useState(true);

  // const getProduct = async () => {
  //   const TOKEN = `${token_type} ${access_token}`;
  //   const config = {
  //     headers: { Authorization: `${TOKEN}`, "Content-Type": "application/json" },
  //     params: { limit: 60, page: 1 },
  //   };
  //   const post = await productApi.getAll(config);
  //   console.log(post, "Postssss");
  //   setState(post)
  // };
  // useLayoutEffect(() => {
  //   getProduct();
  // }, []);
  const fetchMoreData = () => {
    if (state.animals.length < state.pagination.total_count) {
      setState((prev) => ({ ...prev, animals: prev.animals.concat(Data.animals), pagination: Data.pagination }));
    } else {
      setHasMore(false);
    }
  };
  return (
    <div className="home-page">
      <Header />
      <div className="container">
        <InfiniteScroll
          next={fetchMoreData}
          dataLength={state?.animals.length}
          hasMore={hasMore}
          loader={<h4 >Loading...</h4>}
          scrollableTarget="scrollableDiv">
          <div className="gallery">
            {state.animals?.map((item, index) => {
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
        </InfiniteScroll>
      </div>
    </div>
  );
}
