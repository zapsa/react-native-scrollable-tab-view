const React = require("react");
const ReactNative = require("react-native");
const { TouchableNativeFeedback, View } = ReactNative;

const Button = props => {
  return (
    <TouchableNativeFeedback
      delayPressIn={0}
      background={TouchableNativeFeedback.SelectableBackground()} // eslint-disable-line new-cap
      ref={props.tabBarButtonProps.generateRef(props.tabKey)}
      {...props}
    >
      {props.children}
    </TouchableNativeFeedback>
  );
};

module.exports = Button;
