import styledComponents from "styled-components";

export const Container = styledComponents.div`
    max-width: 1200px;
    margin: 20px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 768px) {
        display: grid;
    }
`;

export const InputContent = styledComponents.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styledComponents.label``;

export const Input = styledComponents.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`; 