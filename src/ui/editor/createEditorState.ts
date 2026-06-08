export function createEditorState() {
    
    let selectedEntityId = null;

    let collapsedGroups = {};

    let collapsedComponents = {};

    let isInteracting = false;

    const listeners = [];

    function notify() {
        listeners.forEach(
            listener => listener()
        )
    }

    function notifyChange() {
        notify();
      }

    function beginInteraction() {
        isInteracting = true;
    }

    function endInteraction() {

        isInteracting =
          false;
      
        notify();
      }

      function getIsInteracting() {

        return isInteracting;
      }

    function getSelectedEntityId() {
        return selectedEntityId;
    }

    function selectEntity(id) {
        selectedEntityId = id;
        notify();
    }

    function isComponentCollapsed(entityId, componentType){
        return collapsedComponents[`${entityId}:${componentType}`] 
                === true;
    }

    function toggleComponent(entityId, componentType) {
        const key =
            `${entityId}:${componentType}`;

            collapsedComponents[key] =
                !collapsedComponents[key];

            notify();

    }

    function isGroupCollapsed(type){
        return collapsedGroups[type] === true;
    }

    function toggleGroup(type){
        collapsedGroups[type] = 
            !collapsedGroups[type];

            notify();
    }

    function subscribe(listener) {
        listeners.push(listener);
    }

    return {
        getSelectedEntityId,
        selectEntity,
        isGroupCollapsed,
        isComponentCollapsed,
        toggleComponent,
        toggleGroup,
        subscribe,
        notifyChange,

        beginInteraction,
        endInteraction,
        getIsInteracting,
    }
}