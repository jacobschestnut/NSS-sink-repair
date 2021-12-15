import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

const convertRequestToListElement = (request) => {
    return `
    <li>
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
`
}


export const Requests = () => {
    const requests = getRequests()
    

let html = `
    <ul>
        ${requests.map((monkey) => convertRequestToListElement(monkey)).join("")}
    </ul>
    `
return html
}

const mainContainer = document.querySelector("#mainContainer")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})