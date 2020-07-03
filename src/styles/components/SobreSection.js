import styled from "styled-components";

const SobreSection = styled.section`
  & {
    padding: var(--gap-xl) 0;
  }

  & h2 {
    margin-bottom: var(--gap-md);
  }

  & p {
    opacity: 80%;
    max-width: 465px;
  }
`;

export default SobreSection;
