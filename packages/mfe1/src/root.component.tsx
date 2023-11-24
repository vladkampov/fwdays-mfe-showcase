import { Timeline, Typography } from "antd";

export default function Root(props) {
  return (
    <div>
      <Typography.Title level={3}>How to prepare for the talk</Typography.Title>
      <Timeline
        items={[
          {
            children: "Eath breakfast",
          },
          {
            children: "Do some push ups",
          },
          {
            children: "Actually write code",
          },
          {
            color: "green",
            children: "Embrace the audience",
          },
        ]}
      />
    </div>
  );
}
