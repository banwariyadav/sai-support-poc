import styled from 'styled-components';

export const TextFieldWrap = styled.div`
  .table {
    border: 0px;
    width: 50px;
  }
`;

export const FieldInput = styled.input`
  border-radius: 5px;
  border: 1px solid #DEE2E3;
  line-height: 22px;
  font-size: 14px;
  padding-left: 5px;
  min-height: 36px;

  &:disabled {
    opacity: .4;
    color: white;
  }
`;

export const FormField  = styled.div`
  width: 50px;
`;
