import { contactMatrix } from './contactMatrix';

export function canLayersCollide(
  sourceLayer,
  targetLayer
) {

  return (
    contactMatrix[sourceLayer]?.[targetLayer] === true
  );
}