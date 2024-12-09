import React from "react";
import {
  FaPython as pythonLogo,
  FaNodeJs as expressLogo,
  FaReact as reactLogo,
  FaJava as javaLogo,
  FaGithub as githubLogo,
  FaPlay as liveLogo,
} from "react-icons/fa";
import {
  BiLogoFlask as flaskLogo,
  BiLogoTypescript as typescriptLogo,
} from "react-icons/bi";
import { RiNextjsFill as nextjsLogo } from "react-icons/ri";
import {
  SiAwslambda as lambdaLogo,
  SiAmazondynamodb as dynamodbLogo,
  SiAmazons3 as s3Logo,
  SiServerless as sstLogo,
  SiGithubactions as githubactionsLogo,
  SiMysql as mysqlLogo,
  SiAmazonrds as rdsLogo,
  SiJavascript as javascriptLogo,
} from "react-icons/si";
import {
  CiGlobe as cloudfrontLogo,
  CiCirclePlus as optionsButton,
} from "react-icons/ci";
import type { IconProps } from "../types";

const iconMap: Record<string, React.ComponentType> = {
  python: pythonLogo,
  express: expressLogo,
  flask: flaskLogo,
  typescript: typescriptLogo,
  nextjs: nextjsLogo,
  lambda: lambdaLogo,
  dynamodb: dynamodbLogo,
  s3: s3Logo,
  sst: sstLogo,
  "github actions": githubactionsLogo,
  mysql: mysqlLogo,
  rds: rdsLogo,
  cloudfront: cloudfrontLogo,
  javascript: javascriptLogo,
  react: reactLogo,
  java: javaLogo,
  github: githubLogo,
  live: liveLogo,
  options: optionsButton,
};

const renderIcon = (name: string) => {
  const IconComponent = iconMap[name];
  return IconComponent ? <IconComponent /> : null;
};

const Icon: React.FC<IconProps> = ({ name, nametag = false }) => {
  return (
    <a>
      {renderIcon(name)}
      {nametag && <div>{name}</div>}
    </a>
  );
};

export default Icon;
