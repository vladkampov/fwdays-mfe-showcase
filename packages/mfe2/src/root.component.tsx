import { Card, Col, Row } from "antd";
import zsu from "./img/zsu.png";
import gepete from "./img/gepete.png";
import shitiknow from "./img/shitiknow.png";
import gorillaImg from "./img/gorilla.jpg";
import cepibula from "./img/cepibula.png";
import { useFeatureToggles } from "./featureTogglesContext";

const data = [
  {
    title: "Jaka k***a cepibula?",
    img: cepibula,
    description: "Do you actually now this meme?",
  },
  {
    title: "Listen to Podcast ЖеПеТе",
    img: gepete,
    description: "Please",
  },
  {
    title: "Please donate for Ukraine",
    img: zsu,
    description: "ASAP!",
  },
];
export default function Root(props) {
  const featureToggles = useFeatureToggles();

  // eslint-disable-next-line no-console
  console.log("These are feature toggles: ", featureToggles);

  const isNewCardDesignEnabled = featureToggles.toggles["newCardDesign"];
  const isGorillaAppreciator = featureToggles.toggles["gorillaAppreciator"];
  return (
    <section>
      {isGorillaAppreciator && (
        <p>
          <img src={gorillaImg} alt="gorilla aprecciator" />
        </p>
      )}
      {isNewCardDesignEnabled ? (
        <Row gutter={16}>
          {data.map(({ img, title, description }) => (
            <Col span={8} key={title}>
              <Card
                title={title}
                bordered={false}
                cover={<img alt="example" src={img} />}
              >
                {description}
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        data.map(({ title }) => <p key={title}>{title}</p>)
      )}
    </section>
  );
}
