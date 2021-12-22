import { getCompletions, deleteCompletion } from "./dataAccess.js";

const convertCompletionToListElement = (completion) => {
    return `
    <li>
        ${completion.description}
        <button class="completion__delete" id="completion--${completion.id}">
            Delete
        </button>
    </li>
    `
        }

export const Completions = () => {
    const completions = getCompletions()

    let html = `
    <ul>
        ${completions.map((completion) => convertCompletionToListElement(completion)).join("")}
    </ul>
    `
return html
}

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("completion--")) {
        const [,completionId] = click.target.id.split("--")
        deleteCompletion(parseInt(completionId))
    }
})