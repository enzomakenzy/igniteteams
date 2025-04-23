import styled, { DefaultTheme } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  padding: 48px 24px 24px 24px;
`