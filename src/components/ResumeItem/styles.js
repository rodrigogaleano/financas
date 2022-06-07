import styledComponents from "styled-components";

export const Container = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    padding 5px 15px;
    width: 30%;

    @media (max-width: 768px) {
        width: 20%;
    }

    p {
        font-size: 12px;
    }

    svg {
        display: none;
    }
`;

export const Header = styledComponents.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px 0;

    svg {
        width: 25px;
        height: 25px;
    }
`;

export const HeaderTitle = styledComponents.p`
    font-size: 20px;
`;

export const Total = styledComponents.span`
    font-size: 30px;
    font-weight: bold;
`;