export function createEditorState() {
    
    let selectedEntityId = null;

    let collapsedGroups = {};

    let collapsedComponents = {};

    let lockedRegions = {};

    let isContactMatrixOpen =
        false;

    const listeners = [];

    function notify() {
        listeners.forEach(
            listener => listener()
        )
    }

    function notifyChange() {
        notify();
      }

      function lockRegion(name) {

        lockedRegions[name] =
          true;
      }
      
      function unlockRegion(name) {
      
        lockedRegions[name] =
          false;
      
        notify();
      }
      
      function isRegionLocked(name) {
      
        return lockedRegions[name] === true;
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

    function openContactMatrix() {

        isContactMatrixOpen =
          true;
      
        notify();
      }
      
      function closeContactMatrix() {
      
        isContactMatrixOpen =
          false;
      
        notify();
      }
      
      function getIsContactMatrixOpen() {
      
        return isContactMatrixOpen;
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

        openContactMatrix,
        closeContactMatrix,
        getIsContactMatrixOpen,

        lockRegion,
        unlockRegion,
        isRegionLocked,     
    }
}