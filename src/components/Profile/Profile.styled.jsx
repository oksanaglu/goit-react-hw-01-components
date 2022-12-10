import styled from 'styled-components';

export const Card = styled.div`
    margin: 10px auto;
    width: 300px;
    background-color: #fafafa;
    border-radius: 5px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    overflow: hidden;    
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
`;

export const UserName = styled.p`
    padding-top: 10px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 20px;
    font-size: 24px;
    font-weight: 700;
`;

export const Avatar = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: cadetblue;
`;

export const UserTag = styled.p`
    text-align: center;
    justify-content: center;
    color: rgb(83, 136, 234);
    font-size: 18px;
    font-weight: 500;
    margin: 0;
`;

export const Userlocation = styled.p`
    text-align: center;
    justify-content: center;
    color: rgb(83, 136, 234);
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;     
`;

export const StatsItem = styled.li`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    width: 100%;
    background-color: #f0f0f0;
`;

export const Label = styled.span`
    font-weight: 600;
    color:rgb(83, 136, 234);
`;

export const Quantity = styled.span`
    margin-top: 5px;
    font-size: 16px;
    font-weight: 700;
`;