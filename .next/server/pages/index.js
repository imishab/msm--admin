const CHUNK_PUBLIC_PATH = "server/pages/index.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__b1930e._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_c35022._.js");
runtime.loadChunk("server/chunks/ssr/src_styles_globals_070f83.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/src/pages/index.jsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/src/pages/_document.jsx [ssr] (ecmascript)\", INNER_APP => \"[project]/src/pages/_app.jsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
