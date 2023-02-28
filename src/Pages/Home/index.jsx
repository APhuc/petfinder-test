import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import productApi from "../../Api/productApi";
import Header from "../../Components/Header";

import InfiniteScroll from "react-infinite-scroll-component";
import CardItem from "../../Components/CardItem";
import Skeleton from "../../Components/Skeleton";
import "../../Styles/Pages/Home/style.css";

export default function HomePage() {
  const { access_token, token_type } = useSelector((state) => state.user);
  const [state, setState] = useState({
    animals: [],
    pagination: {},
  });
  const [hasMore, setHasMore] = useState(true);

  const getProduct = async () => {
    const TOKEN = `${token_type} ${access_token}`;
    const config = {
      headers: {
        Authorization: `${TOKEN}`,
        "Content-Type": "application/json",
      },
      params: { limit: 60, page: 1 },
    };
    const post = await productApi.getAll(config);
    console.log(post, "Postssss");
    setState(post);
  };
  const loadMoreProduct = async () => {
    if (state?.pagination?._links?.next?.href) {
      const nextLink = state?.pagination?._links?.next?.href;
      const TOKEN = `${token_type} ${access_token}`;
      const config = {
        headers: {
          Authorization: `${TOKEN}`,
          "Content-Type": "application/json",
        },
      };
      const product = await productApi.getMore(nextLink, config);

      setState((prev) => ({
        ...prev,
        animals: prev.animals.concat(product?.animals),
        pagination: product?.pagination,
      }));
    }
  };
  useLayoutEffect(() => {
    getProduct();
  }, []);
  const fetchMoreData = () => {
    if (state.animals.length < state.pagination.total_count) {

      loadMoreProduct();
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
          loader={<Skeleton/>}
          scrollableTarget="scrollableDiv">
          <div className="gallery">
            {state?.animals?.map((item, index) => {
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
