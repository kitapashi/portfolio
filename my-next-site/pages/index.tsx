import Layout from '../components/templates/Layout';
import Hero from '../components/molecules/Hero';
import topPic from '../public/top.jpeg';
import top2Pic from '../public/top2.jpeg';
import top3Pic from '../public/top3.jpeg';



const IndexPage = () => {
  return (
    <Layout title="Home | Yuki Kitahashi's Portfolio">
      <Hero image={topPic} 
        title="Yuki Kitahashi" 
        description="
        Brother Industries, Ltd.
        Software Engineer
        "
        link="/about"
        button="About"
        buttonColor="aqua"
        />
      <Hero image={top3Pic} reverse={true}
        title="Works" 
        description="エンジニアリング、写真、記事執筆等"
        link="/works"
        button="Works"
        buttonColor="khaki"
        />
      {/* <Hero image={top2Pic}
        title="(仮)音楽レビューサイト" 
        description="製作中"
        link="https://google.com"
        button="Site"
        buttonColor="palegreen"
      /> */}
    </Layout>
  )
}

export default IndexPage
