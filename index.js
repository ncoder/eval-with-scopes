Object.defineProperty(exports, "__esModule", { value: true });
exports.evalWithScopes = void 0;
/**
 *
 * @param {string} expr
 * @param  {...any} scopes
 * @returns {any}
 */
function evalWithScopes(expr, ...scopes) {
    for (let i = scopes.length - 1; i >= 0; i--) {
        expr = `with(scopes[${i}]) { ${expr} }`;
    }
    return eval(expr);
}
exports.evalWithScopes = evalWithScopes;
