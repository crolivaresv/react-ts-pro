import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';

export const Input: React.FC<React> = ({ type, name, onChange, ...otros }) => {
  return <input type={type} name={name} onChange={onChange} {...otros} />;
};
