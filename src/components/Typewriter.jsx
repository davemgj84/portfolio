import React, { useMemo } from "react";
import { animated, useTransition } from "react-spring";

const Typewriter = ({ message }) => {
  const items = useMemo(
    () =>
      message.split("").map((letter, index) => ({
        item: letter,
        key: index,
      })),
    [message]
  );
  const transitions = useTransition(items, (item) => item.key, {
    trail: 110,
    from: { display: "none" },
    enter: { display: "" },
  });
  return (
    <>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.span key={key} style={props}>
            {item.item}
          </animated.span>
        );
      })}
    </>
  );
};

export default Typewriter;
