export function createTitle(
    text: string
){
    const title =
        document.createElement('h1');

        title.textContent =
            text;

        return title;
}