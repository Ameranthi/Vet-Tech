//This is a Javascript file for the function to sanitize a users input.

/**
 * The sanitizeHTML function takes a users input and checks it for any instances where HTML is going to be injected
 * into the page and replaces it with the tags.
 * @param {HTMLElement} input - input to sanitize
 * @returns {String} - sanitized HTMLElement with tags
 */
export function sanitizeHTMLTags(input) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    "/": '&#x2F;',
};
  const reg = /[&<>"'/]/ig;
  return trimString(input.replace(reg, (match)=>(map[match])));
  }

/**
 * Similar function to the first HTML sanitization but replaces the tags with whitespace instead.
 * @param {HTMLElement} input - input to sanitize without tag
 * @returns {String} - sanitized HTMLElement with no tags
 */
  export function sanitizeHTMLNoTags(input) {
    const map = {
      '&': ' ',
      '<': ' ',
      '>': ' ',
      '"': ' ',
      "'": ' ',
      "/": ' ',
  };
    const reg = /[&<>"'/]/ig;
    return trimString(input.replace(reg, (match)=>(map[match])));
    }

/**
 * This trimString function takes an HTMLElement input and replaces extra whitespace with a single white space
 * @param {HTMLElement} input - HTMLElement to trim
 * @returns {String} - HTMLElement without whitespaces
 */
  export function trimString(input){
    var string = input.replace(/\s+/g, " ");;
    return string.trim();
  }