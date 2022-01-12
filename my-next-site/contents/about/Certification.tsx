import React from "react"
import AboutText from "../../components/atomic/AboutText";
import {Heading, UnorderedList, ListItem} from "@chakra-ui/react";

const Certification: React.FC = () => {
  return (
    <AboutText title="Certification">
      <UnorderedList>
        <ListItem>[2019-10] 応用情報技術者</ListItem>
        <ListItem>[2020-03] AWS Solution Architect Associate(Score:732/1000)</ListItem>
        <ListItem>[2021-10] AWS Developer Associate(Score:905/1000)</ListItem>
      </UnorderedList>
    </AboutText>
  );
};

export default Certification;