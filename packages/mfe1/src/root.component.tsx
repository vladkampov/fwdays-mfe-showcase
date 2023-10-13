import { Timeline, Typography } from "antd";

export default function Root(props) {
  return (
    <div>
      <Typography.Title level={3}>
        Як готуватись до презентацій?
      </Typography.Title>
      <Timeline
        items={[
          {
            children: "Анжуманія",
          },
          {
            children: "Прес качат",
          },
          {
            children: "Бегіт",
          },
          {
            color: "green",
            children: "Обняти горилу",
          },
        ]}
      />
    </div>
  );
}
