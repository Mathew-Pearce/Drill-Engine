export function syncRuntimeToolbar(
    runtime,
    ui) {
    ui.resetCheckbox.checked =
    runtime.getConfig().resetOnStop;
}