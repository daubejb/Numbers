/**
 * Responds to a MESSAGE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
// eslint-disable-next-line no-unused-vars
function onMessage(event) {
    var message = 'You just said this: "' + event.message.text + '"';
    return { text: message };
}

/**
 * Responds to an ADDED_TO_SPACE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
// eslint-disable-next-line no-unused-vars
function onAddToSpace(event) {
    return { text: 'Thank you for adding me, " + event.user.displayName + "!' };
}

/**
 * Responds to a REMOVED_FROM_SPACE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
// eslint-disable-next-line no-unused-vars
function onRemoveFromSpace(event) {
    // eslint-disable-next-line no-console
    console.info('Bot removed from ', event.space.name);
}

