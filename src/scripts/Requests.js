import { getRequests, saveCompletion} from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
import { getPlumbers } from "./dataAccess.js"

const convertRequestToListElement = (request) => {
    const plumbers = getPlumbers()
    return `
    <li>
        ${request.description}
        <div="container--3">
            <select class="plumbers" id="plumbers">
            <option value="">Choose</option>
            ${plumbers.map(plumber => {return `<option value="${request.id}--${plumber.id}--${request.description}">${plumber.name}</option>`}).join("")}
            </select>
                    
                    <button class="request__delete"
                            id="request--${request.id}">
                        Delete
                    </button>
        </div>
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

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId, description] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = { 
                rId: requestId,
                plumberId: plumberId,
                date_created: Date.now(),
                description: description
            }

            saveCompletion(completion)
                .then(() => {
                    deleteRequest(parseInt(requestId))
                })
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
        }
    }
)

