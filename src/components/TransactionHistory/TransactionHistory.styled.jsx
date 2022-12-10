import styled from 'styled-components';


export const Table = styled.table` 
    margin: 20px auto 0 auto;
    width: 300px;
    border-collapse: collapse;
    border-spacing: 0; 
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    overflow: hidden;
`;

export const TableTitle= styled.tr`
    height: 40px;
    background-color: rgb(83, 136, 234);
    text-align: center;
    text-transform: uppercase;
    color: white;
`;

export const TableItem = styled.tr`
    height: 40px;
    text-align: center;
    text-transform: capitalize; 

     &:nth-child(even) {
    background-color: #cbe2e4;
  }

`;
