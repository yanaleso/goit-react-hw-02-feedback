import styled from 'styled-components'

export const Button = styled.button`
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  border-color: ${p => p.theme.colors.border};
  background-color: ${p => p.theme.colors.white};
  :not(:last-child) {
    margin-right: ${p => p.theme.space[2]}px;
  };
  cursor: pointer;
  :active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;