import React from "react";
import { Container } from "react-bootstrap";
import CardOneImg from "./AllCourseComponent/CardOneImg";
import CardOneKnowMore from "./AllCourseComponent/CardOneKnowMore";
import CardOneMH from "./AllCourseComponent/CardOneMH";
import CardOneMsg from "./AllCourseComponent/CardOneMsg";
import CardOneTime from "./AllCourseComponent/CardOneTime";

function CardOne() {
  return (
    <div>
      <Container className="border border-Secondary p-0">
        <CardOneImg />
        <CardOneTime />
        <CardOneMH />
        <CardOneMsg />
        <CardOneKnowMore />
      </Container>
    </div>
  );
}

export default CardOne;
