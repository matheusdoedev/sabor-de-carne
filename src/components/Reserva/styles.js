import styled from "styled-components";
import SubmitButton from "../../styles/objects/SubmitButton";

export const FormWrapper = styled.form`
  & {
    background: var(--secondary-color);
    padding: var(--gap-xl) 0;

    h2 {
      color: var(--support-color-1);
      margin-bottom: var(--gap-lg);
      text-align: center;
    }

    label,
    input,
    button {
      display: block;
    }

    label {
      color: var(--support-color-1);
      margin-bottom: calc(var(--gap) / 2);
    }

    input,
    textarea {
      border: none;
      border-radius: 4px;
      margin-bottom: var(--gap-sm);
      width: 100%;
      padding: calc(var(--gap) / 2) var(--gap);

      &:focus {
        outline: none;
        filter: brightness(80%);
      }
    }

    textarea {
      height: 150px;
    }

    span {
      text-align: right;
      font-size: 0.75rem;
      opacity: 60%;
    }
  }
`;

export const ReservarBtn = styled(SubmitButton)`
  & {
    padding: calc(var(--gap) / 2) var(--gap-lg);
    background: var(--support-color-1);
    transition: 0.2s;

    &:hover {
      background: var(--support-color-1);
      filter: brightness(80%);
      transition: 0.2s;
    }
  }
`;
