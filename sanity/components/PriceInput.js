import React from "react";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

const createPatchFrom = (value) => {
  return PatchEvent.from(value === "" ? unset() : set(Number(value)));
};

const convertPriceToDollars = (price) => {
  if (!Boolean(price)) {
    return 0;
  }

  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd",
  }).format(price / 100);
};

const PriceInput = (props) => {
  const { type, value, onChange, inputComponent } = props;
  const { title, description, name } = type;

  const handlePriceChange = (evt) => {
    const { value } = evt.target;

    return onChange(createPatchFrom(value));
  };

  const usd = React.useMemo(() => convertPriceToDollars(value), [value]);

  return (
    <div>
      <p>{title} - {usd}</p>
      <p>{description}</p>

      <input
        type={name}
        value={value}
        onChange={handlePriceChange}
        ref={inputComponent}
      />
    </div>
  );
};

export default PriceInput;
