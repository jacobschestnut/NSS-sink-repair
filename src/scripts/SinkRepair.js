import { Requests } from "./Requests.js"
import { Completions } from "./Completions.js"
import { ServiceForm } from "./ServiceForm.js"

export const SinkRepair = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>
        <h2>Service Requests</h2>
        <div class="container--2">
            <label class="label">Description</label>
            <span>  </span>
            <label class="label">Completed By</label>
        </div>
        <section class="serviceRequests">
            ${Requests()}
        </section>
        
        <section class="completions">
            ${Completions()}
        </section>
    `
}
