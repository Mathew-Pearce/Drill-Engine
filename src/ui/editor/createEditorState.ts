export function createEditorState() {
    
    let selectedEntityId = null;

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

    function subscribe(listener) {
        listeners.push(listener);
    }

    return {
        getSelectedEntityId,
        selectEntity,
        subscribe,
    }
}