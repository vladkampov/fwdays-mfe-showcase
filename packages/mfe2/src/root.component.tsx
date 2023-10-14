import { Card, Col, Row } from "antd";
import zsu from "./img/zsu.png";
import gepete from "./img/gepete.png";
import shitiknow from "./img/shitiknow.png";
import { useFeatureToggles } from "./featureTogglesContext";

const data = [
  {
    title: "Чи можна їсти Олів'є?",
    img: shitiknow,
    description: "Давайте спитаємо Щіт ай ноу Live",
  },
  {
    title: "Послухайте Подкаст ЖеПеТе",
    img: gepete,
    description: "Ну Будь ласка",
  },
  {
    title: "Давайте донатити на ЗСУ",
    img: zsu,
    description: "Терміново!",
  },
];
export default function Root(props) {
  const featureToggles = useFeatureToggles();

  // eslint-disable-next-line no-console
  console.log("These are feature toggles: ", featureToggles);

  const isNewCardDesignEnabled = featureToggles.toggles["newCardDesign"];
  const isNewGorillaEnabled = featureToggles.toggles["newGorilla"];

  return (
    <section>
      {isNewGorillaEnabled && <p>🤡</p>}
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
