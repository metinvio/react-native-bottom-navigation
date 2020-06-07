import {View} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  borderRadius,
  layout,
  bg,
} from 'styled-system';

const Box = styled(View)(
  compose(flexbox, space, color, size, borderRadius, layout, bg),
);

export default Box;
