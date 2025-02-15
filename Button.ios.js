const React = require("react");
const ReactNative = require("react-native");
const { TouchableOpacity, View } = ReactNative;

const Button = props => {
  console.log("Props", props);
  return (
    <TouchableOpacity
      ref={props.tabBarButtonProps.generateRef(props.tabKey)}
      {...props}
    >
      {props.children}
    </TouchableOpacity>
  );
};

module.exports = Button;
