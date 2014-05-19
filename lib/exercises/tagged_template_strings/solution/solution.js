console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...substitutions) {
    substitutions = substitutions.map(escape);

    var result = "";
    for (var i = 0; i < pieces.length; ++i) {
        result += pieces[i];
        if (i < substitutions.length) {
            result += substitutions[i];
        }
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&#39;")
            .replace(/"/g, "&quot;");
}
