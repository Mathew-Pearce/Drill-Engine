import { getEntitiesById } from '../utils/getEntitiesById';
import { getComponent } from '../components/core/getComponent';
import { processContactEvents} from '../events/processContactEvents'

export function contactRemovalSystem(state) {

  processContactEvents(
    state,
    event => {
  
        // removal logic
        if (event.type !== 'contact')
        return;

      const source =
        getEntitiesById(
          state.entities,
          event.sourceId
        );

      if (!source)
        return;

      const damage =
        getComponent(
          source,
          'damage'
        );

      if (!damage)
        return;

      if (damage.removeOnContact === true) {
        source.markedForRemoval =
          true;
      }
    }
  );

  return state;
}