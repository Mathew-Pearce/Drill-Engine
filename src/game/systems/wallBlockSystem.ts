import { getEntitiesById } from '../utils/getEntitiesById';
import { getPosition } from '../components/transform/getPosition';
import { processContactEvents} from '../events/processContactEvents'

export function wallBlockSystem(state) {

  processContactEvents(
    state,
    event => {
  
      // wall logic
      if (event.type !== 'contact')
      return;

    const isPlayerWallContact =
      event.sourceLayer === 'player' &&
      event.targetLayer === 'wall';

    if (!isPlayerWallContact)
      return;

    const player =
      getEntitiesById(
        state.entities,
        event.sourceId
      );

    if (
      !player ||
      !player.previousPosition
    ) return;

    const position =
      getPosition(player);

    if (!position)
      return;

    position.x =
      player.previousPosition.x;

    position.y =
      player.previousPosition.y;
    }
  );

  return state;
}