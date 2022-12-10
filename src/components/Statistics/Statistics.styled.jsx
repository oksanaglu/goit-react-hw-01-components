import styled from 'styled-components';

export const Container = styled.section` 
    margin: 40px auto 0 auto;
    width: 300px;
    background-color: #fafafa;
    border-radius: 5px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    overflow: hidden;
`;

export const Title = styled.h2`
    padding: 10px 0;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: rgb(83, 136, 234);
    margin: 0;
    padding: 0;   
   
`;

export const StatItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 0;
    width: 100%; 
    color: white; 
    border: 1px solid ;    
`;

export const Percentage = styled.span`
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
    color: white;
`;

export const Label = styled.span``;
