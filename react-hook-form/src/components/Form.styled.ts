import styled from "styled-components";

export const FormContainer = styled.div`
  width: 350px;
  height: 100%;
  margin: auto;
  padding-top: 10rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    background-color: ${(props) => props.theme["gray-700"]};
    padding: 1rem 2rem;
    border-radius: 6px;
  }

  input {
    border-radius: 6px;
    border: 0;
    padding: 0.65rem;
    margin-top: 1.5rem;

    &:first-child {
      margin-top: 1.5rem;
    }

    &:last-child {
      margin-bottom: 1.5rem;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};
    margin: 1.5rem 0;
    padding: 0.65rem;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.2s, color 0.2s;
    cursor: pointer;

    svg {
      margin-right: 0.5rem;
    }

    &:hover {
      background-color: ${(props) => props.theme["green-300"]};
      /* color: ${(props) => props.theme["green-500"]}; */
      /* border: 1px solid ${(props) => props.theme["green-500"]}; */
    }
  }
`;
