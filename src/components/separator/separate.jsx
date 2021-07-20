import React from 'react'
import styled from 'styled-components';

const Bar = styled.div`
  width: 1.5px;
  height: ${({ height }) => height?height+'px': '20px'};
  background-color: #fff;
`;

export default function Separator(props) {

  const { height } = props;

  return (
    <Bar height={height} />
  )
}
