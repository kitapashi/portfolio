import React from "react"
import AboutText from "../../components/atomic/AboutText";
import {Heading, UnorderedList, ListItem, Text, Divider} from "@chakra-ui/react";

const Career: React.FC = () => {
  return (
    <AboutText title="Career">
      <Heading id="2019-08-2020-02" py={3}>2019.08~2020.02</Heading>
      <Text>工業用ミシン IoTシステム 管理者用システムの改良(FE/BE)</Text>
      <Heading id="-" size={"lg"} py={3}>利用技術</Heading>
      <UnorderedList>
        <ListItem>フロントエンド
          <UnorderedList>
            <ListItem>AngularJS</ListItem>
            <ListItem>BootStrap</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>バックエンド
          <UnorderedList>
            <ListItem>NodeJS(Express)</ListItem>
            <ListItem>MongoDB</ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
      <Heading id="-" size={"lg"} py={3}>この期間で学んだこと</Heading>
      <UnorderedList>
        <ListItem>Web技術の基礎
          <UnorderedList>
            <ListItem>HTML/CSS</ListItem>
            <ListItem>Javascript</ListItem>
            <ListItem>HTTP</ListItem>
            <ListItem>Linuxの扱い方</ListItem>
            <ListItem>サーバー構築</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>コーディング技術
          <UnorderedList>
            <ListItem>リーダブルなコーディングを心がけるようになった</ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
      <Divider my={4}/>

      <Heading id="2020-01-2020-03" py={3}>2020.01~2020.03</Heading>
      <Text>工業用ミシン IoTシステム 公開WebAPIの機能追加</Text>
      <UnorderedList>
        <ListItem>仕様策定</ListItem>
        <ListItem>実装</ListItem>
        <ListItem>一部評価</ListItem>
      </UnorderedList>
      <Heading id="-" size={"lg"} py={3}>利用技術</Heading>
      <UnorderedList>
        <ListItem>開発言語 : Python3</ListItem>
        <ListItem>インフラ構成：AWS上サーバーレス構成(APIGW+Lambda)</ListItem>
        <ListItem>デプロイにはSAMを利用</ListItem>
      </UnorderedList>
      <Heading id="-" size={"lg"} py={3}>この期間で学んだこと</Heading>
      <UnorderedList>
        <ListItem>AWSの基礎知識
          <UnorderedList>
            <ListItem>この期間でAWS SAAを取得した</ListItem>
            <ListItem>利用したサーバーレス関連サービスのみではなく、
            コンソールを触りながら他のサービスの知識も習得した</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>サーバーレスの概念</ListItem>
        <ListItem>API設計の考え方(REST API)</ListItem>
      </UnorderedList>
      <Divider my={4}/>

      <Heading id="2020-03-2020-08" py={3}>2020.03~2020.08</Heading>
      <Text>産業用工作機械 周辺機器開発
      組込システム開発</Text>
      <UnorderedList>
      <ListItem>一部仕様策定</ListItem>
      <ListItem>詳細設計</ListItem>
      <ListItem>実装</ListItem>
      </UnorderedList>
      <Heading id="-" size={"lg"} py={3}>利用技術</Heading>
      <UnorderedList>
      <ListItem>開発言語 : C<UnorderedList>
      <ListItem>C言語のみで構造体+関数ポインタを利用しオブジェクト指向開発を実施</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>テスト駆動開発によって進行</ListItem>
      <ListItem>継続的なリファクタリングを実施</ListItem>
      </UnorderedList>
      <Heading id="-" size={"lg"} py={3}>この期間で学んだこと</Heading>
      <UnorderedList>
      <ListItem>オブジェクト指向設計の考え方</ListItem>
      <ListItem>デザインパターン</ListItem>
      <ListItem>綺麗なコードを書くことの重要性(変更に対する柔軟性を実感)</ListItem>
      </UnorderedList>
      <Divider my={4}/>

      <Heading id="2020-08-2020-12" py={3}>2020.08~2020.12</Heading>
      <Text>プリンタ関連アプリ
      各国販売会社サーバーとの連携機能追加 バックエンド開発支援</Text>
      <UnorderedList>
      <ListItem>販社共通WebAPIの仕様設計<UnorderedList>
      <ListItem>OAuth2.0を利用した認証フローの構築</ListItem>
      <ListItem>API仕様の各国販社開発担当との擦り合わせ、仕様共通化のための議論</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>アプリ評価用システム開発<UnorderedList>
      <ListItem>要件定義</ListItem>
      <ListItem>詳細設計<UnorderedList>
      <ListItem>UI仕様</ListItem>
      <ListItem>UIバックエンドAPI仕様</ListItem>
      <ListItem>AWS上アーキテクチャ設計</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>実装・単体テスト</ListItem>
      <ListItem>総合評価</ListItem>
      <ListItem>デプロイ</ListItem>
      </UnorderedList>
      </ListItem>
      </UnorderedList>
      <Heading id="-" size={"lg"} py={3}>利用技術</Heading>
      <UnorderedList>
      <ListItem>アプリ評価用システム<UnorderedList>
      <ListItem>UI<UnorderedList>
      <ListItem>開発言語: Javascript(Vue.js)</ListItem>
      <ListItem>インフラ構成: AWS CloudFront + S3による静的サイトホスティング</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>UIバックエンドAPI/販社共通API<UnorderedList>
      <ListItem>開発言語: Python3</ListItem>
      <ListItem>インフラ構成: サーバーレスAPI(APIGW+Lambda)</ListItem>
      <ListItem>APIの実装・管理・デプロイにはServerless Frameworkを利用</ListItem>
      <ListItem>DBはDynamoDBを利用</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>OAuth認証基盤<UnorderedList>
      <ListItem>ALB + AWS Cognito + Lambda</ListItem>
      </UnorderedList>
      </ListItem>
      </UnorderedList>
      </ListItem>
      </UnorderedList>
      <Heading id="-" size={"lg"} py={3}>この期間で学んだこと</Heading>
      <UnorderedList>
      <ListItem>OAuth2.0の認証フロー<UnorderedList>
      <ListItem>Authorization Code Grant</ListItem>
      <ListItem>Implicit</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>Serverless Frameworkによるサーバーレスシステムの構築方法</ListItem>
      <ListItem>CloudFormationによるIaC化(Serverless Frameworkに組み込み)</ListItem>
      <ListItem>単体テスト<UnorderedList>
      <ListItem>Pytest</ListItem>
      <ListItem>moto</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>Cognitoの利用方法<UnorderedList>
      <ListItem>ユーザープールの基本</ListItem>
      <ListItem>トリガーによる各タイミングでの処理</ListItem>
      <ListItem>OIDCを利用した外部サービスログインの活用</ListItem>
      <ListItem>組み込みUIの活用</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>DynamoDBの利用方法<UnorderedList>
      <ListItem>パフォーマンスチューニング</ListItem>
      <ListItem>GSIの設定</ListItem>
      </UnorderedList>
      </ListItem>
      </UnorderedList>
      <Divider my={4}/>

      <Heading id="2020-11-2021-03" py={3}>2020.11~2021.03</Heading>
      <Text>プリンタ関連アプリサポートAPIの開発</Text>
      <UnorderedList>
      <ListItem>要求のチェック</ListItem>
      <ListItem>仕様策定・アプリ開発チームとの合意形成</ListItem>
      <ListItem>開発</ListItem>
      <ListItem>管理用API&amp;運用ツールについても設計/開発</ListItem>
      <ListItem>評価</ListItem>
      <ListItem>デプロイ</ListItem>
      <ListItem>監視方針の策定</ListItem>
      </UnorderedList>
      <Heading id="-" size={"lg"} py={3}>利用技術</Heading>
      <UnorderedList>
      <ListItem>サポートAPI/管理用API共にサーバーレス構成(APIGW+Lambda Serverless Framework)</ListItem>
      <ListItem>CDN利用(CloudFront)<UnorderedList>
      <ListItem>全世界からのアクセスに対してのパフォーマンス向上のため</ListItem>
      <ListItem>キャッシュ方針の検討→9割程度のヒット率となりAPIの性能向上を実現</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>運用ツール開発: Golang</ListItem>
      </UnorderedList>
      <Heading id="-" size={"lg"} py={3}>この期間で学んだこと</Heading>
      <UnorderedList>
      <ListItem>Golangの基本<UnorderedList>
      <ListItem>文法</ListItem>
      <ListItem>ビルド</ListItem>
      <ListItem>単体テスト</ListItem>
      <ListItem>CLIツールとしての開発</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>CloudFrontの利用方法<UnorderedList>
      <ListItem>パラメータチューニング</ListItem>
      <ListItem>CloudFormation組み込み時の勘所</ListItem>
      </UnorderedList>
      </ListItem>
      </UnorderedList>
      <Divider my={4}/>

      <Heading id="2021-04-2021-12-" py={3}>2021.04~2021.12</Heading>
      <Text>プリンタ向け 新規サービスサーバー開発
      (オフショア開発部隊との協業)</Text>
      <Heading id="-" size={"lg"} py={3}>利用技術</Heading>
      <UnorderedList>
      <ListItem>サーバー開発<UnorderedList>
      <ListItem>Typescript</ListItem>
      <ListItem>Express</ListItem>
      <ListItem>Inversify(DIコンテナ)</ListItem>
      <ListItem>Jest(単体テスト)</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>Docker devcontainerによる開発環境の共通化</ListItem>
      <ListItem>設計にドメイン駆動設計(DDD)の考え方を導入<UnorderedList>
      <ListItem>ドメインモデル図の作成</ListItem>
      <ListItem>モデル図とサーバー実装の対応づけ方針を検討、チーム内に展開</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>ECSによるコンテナオーケストレーション</ListItem>
      <ListItem>SQSによる非同期処理の実現</ListItem>
      <ListItem>Redisによるインメモリキャッシュ<UnorderedList>
      <ListItem>分散ロックでもRedisを利用(Redlockアルゴリズム)</ListItem>
      </UnorderedList>
      </ListItem>
      </UnorderedList>
      <Heading id="-" size={"lg"} py={3}>この期間で学んだこと</Heading>
      <UnorderedList>
      <ListItem>ドメイン駆動設計の考え方<UnorderedList>
      <ListItem>各種概念</ListItem>
      <ListItem>実装での表現方法</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>docker-composeの利用方法<UnorderedList>
      <ListItem>ymlの記法</ListItem>
      <ListItem>利用方法</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>Typescriptの基本<UnorderedList>
      <ListItem>型付け</ListItem>
      <ListItem>JSへのビルド</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>オフショアとの協業<UnorderedList>
      <ListItem>コードレビューの観点・意図の伝え方</ListItem>
      <ListItem>サーバー全体の実装方針の作成、共有</ListItem>
      </UnorderedList>
      </ListItem>
      <ListItem>この期間でAWS DVAを取得</ListItem>
      </UnorderedList>
    </AboutText>
  );
};

export default Career;