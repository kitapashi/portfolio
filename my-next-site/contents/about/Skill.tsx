import React from "react"
import AboutText from "../../components/atomic/AboutText";
import {Heading, UnorderedList, ListItem} from "@chakra-ui/react";

const Skill: React.FC = () => {
  return (
    <AboutText title="Skill">
      <Heading size={"lg"}>Language</Heading>
      <UnorderedList pl={6}>
        <ListItem>Python</ListItem>
        <ListItem>Javascript</ListItem>
        <ListItem>Typescript</ListItem>
        <ListItem>Golang</ListItem>
        <ListItem>C</ListItem>
      </UnorderedList>
      <Heading size={"lg"}>Backend</Heading>
      <UnorderedList pl={6}>
        <ListItem>フレームワーク
          <UnorderedList>
            <ListItem>Node.js</ListItem>
            <ListItem>Express</ListItem>
            <ListItem>net/http</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>DDD</ListItem>
        <ListItem>アーキテクチャ
          <UnorderedList>
            <ListItem>Layered Architecture</ListItem>
            <ListItem>Onion Architecture</ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
      <Heading size={"lg"}>Infrastructure</Heading>
      <UnorderedList pl={6}>
        <ListItem>AWS
          <UnorderedList>
            <ListItem>Lambda</ListItem>
            <ListItem>ECS</ListItem>
            <ListItem>CloudFront</ListItem>
            <ListItem>SQS</ListItem>
            <ListItem>VPC</ListItem>
            <ListItem>Route53</ListItem>
            <ListItem>etc...</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>IaC
          <UnorderedList>
            <ListItem>CloudFormation</ListItem>
            <ListItem>ServerlessFramework</ListItem>
            <ListItem>Terraform</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>Docker
          <UnorderedList>
            <ListItem>docker-compose</ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </AboutText>
  );
};

export default Skill;