/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * Responds to a MESSAGE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
function onMessage(event) {
    // Determine if user entered any argument text
    if (event.message.argumentText) {

        // Create variable arg to store users entered text
        // && trim white-space
        var arg = event.message.argumentText.trim();

        // Create Regular Expression for integer
        var integerRegex = new RegExp(/^\d+$/);

        // Is the argument text an integer
        if (integerRegex.test(arg)) {

            // Create variable to store result off api call
            var trivia = NumbersApi.getTrivia(arg);

            // Inject result of API call into chat room or DM
            // using Simple Text Message format
            return { text: trivia };

        // Argument text is not an integer
        } else {
            return { text: getHelpMessage() };
        }
    // User did not enter argument text
    } else {
        return { text: getHelpMessage() };
    }
}

var NumbersApi = {
    getTrivia: function(arg) {

        // Use Google Apps Script UrlFetchApp.fetch method
        var response = UrlFetchApp.fetch('http://numbersapi.com/' + arg);

        // Parse the text of the API response
        var returnResponse = response.getContentText();
        return returnResponse;
    }
};

function getHelpMessage() {
    return 'Please enter an integer to get it\'s trivia';
}

/**
 * Responds to an ADDED_TO_SPACE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */
function onAddToSpace(event) {
    return { text: 'Thank you for adding me, \' + event.user.displayName + \'!' };
}

/**
 * Responds to a REMOVED_FROM_SPACE event in Hangouts Chat.
 *
 * @param {Object} event the event object from Hangouts Chat
 */

function onRemoveFromSpace(event) {
    // eslint-disable-next-line no-console
    console.info('Bot removed from ', event.space.name);
}

