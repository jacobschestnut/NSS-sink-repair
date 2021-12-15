import { SinkRepair } from "./SinkRepair.js"
import { fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#mainContainer")

const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

render()