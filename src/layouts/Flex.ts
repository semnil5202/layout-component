import { CSSProperties, styled } from 'styled-components';
import Container, { Props as ContainerProps } from './Container';

interface Props extends Omit<ContainerProps, 'display'> {
  $flexDirection?: CSSProperties['flexDirection'];
  $flexWrap?: CSSProperties['flexWrap'];
  $flexBasis?: CSSProperties['flexBasis'];
  $flexGrow?: CSSProperties['flexGrow'];
  $flexShrink?: CSSProperties['flexShrink'];
  $alignItems?: CSSProperties['alignItems'];
  $alignContent?: CSSProperties['alignContent'];
  $justifyContent?: CSSProperties['justifyContent'];
  $justifyItems?: CSSProperties['justifyItems'];
  flex?: CSSProperties['flex'];
  gap?: CSSProperties['gap'];
}

const Flex = styled(Container)<Props>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  flex-basis: ${({ $flexBasis }) => $flexBasis};
  flex-grow: ${({ $flexGrow }) => $flexGrow};
  flex-shrink: ${({ $flexShrink }) => $flexShrink};
  align-items: ${({ $alignItems }) => $alignItems};
  align-content: ${({ $alignContent }) => $alignContent};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  justify-items: ${({ $justifyItems }) => $justifyItems};
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => gap};
`;

export default Flex;
