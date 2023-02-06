import React from 'react';
import { Gear } from '../../types/gear';

type Props = {
  cloth: Gear,
  value: string,
};

export const OptionsButton: React.FC<Props> = ({ cloth, value }) => {
  const { name } = cloth;

  return (
    <option
      value={value}
    >
      {name}
    </option>
  );
};
