import { SinkRepair } from "./SinkRepair.js"
import { fetchCompletion, fetchPlumbers, fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#mainContainer")

const render = () => {
    fetchRequests().then(
        () => {
            fetchPlumbers().then(
                () => {
                    fetchCompletion().then(
                        () => {
                            mainContainer.innerHTML = SinkRepair()
                        }
                    )
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