import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/teamsdeploymentTab/index.html")
@PreventIframe("/teamsdeploymentTab/config.html")
@PreventIframe("/teamsdeploymentTab/remove.html")
export class TeamsdeploymentTab {
}
