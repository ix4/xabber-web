// expands dependencies with internal xabber modules
define([
    "xabber-dependencies",
    "xabber-constants",
    "xabber-templates",
    "xabber-utils",
    "xabber-translations-info",
    "xabber-version"
], function(deps, constants, templates, utils, client_translation_progress, version) {
    return _.extend({
        constants: constants,
        templates: templates,
        client_translation_progress: client_translation_progress,
        utils: utils,
        uuid: utils.uuid
    }, version, deps);
});
