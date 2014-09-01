var escape = (s => 
    s.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;")
);

function html(pieces, ...substitutions) {
    var escapedStrings = substitutions.map(s => escape(s));
    return pieces.reduce((prev, curr, index) => prev + escapedStrings[index-1] + curr);
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
