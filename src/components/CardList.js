import React, { useEffect, useState } from "react";
import Card from "./Card";
import styled from "@emotion/styled";
import { getCards } from "../api/cardListApi";

const CardListStlye = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCards(); //api폴더에 cardListApi를 불러오라 (호출)
        console.log(data); //console로 확인해 보자.
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <CardListStlye>
      {cards.map(card => (
        <Card
          key={card.id}
          imgPath={card.imgPath}
          title={card.title}
          tags={card.tags}
          id={card.id}
        />
      ))}
    </CardListStlye>
  ); //map은 key가 꼭 있어야한다.
};

export default CardList;
