/**
 * NovaSploit fork note:
 * The inherited updater queried the original upstream project's releases.
 * That is incorrect for this fork and can present misleading update notices.
 * Keep the class/API intact until a NovaSploit-owned update endpoint exists.
 */
class UpdateChecker {
    constructor() {
        this.disabled = true;
        try {
            require("electron").ipcRenderer.send(
                "log",
                "info",
                "NovaSploit updater is disabled until an official NovaSploit release feed is configured."
            );
        } catch (_) {
            // The renderer may not be fully initialized; disabling updates is safe.
        }
    }
}

module.exports = { UpdateChecker };
