import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';

export const Boton: React.FC<React> = ({ type, value, ...otros }) => {
  return <input type="button" value={value} {...otros} />;
};
