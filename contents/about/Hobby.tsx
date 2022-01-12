import React from "react"
import AboutText from "../../components/atomic/AboutText";
import {Heading, UnorderedList, ListItem} from "@chakra-ui/react";

const Hobby: React.FC = () => {
  return (
    <AboutText title="Hobby">
      <Heading size={"md"} py={3}>■音楽</Heading>
      <UnorderedList pl={6}>
        <ListItem>音楽鑑賞</ListItem>
        <ListItem>レコード収集</ListItem>
        <ListItem>DJ(選曲)</ListItem>
        <ListItem>バンド演奏(ドラム)</ListItem>
        <ListItem>etc...</ListItem>
      </UnorderedList>
      <Heading size={"md"} py={3}>■カメラ・写真</Heading>
      <UnorderedList pl={6}>
        <ListItem>Sony a7III</ListItem>
        <ListItem>Canon ae-1(フィルムカメラ)</ListItem>
        <ListItem>Olympus pen ee-2(フィルムカメラ)</ListItem>
      </UnorderedList>
      <Heading size={"md"} py={3}>■コーヒー・喫茶店巡り</Heading>
      <Heading size={"md"} py={3}>■サウナ巡り</Heading>
    </AboutText>
  );
};

export default Hobby;