import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Input } from '../../UI/atoms/input';

export const InputPlaceHolder: React.FC<React> = ({
  type,
  value,
  onChange,
  name,
  ...otros
}) => {
  return (
    <div>
      <Input type={type} name={name} onChange={onChange} />
    </div>
  );
};
