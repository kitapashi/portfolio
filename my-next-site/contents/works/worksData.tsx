import { WorksCardProps } from "../../components/molecules/WorksCard"
import slsqiita from '../../public/slsqiita.jpeg';
import cfqiita from '../../public/cfqiita.jpeg';
import best2020 from '../../public/2020best.jpeg';

const data: WorksCardProps[] = [
  {
    title: "私的2020年ベストアルバム",
    description: "[note]2020年ベスト新譜のレビュー記事",
    imageSrc: best2020.src,
    type: "music",
    path: "https://note.com/kitapashi/n/nd2e19eb9feac" 
  },
  {
    title: "[Serverless Framework]はじめの一歩の次のポイントを紹介する",
    description: "[Qiita] Serverless Advent Calendar 2020",
    imageSrc: slsqiita.src,
    type: "tech",
    path: "https://qiita.com/folky_records/items/15869693c7d6ec9b1716" 
  },
  {
    title: "CloudFront+API Gateway構成ではHostヘッダに気をつけよう",
    description: "[Qiita]",
    imageSrc: cfqiita.src,
    type: "tech",
    path: "https://qiita.com/folky_records/items/2a231b14c08be82a183a" 
  },
]

export default data;