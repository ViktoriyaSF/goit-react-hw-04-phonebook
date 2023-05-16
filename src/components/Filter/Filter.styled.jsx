import styled from 'styled-components';
import { Label } from 'components/ContactForm/ContactForm.styled';

export const LabelFilter = styled(Label)`
  padding: 0 15px;
  margin: 20px auto;
  display: flex;
  gap: 10px;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
