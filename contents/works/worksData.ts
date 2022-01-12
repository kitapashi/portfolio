import { WorksCardProps } from "../../components/molecules/WorksCard"
import slsqiita from '../../public/slsqiita.jpeg';
import cfqiita from '../../public/cfqiita.jpeg';
import best2020 from '../../public/2020best.jpeg';
import best2021 from '../../public/2021best.jpg';

const data: WorksCardProps[] = [
  {
    date: "2021-12-30",
    title: "私的2021年ベストアルバム",
    description: "[note]2021年新譜+旧譜のレビュー",
    imageSrc: best2021.src,
    type: "music",
    path: "https://note.com/kitapashi/n/n8175297deb28" 
  },
  {
    date: "2021-01-23",
    title: "CloudFront+API Gateway構成ではHostヘッダに気をつけよう",
    description: "[Qiita]",
    imageSrc: cfqiita.src,
    type: "tech",
    path: "https://qiita.com/folky_records/items/2a231b14c08be82a183a" 
  },
  {
    date: "2020-12-31",
    title: "私的2020年ベストアルバム",
    description: "[note]2020年ベスト新譜のレビュー記事",
    imageSrc: best2020.src,
    type: "music",
    path: "https://note.com/kitapashi/n/nd2e19eb9feac" 
  },
  {
    date: "2020-12-10",
    title: "[Serverless Framework]はじめの一歩の次のポイントを紹介する",
    description: "[Qiita] Serverless Advent Calendar 2020",
    imageSrc: slsqiita.src,
    type: "tech",
    path: "https://qiita.com/folky_records/items/15869693c7d6ec9b1716" 
  },
]

console.log(data);

export default data;