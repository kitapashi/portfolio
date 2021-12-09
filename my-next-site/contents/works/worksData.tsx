import { WorksCardProps } from "../../components/molecules/WorksCard"
import pic from '../../public/top.png';
import slsqiita from '../../public/slsqiita.jpeg';
import cfqiita from '../../public/cfqiita.jpeg';
import best2020 from '../../public/2020best.jpeg';

interface WorksData extends WorksCardProps {
  link: string
}


const data: WorksData[] = [
  {
    title: "私的2020年ベストアルバム",
    description: "[note]2020年ベスト新譜のレビュー記事",
    imageSrc: best2020.src,
    type: "music",
    link: "https://note.com/kitapashi/n/nd2e19eb9feac" 
  },
  {
    title: "[Serverless Framework]はじめの一歩の次のポイントを紹介する",
    description: "[Qiita] Serverless Advent Calendar 2020",
    imageSrc: slsqiita.src,
    type: "tech",
    link: "https://qiita.com/folky_records/items/15869693c7d6ec9b1716" 
  },
  {
    title: "CloudFront+API Gateway構成ではHostヘッダに気をつけよう",
    description: "[Qiita]",
    imageSrc: cfqiita.src,
    type: "tech",
    link: "https://qiita.com/folky_records/items/2a231b14c08be82a183a" 
  },
  {
    title: "4",
    description: "fuga",
    imageSrc: pic.src,
    type: "other",
    link: "https://google.com" 
  },
]

export default data;