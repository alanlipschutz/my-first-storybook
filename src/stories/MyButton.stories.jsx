import MyButton from "./MyButton";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
const ICONS = {
  time: AccessAlarmIcon,
  unit: AcUnitIcon,
};

export default {
  title: "Components/Button",
  component: MyButton,
  argTypes: {
    handleClick: { action: "handleClick" },
    iconName: {
      type: "select",
      options: [undefined, ...Object.keys(ICONS)],
    },
  },
};

const Template = ({ iconName, ...rest }) => {
  const icon = ICONS[iconName];
  return <MyButton icon={icon} {...rest} />;
};
export const Primary = Template.bind({});
Primary.args = {
  content: "click",
  backgroundColor: "white",
  colorButton: "#151724",
  border: "0",
};

export const Secondary = Template.bind({});
Secondary.args = {
  content: "Click",
  backgroundColor: "transparent",
  colorButton: "white",
  border: "1px solid white",
};

export const Warning = Template.bind({});
Warning.args = {
  content: "Click",
  backgroundColor: "#FF3333",
  colorButton: "white",
  border: "0",
};

export const Warning_Secondary = Template.bind({});
Warning_Secondary.args = {
  content: "Click",
  backgroundColor: "transparent",
  colorButton: "#FF3333",
  border: "1px solid #FF3333",
};
