import React from "react";

export const useClickOutside = (
  element,
  conditions = [],
  action = () => {}
) => {
  const clickOutsideHelper = (e, ref, conditions = [], action = () => {}) => {
    if (
      !!ref?.current?.contains &&
      !ref.current.contains(e.target) &&
      conditions.every((condition) => condition)
    ) {
      action();
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      clickOutsideHelper(e, element, conditions, action);
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [element, conditions, action]);
};