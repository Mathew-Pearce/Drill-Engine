export function createEditorState() {
    
    let selectedEntityId = null;

    let collapsedGroups = {};

    const listeners = [];

    function notify() {
        listeners.forEach(
            listener => listener()
        )
    }

    function getSelectedEntityId() {
        return selectedEntityId;
    }

    function selectEntity(id) {
        selectedEntityId = id;
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
        toggleGroup,
        subscribe,
    }
}