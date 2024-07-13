import {useMemo} from 'react';
import {curveBasis, line} from 'd3-shape';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {parse} from 'react-native-redash';
import { ScreenWidth } from '../../utils/Dimension';
// import { ScreenWidth } from '@/utils/dimensions';

const NUM_TABS = 4;
const SCALE = 0.7;
const TAB_BAR_HEIGHT = 64;

const generateTabShapePath = (
  position,
  adjustedHeight,
) => {
  const adjustedWidth = ScreenWidth / NUM_TABS;
  const tabX = adjustedWidth * position;

  const lineGenerator = line().curve(curveBasis);
  const tab = lineGenerator([
    [tabX - 100 * SCALE, 0],
    [tabX - (65 + 150) * SCALE, 0],
    [tabX - (50 - 10) * SCALE, -6 * SCALE],
    [tabX - (50 - 15) * SCALE, (adjustedHeight - 8) * SCALE],
    [tabX + (50 - 15) * SCALE, (adjustedHeight - 8) * SCALE],
    [tabX + (50 - 10) * SCALE, -6 * SCALE],
    [tabX + (65 + 150) * SCALE, 0],
    [tabX + 100 * SCALE, 0],
  ]);

  return `${tab}`;
};

const usePath = () => {
  const insets = useSafeAreaInsets();
  const tHeight = TAB_BAR_HEIGHT + insets.bottom;
  const adjustedHeight = tHeight - insets.bottom;

  const containerPath = useMemo(() => {
    return `M0,0L${ScreenWidth},0L${ScreenWidth},0L${ScreenWidth},${tHeight}L0,${tHeight}L0,0`;
  }, [tHeight]);

  const curvedPaths = useMemo(() => {
    return Array.from({length: NUM_TABS}, (_, index) => {
      const tabShapePath = generateTabShapePath(index + 0.5, adjustedHeight);
      return parse(`${tabShapePath}`);
    });
  }, [adjustedHeight]);

  return {containerPath, curvedPaths, tHeight};
};

export default usePath;
