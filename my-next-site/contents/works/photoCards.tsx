import { PhotoCard } from "../../components/molecules/PhotoCarousel";
import pic from '../../public/top.jpeg';
import dsc00788 from '../../public/photo/DSC00788.jpeg';
import dsc01058 from '../../public/photo/DSC01058.jpeg';
import dsc01337 from '../../public/photo/DSC01337.jpeg';
import dsc02307 from '../../public/photo/DSC02307.jpeg';
import fh010004 from '../../public/photo/FH010004.jpeg';
import img1177 from '../../public/photo/IMG_1177.jpeg';
import img2697 from '../../public/photo/IMG_2697.jpeg';


const cards: PhotoCard[] = [
  {
    description: "2019-02-01 自宅",
    imageSrc: pic.src,
  },
  {
    description: "2020-04-12 自宅近所",
    imageSrc: dsc00788.src,
  },
  {
    description: "2020-10-09 神戸どうぶつ王国",
    imageSrc: dsc01058.src,
  },
  {
    description: "2020-10-11 直島(香川県)",
    imageSrc: dsc01337.src, 
  },
  {
    description: "2021-11-13 郡上八幡(岐阜県)",
    imageSrc: dsc02307.src,
  },
  {
    description: "2019-07-27 モネの池(岐阜県)",
    imageSrc: fh010004.src,
  },
  {
    description: "2019-02-25 銀山温泉(山形県)",
    imageSrc: img1177.src,
  },
  {
    description: "2019-10-30 自宅",
    imageSrc: img2697.src,
  },
]

export default cards;