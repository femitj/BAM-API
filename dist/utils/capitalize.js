"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @function capitalize
 * @description capitalize each word
 * @param {string} word
 * @return {function} formatWord
 */
const capitalize = (word) => {
    const formatWord = word
        .toLowerCase()
        .split(' ')
        .map((f) => f.charAt(0).toUpperCase() + f.substring(1))
        .join(' ');
    return formatWord;
};
exports.default = capitalize;
//# sourceMappingURL=capitalize.js.map