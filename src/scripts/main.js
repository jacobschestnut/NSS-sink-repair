import { SinkRepair } from "./SinkRepair.js"
import { fetchPlumbers, fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#mainContainer")

const render = () => {
    fetchRequests().then(
        () => {
            fetchPlumbers().then(
                () => {
                    mainContainer.innerHTML = SinkRepair()
                }
            )
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