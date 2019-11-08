"use strict";

import { resolve } from "path";
import { terser } from "rollup-plugin-terser";

export default {
    input: resolve(__dirname, "src", "mv.js"),

    plugins: [
        terser()
    ],

    output: {
        file: resolve(__dirname, "dist", "mv.js"),
        format: "cjs"
    }
};
