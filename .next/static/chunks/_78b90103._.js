(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/Components/SilkBg.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react/no-unknown-property */ __turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-e3cb66e2.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
const hexToNormalizedRGB = (hex)=>{
    const clean = hex.replace("#", "");
    const r = parseInt(clean.slice(0, 2), 16) / 255;
    const g = parseInt(clean.slice(2, 4), 16) / 255;
    const b = parseInt(clean.slice(4, 6), 16) / 255;
    return [
        r,
        g,
        b
    ];
};
const vertexShader = "\nvarying vec2 vUv;\nvarying vec3 vPosition;\n\nvoid main() {\n  vPosition = position;\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n";
const fragmentShader = "\nvarying vec2 vUv;\nvarying vec3 vPosition;\n\nuniform float uTime;\nuniform vec3  uColor;\nuniform float uSpeed;\nuniform float uScale;\nuniform float uRotation;\nuniform float uNoiseIntensity;\n\nconst float e = 2.71828182845904523536;\n\nfloat noise(vec2 texCoord) {\n  float G = e;\n  vec2  r = (G * sin(G * texCoord));\n  return fract(r.x * r.y * (1.0 + texCoord.x));\n}\n\nvec2 rotateUvs(vec2 uv, float angle) {\n  float c = cos(angle);\n  float s = sin(angle);\n  mat2  rot = mat2(c, -s, s, c);\n  return rot * uv;\n}\n\nvoid main() {\n  float rnd        = noise(gl_FragCoord.xy);\n  vec2  uv         = rotateUvs(vUv * uScale, uRotation);\n  vec2  tex        = uv * uScale;\n  float tOffset    = uSpeed * uTime;\n\n  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);\n\n  float pattern = 0.6 +\n                  0.4 * sin(5.0 * (tex.x + tex.y +\n                                   cos(3.0 * tex.x + 5.0 * tex.y) +\n                                   0.02 * tOffset) +\n                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));\n\n  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;\n  col.a = 1.0;\n  gl_FragColor = col;\n}\n";
const SilkPlane = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_s(function SilkPlane(param, ref) {
    let { uniforms } = param;
    _s();
    const { viewport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "SilkPlane.SilkPlane.useLayoutEffect": ()=>{
            const mesh = ref;
            if (mesh.current) {
                mesh.current.scale.set(viewport.width, viewport.height, 1);
            }
        }
    }["SilkPlane.SilkPlane.useLayoutEffect"], [
        ref,
        viewport
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "SilkPlane.SilkPlane.useFrame": (_state, delta)=>{
            const mesh = ref;
            if (mesh.current) {
                const material = mesh.current.material;
                material.uniforms.uTime.value += 0.1 * delta;
            }
        }
    }["SilkPlane.SilkPlane.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                args: [
                    1,
                    1,
                    1,
                    1
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/Components/SilkBg.tsx",
                lineNumber: 117,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                uniforms: uniforms,
                vertexShader: vertexShader,
                fragmentShader: fragmentShader
            }, void 0, false, {
                fileName: "[project]/src/app/Components/SilkBg.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/SilkBg.tsx",
        lineNumber: 116,
        columnNumber: 9
    }, this);
}, "9+vm4t7buSzwDjFaCoyIQC+gsNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$e3cb66e2$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
}));
_c = SilkPlane;
SilkPlane.displayName = "SilkPlane";
const Silk = (param)=>{
    let { speed = 5, scale = 1, color = "#7B7481", noiseIntensity = 1.5, rotation = 0 } = param;
    _s1();
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uniforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Silk.useMemo[uniforms]": ()=>({
                uSpeed: {
                    value: speed
                },
                uScale: {
                    value: scale
                },
                uNoiseIntensity: {
                    value: noiseIntensity
                },
                uColor: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](...hexToNormalizedRGB(color))
                },
                uRotation: {
                    value: rotation
                },
                uTime: {
                    value: 0
                }
            })
    }["Silk.useMemo[uniforms]"], [
        speed,
        scale,
        noiseIntensity,
        color,
        rotation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        dpr: [
            1,
            2
        ],
        frameloop: "always",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SilkPlane, {
            ref: meshRef,
            uniforms: uniforms
        }, void 0, false, {
            fileName: "[project]/src/app/Components/SilkBg.tsx",
            lineNumber: 159,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/Components/SilkBg.tsx",
        lineNumber: 158,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(Silk, "TgWhS48nmTpEsJ6gTVCeXQe2Jk8=");
_c1 = Silk;
const __TURBOPACK__default__export__ = Silk;
var _c, _c1;
__turbopack_context__.k.register(_c, "SilkPlane");
__turbopack_context__.k.register(_c1, "Silk");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/whatsapp.svg (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/whatsapp.a95c3801.svg");}),
"[project]/public/whatsapp.svg.mjs { IMAGE => \"[project]/public/whatsapp.svg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whatsapp$2e$svg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/whatsapp.svg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whatsapp$2e$svg__$28$static__in__ecmascript$29$__["default"],
    width: 800,
    height: 800,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/Hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$SilkBg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/SilkBg.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whatsapp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$whatsapp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/whatsapp.svg.mjs { IMAGE => "[project]/public/whatsapp.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
;
;
;
const Hero = ()=>{
    // const homeRef = useRef<HTMLElement>(null);
    // const [navbarTranslateY, setNavbarTranslateY] = useState(0);
    // const lastScrollY = useRef(0);
    // useEffect(() => {
    //     Aos.init({
    //         duration: 800,
    //         once: true,
    //     });
    //     const handleScroll = () => {
    //         const currentScrollY = window.scrollY;
    //         const scrollDelta = currentScrollY - lastScrollY.current;
    //         if (scrollDelta > 0) {
    //             // Scroll vers le bas
    //             setNavbarTranslateY((prev) => Math.min(prev + scrollDelta, 0));
    //         } else {
    //             // Scroll vers le haut
    //             setNavbarTranslateY((prev) => Math.max(prev + scrollDelta, -64));
    //         }
    //         lastScrollY.current = currentScrollY;
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    // pages/index.tsx
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "top-0  h-auto md:px-[15%] z-10 sticky",
        id: "home",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-100% h-100% ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-[-1] top-0 w-100% h-100%",
                    "data-aos": "fade",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$SilkBg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        speed: 5,
                        scale: 1,
                        color: "#0074D9",
                        noiseIntensity: 1.5,
                        rotation: 0
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Hero.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Hero.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " flex flex-col md:flex-row items-center  justify-center  md:mb-10 md:my-0 h-screen md:w-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " rounded-xl h-auto border border-transparent shadow-sm backdrop-blur-lg flex flex-col items-center md:items-start mt-20 md:mt-0  md:ml-20 p-9",
                        "data-aos": "fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:flex text-xl",
                                children: [
                                    "Bienvenu chez ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/Components/Hero.tsx",
                                        lineNumber: 63,
                                        columnNumber: 80
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Hero.tsx",
                                lineNumber: 63,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-6xl font-bold text-center md:text-left  text-black ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        children: "DIV"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Hero.tsx",
                                        lineNumber: 65,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-info",
                                        children: "LAB"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Hero.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Hero.tsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "my-2 text-md md:text-lg text-center md:text-left",
                                children: "Nous fesons l'impossible avec maitrise"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Hero.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "whatsapp://send?phone=237652509674",
                                target: "_blank",
                                className: "btn  shadow-[5-5-0-[0,0,0,0.6]] shadow-3xl hover:shadow-lg bg-gradient-to-br from-white/50 via-white to-white/60 border-none transition-transform duration-300 hover:-translate-y-1 hover:scale-105 text-black rounded-4xl w-50 md:w-fit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whatsapp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$whatsapp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src,
                                        alt: "",
                                        className: "w-6 h-6 rounded-full mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Hero.tsx",
                                        lineNumber: 74,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Discuter sur Whatsapp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/Hero.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Hero.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Hero.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Components/Hero.tsx",
            lineNumber: 48,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/Components/Hero.tsx",
        lineNumber: 47,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/Title.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Title = (param)=>{
    let { title, className, dataAos, id } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Title.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 800,
                once: true
            });
        }
    }["Title.useEffect"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: "text-2xl uppercase font-bold text-center mb-5 ".concat(className),
        id: id,
        "data-aos": dataAos,
        children: title
    }, void 0, false, {
        fileName: "[project]/src/app/Components/Title.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Title, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Title;
const __TURBOPACK__default__export__ = Title;
var _c;
__turbopack_context__.k.register(_c, "Title");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/lib/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": ()=>cn,
    "debounce": ()=>debounce,
    "formatCurrency": ()=>formatCurrency,
    "formatDate": ()=>formatDate,
    "generateUniqueId": ()=>generateUniqueId,
    "throttle": ()=>throttle,
    "truncateText": ()=>truncateText
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatCurrency(amount) {
    let currency = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "USD", options = arguments.length > 2 ? arguments[2] : void 0;
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        ...options
    }).format(amount);
}
function generateUniqueId() {
    let prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "id";
    return "".concat(prefix, "-").concat(Math.random().toString(36).substring(2, 9));
}
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
}
function formatDate(date, options) {
    return new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        ...options
    }).format(date);
}
function debounce(func, wait) {
    let timeout = null;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const later = ()=>{
            timeout = null;
            func(...args);
        };
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
    };
}
function throttle(func, limit) {
    let inThrottle = false;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(()=>{
                inThrottle = false;
            }, limit);
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/lightswind/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": ()=>Card,
    "CardContent": ()=>CardContent,
    "CardDescription": ()=>CardDescription,
    "CardFooter": ()=>CardFooter,
    "CardHeader": ()=>CardHeader,
    "CardTitle": ()=>CardTitle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lib/utils.js [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, hoverable = false, bordered = false, compact = false, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg bg-background/70 text-card-foreground shadow-sm", bordered ? "border" : "border  ", hoverable ? "transition-shadow duration-200 hover:shadow-md" : "", compact ? "p-3" : "p-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/card.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = (param, ref)=>{
    let { className, spacing = "default", ...props } = param;
    const spacingClasses = {
        compact: "flex flex-col space-y-1 p-4",
        default: "flex flex-col space-y-1.5 p-6",
        relaxed: "flex flex-col space-y-2 p-8"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(spacingClasses[spacing], className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/card.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = (param, ref)=>{
    let { className, as = "h3", size = "default", ...props } = param;
    const Component = as;
    const sizeClasses = {
        sm: "text-lg",
        default: "text-2xl",
        lg: "text-3xl"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", sizeClasses[size], className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = (param, ref)=>{
    let { className, size = "default", ...props } = param;
    const sizeClasses = {
        xs: "text-xs",
        sm: "text-sm",
        default: "text-sm"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground", sizeClasses[size], className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/card.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = (param, ref)=>{
    let { className, removeTopPadding = true, padding = "default", ...props } = param;
    const paddingClasses = {
        none: "p-0",
        sm: "px-4 py-3",
        default: "p-6",
        lg: "p-8"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(paddingClasses[padding], removeTopPadding && padding !== "none" ? "pt-0" : "", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/card.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = (param, ref)=>{
    let { className, align = "center", direction = "row", ...props } = param;
    const alignClasses = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around"
    };
    const directionClasses = {
        row: "flex-row",
        column: "flex-col"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", alignClasses[align], directionClasses[direction], className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/card.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/hooks/use-mobile.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsMobile": ()=>useIsMobile
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMobile.useEffect": ()=>{
            // Fonction qui vérifie si on est sur mobile
            const checkMobile = {
                "useIsMobile.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth <= 768); // seuil mobile
                }
            }["useIsMobile.useEffect.checkMobile"];
            // Vérification au chargement
            checkMobile();
            // Mise à jour quand on resize
            window.addEventListener("resize", checkMobile);
            return ({
                "useIsMobile.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return isMobile;
}
_s(useIsMobile, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/lightswind/carousel-3d.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/Carousel3D.tsx
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lightswind/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/hooks/use-mobile.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Carousel3D = (param)=>{
    let { items, autoRotate = true, rotateInterval = 4000, cardHeight = 500, title = "From Textile to Intelligence", subtitle = "Customer Cases", tagline = "Explore how our textile sensor technology is revolutionizing multiple industries with intelligent fabric solutions tailored to specific needs.", isMobileSwipe = true } = param;
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [touchStart, setTouchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [touchEnd, setTouchEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const minSwipeDistance = 50;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel3D.useEffect": ()=>{
            if (autoRotate && isInView && !isHovering) {
                const interval = setInterval({
                    "Carousel3D.useEffect.interval": ()=>{
                        setActive({
                            "Carousel3D.useEffect.interval": (prev)=>(prev + 1) % items.length
                        }["Carousel3D.useEffect.interval"]);
                    }
                }["Carousel3D.useEffect.interval"], rotateInterval);
                return ({
                    "Carousel3D.useEffect": ()=>clearInterval(interval)
                })["Carousel3D.useEffect"];
            }
        }
    }["Carousel3D.useEffect"], [
        isInView,
        isHovering,
        autoRotate,
        rotateInterval,
        items.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel3D.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Carousel3D.useEffect": (param)=>{
                    let [entry] = param;
                    return setIsInView(entry.isIntersecting);
                }
            }["Carousel3D.useEffect"], {
                threshold: 0.2
            });
            return ({
                "Carousel3D.useEffect": ()=>observer.disconnect()
            })["Carousel3D.useEffect"];
        }
    }["Carousel3D.useEffect"], []);
    const onTouchStart = (e)=>{
        setTouchStart(e.targetTouches[0].clientX);
        setTouchEnd(null);
    };
    const onTouchMove = (e)=>{
        setTouchEnd(e.targetTouches[0].clientX);
    };
    const onTouchEnd = ()=>{
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > minSwipeDistance) {
            setActive((prev)=>(prev + 1) % items.length);
        } else if (distance < -minSwipeDistance) {
            setActive((prev)=>(prev - 1 + items.length) % items.length);
        }
    };
    const getCardAnimationClass = (index)=>{
        if (index === active) return "scale-100 opacity-100 z-20";
        if (index === (active + 1) % items.length) return "md:translate-x-[40%]  translate-x-[7%] sm:translate-x-[2%] scale-95 opacity-60 z-10";
        if (index === (active - 1 + items.length) % items.length) return "md:translate-x-[-40%] translate-x-[-7%] sm:translate-x-[-2%] scale-95 opacity-60 z-10";
        return "scale-90 opacity-0";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "carousel3d",
        className: " bg-transparent min-w-full mx-aut    flex items-center justify-center ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " w-full  sm:p-6 lg:p-8    md:min-w-[1000px] min-w-[300px] max-w-7xl  ",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative  h-[550px]   ",
                onMouseEnter: ()=>setIsHovering(true),
                onMouseLeave: ()=>setIsHovering(false),
                onTouchStart: onTouchStart,
                onTouchMove: onTouchMove,
                onTouchEnd: onTouchEnd,
                ref: carouselRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute  top-0 left-0 w-full h-full flex items-center justify-center ",
                        children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "  absolute top-0 w-full max-w-md transform   transition-all duration-500 ".concat(getCardAnimationClass(index), " "),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "bg-background h-[".concat(cardHeight, "px] border border-info shadow-sm rounded-xl\n                                shadow-[0_5px_20px_rgba(0,200,255,0.6)] hover:shadow-4xl flex flex-col ").concat(index === active ? "transform transition-transform duration-500 hover:scale-105 hover:rotate-1" : index === active + 1 ? "transform transition-transform w-auto duration-500 hover:scale-100 hover:rotate-1" : "transform transition-transform  md:w-100%  duration-500 hover:scale-100 hover:-rotate-1", " "),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative bg-gray-400 p-6 flex rounded-xl  items-center justify-center h-48 overflow-hidden",
                                            style: {
                                                backgroundImage: "url(".concat(item.imageUrl, ")"),
                                                backgroundSize: "cover",
                                                backgroundPosition: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/50 hover:bg-black/70 duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 text-center text-white",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold mb-2",
                                                            children: item.brand.toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-12 h-1 bg-white mx-auto mb-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm ",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-6 flex flex-col bg-black/90 flex-grow shadow-lg backdrop-blur-md",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-1 text-foreground",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-sm font-medium mb-2",
                                                    children: item.brand
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm flex-grow",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2 mb-4",
                                                        children: item.tags.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-1 badge badge-info badge-outline   rounded-full text-xs animate-pulse-slow",
                                                                children: tag
                                                            }, idx, false, {
                                                                fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, item.id, false, {
                                fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all hover:scale-110",
                                onClick: ()=>setActive((prev)=>(prev - 1 + items.length) % items.length),
                                "aria-label": "Previous",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                lineNumber: 228,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all hover:scale-110",
                                onClick: ()=>setActive((prev)=>(prev + 1) % items.length),
                                "aria-label": "Next",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                    lineNumber: 242,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30",
                        children: items.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-2 h-2 rounded-full transition-all duration-300 ".concat(active === idx ? "bg-gray-500 w-5" : "bg-gray-200 hover:bg-gray-300"),
                                onClick: ()=>setActive(idx),
                                "aria-label": "Go to item ".concat(idx + 1)
                            }, idx, false, {
                                fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                                lineNumber: 249,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
            lineNumber: 111,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/carousel-3d.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Carousel3D, "+GRGovmVokGmmQIEWSIrHBw1ylY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$hooks$2f$use$2d$mobile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c = Carousel3D;
const __TURBOPACK__default__export__ = Carousel3D;
var _c;
__turbopack_context__.k.register(_c, "Carousel3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/lightswind/grid-dot-background.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "DotBackground": ()=>DotBackground,
    "GridBackground": ()=>GridBackground,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lib/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const GridBackground = (param)=>{
    let { className, children, gridSize = 20, gridColor = "#e4e4e7", darkGridColor = "#262626", showFade = true, fadeIntensity = 20, ...props } = param;
    _s();
    const [currentGridColor, setCurrentGridColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(gridColor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GridBackground.useEffect": ()=>{
            const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isDarkModeActive = document.documentElement.classList.contains('dark') || prefersDarkMode;
            setCurrentGridColor(isDarkModeActive ? darkGridColor : gridColor);
            const observer = new MutationObserver({
                "GridBackground.useEffect": function(mutations) {
                    mutations.forEach({
                        "GridBackground.useEffect": function(mutation) {
                            if (mutation.attributeName === 'class') {
                                const updatedIsDarkModeActive = document.documentElement.classList.contains('dark');
                                setCurrentGridColor(updatedIsDarkModeActive ? darkGridColor : gridColor);
                            }
                        }
                    }["GridBackground.useEffect"]);
                }
            }["GridBackground.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true
            });
            return ({
                "GridBackground.useEffect": function() {
                    return observer.disconnect();
                }
            })["GridBackground.useEffect"];
        }
    }["GridBackground.useEffect"], [
        gridColor,
        darkGridColor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundSize: gridSize + "px " + gridSize + "px",
                    backgroundImage: "linear-gradient(to right, " + currentGridColor + " 1px, transparent 1px), " + "linear-gradient(to bottom, " + currentGridColor + " 1px, transparent 1px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/Components/lightswind/grid-dot-background.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showFade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black",
                style: {
                    maskImage: "radial-gradient(ellipse at center, transparent " + fadeIntensity + "%, black)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, transparent " + fadeIntensity + "%, black)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/Components/lightswind/grid-dot-background.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/Components/lightswind/grid-dot-background.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/lightswind/grid-dot-background.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(GridBackground, "+Wn16QPGQ2Yq5cFuAqFU6gmFlg0=");
_c = GridBackground;
const DotBackground = (param)=>{
    let { className, children, dotSize = 1, dotColor = "#000", darkDotColor = "#fff", spacing = 20, showFade = true, fadeIntensity = 20, ...props } = param;
    _s1();
    const [currentDotColor, setCurrentDotColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(dotColor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DotBackground.useEffect": ()=>{
            const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isDarkModeActive = document.documentElement.classList.contains('dark') || prefersDarkMode;
            setCurrentDotColor(isDarkModeActive ? darkDotColor : dotColor);
            const observer = new MutationObserver({
                "DotBackground.useEffect": function(mutations) {
                    mutations.forEach({
                        "DotBackground.useEffect": function(mutation) {
                            if (mutation.attributeName === 'class') {
                                const updatedIsDarkModeActive = document.documentElement.classList.contains('dark');
                                setCurrentDotColor(updatedIsDarkModeActive ? darkDotColor : dotColor);
                            }
                        }
                    }["DotBackground.useEffect"]);
                }
            }["DotBackground.useEffect"]);
            observer.observe(document.documentElement, {
                attributes: true
            });
            return ({
                "DotBackground.useEffect": function() {
                    return observer.disconnect();
                }
            })["DotBackground.useEffect"];
        }
    }["DotBackground.useEffect"], [
        dotColor,
        darkDotColor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute flex h-[50rem] w-full items-center justify-center ", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundSize: spacing + "px " + spacing + "px",
                    backgroundImage: "radial-gradient(" + currentDotColor + " " + dotSize + "px, transparent " + dotSize + "px)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/Components/lightswind/grid-dot-background.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showFade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black",
                style: {
                    maskImage: "radial-gradient(ellipse at center, transparent " + fadeIntensity + "%, black)",
                    WebkitMaskImage: "radial-gradient(ellipse at center, transparent " + fadeIntensity + "%, black)"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/Components/lightswind/grid-dot-background.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/Components/lightswind/grid-dot-background.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/lightswind/grid-dot-background.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(DotBackground, "mO67/ZeRdiUsf7/vhb/GBtR2RMk=");
_c1 = DotBackground;
const __TURBOPACK__default__export__ = {
    GridBackground,
    DotBackground
};
var _c, _c1;
__turbopack_context__.k.register(_c, "GridBackground");
__turbopack_context__.k.register(_c1, "DotBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/Realisations.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$carousel$2d$3d$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lightswind/carousel-3d.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$grid$2d$dot$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lightswind/grid-dot-background.tsx [app-client] (ecmascript)");
;
;
;
;
const items = [
    {
        id: 1,
        title: "Site vitrine",
        brand: "Developpement Web",
        description: "Site concu par les ingenieurs de Divlab afin de vous faciliter l'acces au different produits et offres.",
        tags: [
            "React",
            "Next.js",
            "HTML/scss",
            "Tailwindcss"
        ],
        imageUrl: "/assets/projects/4.png",
        link: "/projects/firecat"
    },
    {
        id: 2,
        title: "IA reconnaissance vocale",
        brand: "Machine Learning",
        description: "Une IA de reconnaissance vocale concu pour assister des projets personeles et les taches de bureau specifiques.",
        tags: [
            "Python",
            "Jupiter",
            "Pycharm",
            "Sqlite 3"
        ],
        imageUrl: "/assets/projects/2.png",
        link: "/projects/firecat"
    },
    {
        id: 3,
        title: "Portofolio moderne personalisable",
        brand: "Developpement web",
        description: "Un portofolio modifiable a votre guise grace a une architecture bien concu et agreable a faconner.",
        tags: [
            "React",
            "JSX",
            "Vs code"
        ],
        imageUrl: "/assets/projects/5.png",
        link: "/projects/firecat"
    },
    {
        id: 4,
        title: "Site web deal flow",
        brand: "Developpement web",
        description: "Site web concu pour la presentation et la vente des articles commestibles , recommendes par les restaurants.",
        tags: [
            "React",
            "JSX",
            "Vs code"
        ],
        imageUrl: "/assets/projects/6.png",
        link: "/projects/firecat"
    },
    {
        id: 5,
        title: "DIVLAB Client Dashboard",
        brand: "Developpement web",
        description: "ERP concu pour la gestion complete des activites de DIVLAB.",
        tags: [
            "React",
            "JSX",
            "Vs code"
        ],
        imageUrl: "/assets/projects/1.png",
        link: "/projects/firecat"
    }
];
const Realisations = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-auto ",
        "data-theme": "night",
        id: "realisations",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center p-4 h-100% relative ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "z-50 my-10",
                    title: "Nos Réalisations"
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Realisations.tsx",
                    lineNumber: 57,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "my-4",
                    "data-aos": "fade-right",
                    children: "Voici quelques exemples de nos projets récents."
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Realisations.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$grid$2d$dot$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotBackground"], {
                    dotSize: 1,
                    dotColor: "#d4d4d4",
                    darkDotColor: "#404040",
                    spacing: 20,
                    showFade: true,
                    fadeIntensity: 30,
                    className: "h-full"
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Realisations.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$carousel$2d$3d$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        items: items,
                        autoRotate: true,
                        rotateInterval: 4000,
                        cardHeight: 500,
                        isMobileSwipe: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Realisations.tsx",
                        lineNumber: 86,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Realisations.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Components/Realisations.tsx",
            lineNumber: 56,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/Components/Realisations.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Realisations;
const __TURBOPACK__default__export__ = Realisations;
var _c;
__turbopack_context__.k.register(_c, "Realisations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/Spotlight.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SpotlightCard = (param)=>{
    let { children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" } = param;
    _s();
    const divRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseMove = (e)=>{
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        divRef.current.style.setProperty("--mouse-x", "".concat(x, "px"));
        divRef.current.style.setProperty("--mouse-y", "".concat(y, "px"));
        divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: divRef,
        onMouseMove: handleMouseMove,
        className: "card-spotlight ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/Components/Spotlight.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SpotlightCard, "MAMAaDT8oTSNqTzyXCTKnOxvYEU=");
_c = SpotlightCard;
const __TURBOPACK__default__export__ = SpotlightCard;
var _c;
__turbopack_context__.k.register(_c, "SpotlightCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/lightswind/collapsible.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Collapsible": ()=>Collapsible,
    "CollapsibleContent": ()=>CollapsibleContent,
    "CollapsibleTrigger": ()=>CollapsibleTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lib/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
const CollapsibleContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
const Collapsible = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = _s((param, ref)=>{
    let { children, open, defaultOpen = false, disabled = false, onOpenChange, className, ...props } = param;
    _s();
    const [isOpen, setIsOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultOpen);
    const isControlled = open !== undefined;
    const currentOpen = isControlled ? open : isOpen;
    const handleOpenChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "Collapsible.useCallback[handleOpenChange]": (value)=>{
            if (disabled) return;
            if (!isControlled) {
                setIsOpen(value);
            }
            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(value);
        }
    }["Collapsible.useCallback[handleOpenChange]"], [
        disabled,
        isControlled,
        onOpenChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CollapsibleContext.Provider, {
        value: {
            open: currentOpen,
            onOpenChange: handleOpenChange,
            disabled
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("", className),
            "data-state": currentOpen ? "open" : "closed",
            "data-disabled": disabled ? "" : undefined,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/Components/lightswind/collapsible.tsx",
            lineNumber: 39,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/collapsible.tsx",
        lineNumber: 36,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "cFu+ICkOq94rHKqxaiYXsld9B9U=")), "cFu+ICkOq94rHKqxaiYXsld9B9U=");
_c1 = Collapsible;
Collapsible.displayName = "Collapsible";
const CollapsibleTrigger = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = _s1((param, ref)=>{
    let { className, children, asChild = false, ...props } = param;
    _s1();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CollapsibleContext);
    if (!context) {
        throw new Error("CollapsibleTrigger must be used within a Collapsible");
    }
    const { open, onOpenChange, disabled } = context;
    const handleClick = ()=>{
        onOpenChange(!open);
    };
    if (asChild) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (child)=>{
                if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child)) {
                    const childElement = child;
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](childElement, {
                        ref,
                        onClick: (e)=>{
                            handleClick();
                            if (childElement.props.onClick) {
                                childElement.props.onClick(e);
                            }
                        },
                        disabled: disabled || childElement.props.disabled,
                        "data-state": open ? "open" : "closed",
                        "data-disabled": disabled ? "" : undefined,
                        "aria-expanded": open
                    });
                }
                return child;
            })
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        type: "button",
        disabled: disabled,
        "data-state": open ? "open" : "closed",
        "data-disabled": disabled ? "" : undefined,
        "aria-expanded": open,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("", className),
        onClick: handleClick,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/collapsible.tsx",
        lineNumber: 98,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=")), "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c3 = CollapsibleTrigger;
CollapsibleTrigger.displayName = "CollapsibleTrigger";
const CollapsibleContent = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = _s2((param, ref)=>{
    let { className, children, forceMount, ...props } = param;
    _s2();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](CollapsibleContext);
    if (!context) {
        throw new Error("CollapsibleContent must be used within a Collapsible");
    }
    const { open } = context;
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "CollapsibleContent.useImperativeHandle": ()=>contentRef.current
    }["CollapsibleContent.useImperativeHandle"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        initial: false,
        children: (open || forceMount) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                height: 0,
                opacity: 0
            },
            animate: {
                height: "auto",
                opacity: 1
            },
            exit: {
                height: 0,
                opacity: 0
            },
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            },
            style: {
                overflow: 'hidden'
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden", className),
            "data-state": open ? "open" : "closed",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contentRef,
                className: "pb-4",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/Components/lightswind/collapsible.tsx",
                lineNumber: 158,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, "collapsible-content", false, {
            fileName: "[project]/src/app/Components/lightswind/collapsible.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/collapsible.tsx",
        lineNumber: 145,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "AXWopyJYLbl0NEJbATTu7HAMTLs=")), "AXWopyJYLbl0NEJbATTu7HAMTLs=");
_c5 = CollapsibleContent;
CollapsibleContent.displayName = "CollapsibleContent";
;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Collapsible$React.forwardRef");
__turbopack_context__.k.register(_c1, "Collapsible");
__turbopack_context__.k.register(_c2, "CollapsibleTrigger$React.forwardRef");
__turbopack_context__.k.register(_c3, "CollapsibleTrigger");
__turbopack_context__.k.register(_c4, "CollapsibleContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "CollapsibleContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/lightswind/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": ()=>Button,
    "buttonVariants": ()=>buttonVariants
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lib/utils.js [app-client] (ecmascript)");
;
;
;
// Define button style variants as a constant object (not exported)
const buttonStyles = {
    variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border   bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        github: "bg-white text-black hover:bg-gray-100 border   flex items-center gap-2 font-medium",
        perso: "text-white "
    },
    size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
    }
};
function buttonVariants() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { variant = "default", size = "default", className } = options;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center gap-2 whitespace-nowrap \n    rounded-md text-sm font-medium ring-offset-background \n    transition-colors focus-visible:outline-none focus-visible:ring-2 \n    focus-visible:ring-ring focus-visible:ring-offset-2 \n    disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none \n    [&_svg]:size-4 [&_svg]:shrink-0", buttonStyles.variant[variant], buttonStyles.size[size], className);
}
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant = "default", size = "default", asChild = false, ...props } = param;
    if (asChild) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(props.children, (child)=>{
                if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child)) {
                    // Instead of cloneElement with complex props, use a wrapper
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: buttonVariants({
                            variant,
                            size,
                            className
                        }),
                        children: child
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/lightswind/button.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return child;
            })
        }, void 0, false, {
            fileName: "[project]/src/app/Components/lightswind/button.tsx",
            lineNumber: 56,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: buttonVariants({
            variant,
            size,
            className
        }),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/button.tsx",
        lineNumber: 73,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/lightswind/StripesBackground.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/ui/StripesBackground.tsx
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
const StripesBackground = (param)=>{
    let { className, position = "right", width = "w-full", height = "h-full", deg = 45, opacity = "opacity-70" } = param;
    const positionStyles = {
        right: "absolute top-0 right-0",
        left: "absolute top-0 left-0",
        top: "absolute top-0 left-0 w-full h-32",
        bottom: "absolute bottom-0 left-0 w-full h-32",
        full: "absolute inset-0"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("pointer-events-none", // More visible stripes in both modes
        "bg-[repeating-linear-gradient(".concat(deg, "deg,_#00000066_0px,_#00000066_1px,_transparent_1px,_transparent_6px)] opacity-50"), "dark:bg-[repeating-linear-gradient(".concat(deg, "deg,_#ffffff66_0px,_#ffffff66_1px,_transparent_1px,_transparent_6px)]"), positionStyles[position], width, height, className // now `opacity-50` will apply more obviously
        )
    }, void 0, false, {
        fileName: "[project]/src/app/Components/lightswind/StripesBackground.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StripesBackground;
const __TURBOPACK__default__export__ = StripesBackground;
var _c;
__turbopack_context__.k.register(_c, "StripesBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/MyCarousel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$StripesBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lightswind/StripesBackground.tsx [app-client] (ecmascript)");
;
;
;
;
const length = 7;
const items = [
    ...new Array(length).keys()
];
const z = length * 85;
const MyCarousel = (param)=>{
    let { questions, questionHome, index, setIndex } = param;
    const angle = index / length * -360;
    const transform = "translateZ(-".concat(z, "px) rotateX(").concat(angle, "deg) rotateY(6deg)");
    const SetIndexVal = (val)=>{
        index = val + 1;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bod ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scene z-0 shadow-[0_5px_20px_rgba(0,0,0,0.6)] rounded-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$StripesBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        position: "right",
                        width: "w-full",
                        height: "h-full",
                        opacity: "opacity-60",
                        className: "rounded-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/MyCarousel.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mycarousel md:flex hidden z-1 shadow-[0_5px_20px_rgba(0,200,255,0.6)]   bg-[radial-gradient(ellipse_at_center , rgba(0,0,0,0)_60%, rgba(0,0,0,0.7)_100%)] inset-0 ",
                        style: {
                            transform
                        },
                        children: items.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "item transform transition-transform duration-300 hover:scale-106  bg-gray",
                                style: {
                                    transform: getTransform(id)
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        alt: "",
                                        width: 500,
                                        height: 420,
                                        className: " object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl ",
                                        src: id < 5 ? questions[id].img : "/assets/ImgCarousel/".concat(id + 6, ".jpeg")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/MyCarousel.tsx",
                                        lineNumber: 56,
                                        columnNumber: 34
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: " w-full  transform transition-transform duration-300 hover:scale-106 h-full pointer_event_none  absolute shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]  border rounded-3xl border-[rgba(0,200,255,0.6)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/MyCarousel.tsx",
                                        lineNumber: 65,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, id, true, {
                                fileName: "[project]/src/app/Components/MyCarousel.tsx",
                                lineNumber: 53,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/MyCarousel.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "controls ",
                        style: {
                            transform: "translateZ(-".concat(z, "px) rotateX(0deg)")
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    transform: getTransform(length - 1)
                                },
                                onClick: ()=>setIndex(index - 1)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/MyCarousel.tsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    transform: getTransform(1)
                                },
                                onClick: ()=>setIndex(index + 1)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/MyCarousel.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/MyCarousel.tsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/MyCarousel.tsx",
                lineNumber: 43,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/Components/MyCarousel.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/Components/MyCarousel.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MyCarousel;
function getTransform(id) {
    const deg = id * (360 / length);
    return "rotateX(".concat(deg, "deg) translateZ(").concat(z, "px)");
}
const __TURBOPACK__default__export__ = MyCarousel;
var _c;
__turbopack_context__.k.register(_c, "MyCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/AboutQuestions.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Spotlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Spotlight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lightswind/collapsible.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lightswind/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$MyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/MyCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-responsive/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function FAQ(param) {
    let { questions, questionHome } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FAQ.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 800,
                once: true
            });
        }
    }["FAQ.useEffect"]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [openCollapse, setOpenCollapse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleToggle = (id)=>{
        setOpenId(openId === id ? null : id);
    };
    const [ind, setInd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isMd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])({
        query: "(min-width: 768)"
    });
    const handleIndexToggle = (id)=>{
        if (openCollapse == -1) {
            setOpenCollapse(-2);
        }
        if (openIndex === id) {
            setSelected(-1);
            setOpenIndex(null);
            setOpenCollapse(-1);
        } else {
            setSelected(id);
            setOpenIndex(id);
        }
        setInd(id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex md:flex-row flex-col-reverse  justify-between text-white w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex",
                "data-aos": "fade-right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$MyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    questions: questions,
                    questionHome: questionHome,
                    index: ind,
                    setIndex: setInd
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row flex-start h-fit md:pl-4 relative",
                "data-aos": "fade-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: " flex-row hidden md:flex ",
                        animate: {
                            x: selected != -1 && !isMd ? "-100%" : "0%"
                        },
                        transition: isMd ? {
                            duration: 0
                        } : {
                            type: "spring",
                            stiffness: 70,
                            damping: 15
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col  items-center space-y-3 z-1 md:space-y-4 ".concat(selected != -1 ? " md:transform  md:duration-500" : ""),
                                children: questions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full",
                                        onClick: ()=>handleIndexToggle(index),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapsible"], {
                                            className: " ",
                                            open: openId === item.id.toString(),
                                            onOpenChange: ()=>handleToggle(item.id.toString()),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
                                                    asChild: true,
                                                    className: "",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: " flex justify-between shadow-lg  hover:shadow-lg items-center  font-medium rounded-4xl w-full  text-md  ".concat(selected == index ? "bg-gradient-to-br  from-blue-600 to-blue-500 to-gray-900 transform transition-transform duration-300 scale-98 " : "bg-gradient-to-br  from-gray-600 to-gray-900 transform transition-transform duration-300 hover:scale-106", "   "),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "  hover:bg-white/10   w-full rounded-4xl px-4 py-2 ",
                                                            children: [
                                                                item.value,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "perso",
                                                                    size: "sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: "h-4 w-4 md:rotate-270"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                            lineNumber: 111,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "sr-only",
                                                                            children: "Toggle"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                            lineNumber: 112,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
                                                    className: "block md:hidden  ",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 50
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 10
                                                        },
                                                        transition: {
                                                            duration: 0.4,
                                                            ease: "easeInOut"
                                                        },
                                                        className: " h-60 bg-gradient-to-br  from-gray-700 to-gray-800 rounded-2xl shadow-lg ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Spotlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "custom-spotlight-card whitespace-normal h-full rounded-2xl w-auto",
                                                            spotlightColor: "rgba(0, 17, 255, 0.2)",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                    className: "text-xl font-bold mb-2",
                                                                    children: selected == -1 ? questionHome.value : questions[selected].value
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-200 text-md whitespace-pre-line",
                                                                    children: selected == -1 ? questionHome.answer : questions[selected].answer
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, selected, false, {
                                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                            lineNumber: 103,
                                            columnNumber: 33
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                        lineNumber: 102,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " mx-3 w-3 h-auto flex bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                lineNumber: 154,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center md:hidden items-center w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row  justify-center  w-full ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col  items-center w-full space-y-3 z-1 md:space-y-4 ".concat(selected != -1 ? " md:transform  md:duration-500" : ""),
                                    children: questions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full ",
                                            onClick: ()=>handleIndexToggle(index),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapsible"], {
                                                className: "w-full ",
                                                open: openId === item.id.toString(),
                                                onOpenChange: ()=>handleToggle(item.id.toString()),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
                                                        asChild: true,
                                                        className: "",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: " flex justify-between   shadow-lg  hover:shadow-lg items-center  font-medium rounded-4xl text-md  ".concat(selected == index ? "bg-gradient-to-br  from-blue-600 to-blue-500 to-gray-900 transform transition-transform duration-300 scale-98 " : "bg-gradient-to-br  from-gray-600 to-gray-900 transform transition-transform duration-300 hover:scale-106", "   "),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "   flex justify-between hover:bg-white/10 items-center pl-4 py-3 w-full h-full rounded-4xl ",
                                                                children: [
                                                                    item.value,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "perso",
                                                                        size: "sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                                className: "h-4 w-4 md:rotate-270"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                                lineNumber: 177,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "sr-only",
                                                                                children: "Toggle"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                                lineNumber: 178,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                        lineNumber: 175,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$collapsible$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
                                                        className: "block md:hidden ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 50
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                y: 10
                                                            },
                                                            transition: {
                                                                duration: 0.4,
                                                                ease: "easeInOut"
                                                            },
                                                            className: " h-fit bg-gradient-to-br  from-gray-700 to-gray-800 pl-4 py-3 rounded-2xl shadow-lg ",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Spotlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: "custom-spotlight-card  h-full rounded-2xl ",
                                                                spotlightColor: "rgba(0, 17, 255, 0.2)",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                        className: "text-xl font-bold mb-2",
                                                                        children: selected == -1 ? questionHome.value : questions[selected].value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                        lineNumber: 197,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-300",
                                                                        children: selected == -1 ? questionHome.answer : questions[selected].answer
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                        lineNumber: 198,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, selected, false, {
                                                            fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                lineNumber: 169,
                                                columnNumber: 37
                                            }, this)
                                        }, item.id, false, {
                                            fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                            lineNumber: 168,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                    lineNumber: 165,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " mx-3 w-5 md:w-2 h-auto flex bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                    lineNumber: 220,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                            lineNumber: 163,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                        lineNumber: 162,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: selected != -1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute h-fit w-full -z-0 md:block hidden",
                            // initial={{ x: openCollapse == -5 ? "0%" : (openCollapse == -2 ? "50%" : "0%"), opacity: openCollapse == -5 ? 1 : (openCollapse == -2 ? 0 : 1) }}
                            // animate={{ x: openCollapse == -5 ? "50%" : (openCollapse == -2 ? "0%" : "0%"), opacity: openCollapse == -5 ? 0 : (openCollapse == -2 ? 1 : 1) }}
                            initial: {
                                x: "-5%",
                                opacity: 0
                            },
                            animate: {
                                x: "0%",
                                opacity: 1
                            },
                            exit: {
                                opacity: 0,
                                x: "-10%"
                            },
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: " w-full h-150  ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Spotlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    "data-theme": "night",
                                    className: "custom-spotlight-cardrelative  backdrop-blur-md bg-white/5 p-0 relative w-full h-full  rounded-2xl ",
                                    spotlightColor: "rgba(0, 116, 217, 1)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "sync",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: "-10%"
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: "0%"
                                            },
                                            exit: {
                                                opacity: 0,
                                                x: "-10%"
                                            },
                                            transition: {
                                                type: "spring",
                                                stiffness: 70,
                                                damping: 15
                                            },
                                            className: "w-full h-50   rounded-2xl  absolute ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full relative  p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-2xl font-bold ml-2 mb-3",
                                                        children: selected == -1 ? questionHome.value : questions[selected].value
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-200 text-md p-2 whitespace-pre-wrap ",
                                                        children: [
                                                            selected == -1 ? questionHome.answer : questions[selected].answer,
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                                lineNumber: 255,
                                                columnNumber: 45
                                            }, this)
                                        }, selected, false, {
                                            fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                            lineNumber: 244,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                        lineNumber: 243,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                    lineNumber: 242,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                                lineNumber: 241,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                            lineNumber: 232,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                        lineNumber: 229,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/AboutQuestions.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/AboutQuestions.tsx",
        lineNumber: 87,
        columnNumber: 9
    }, this);
}
_s(FAQ, "Yvnq90RwUIyvPBbPw/TePdEyyS0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$responsive$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = FAQ;
const __TURBOPACK__default__export__ = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/RippleGrid.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const RippleGrid = (param)=>{
    let { enableRainbow = false, gridColor = "#ffffff", rippleIntensity = 0.05, gridSize = 10.0, gridThickness = 15.0, fadeDistance = 1.5, vignetteStrength = 2.0, glowIntensity = 0.1, opacity = 1.0, gridRotation = 0, mouseInteraction = true, mouseInteractionRadius = 1 } = param;
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mousePositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    const targetMouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0.5,
        y: 0.5
    });
    const mouseInfluenceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const uniformsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RippleGrid.useEffect": ()=>{
            if (!containerRef.current) return;
            const hexToRgb = {
                "RippleGrid.useEffect.hexToRgb": (hex)=>{
                    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    return result ? [
                        parseInt(result[1], 16) / 255,
                        parseInt(result[2], 16) / 255,
                        parseInt(result[3], 16) / 255
                    ] : [
                        1,
                        1,
                        1
                    ];
                }
            }["RippleGrid.useEffect.hexToRgb"];
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                dpr: Math.min(window.devicePixelRatio, 2),
                alpha: true
            });
            const gl = renderer.gl;
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
            gl.canvas.style.width = "100%";
            gl.canvas.style.height = "100%";
            containerRef.current.appendChild(gl.canvas);
            const vert = "\nattribute vec2 position;\nvarying vec2 vUv;\nvoid main() {\n    vUv = position * 0.5 + 0.5;\n    gl_Position = vec4(position, 0.0, 1.0);\n}";
            const frag = "precision highp float;\nuniform float iTime;\nuniform vec2 iResolution;\nuniform bool enableRainbow;\nuniform vec3 gridColor;\nuniform float rippleIntensity;\nuniform float gridSize;\nuniform float gridThickness;\nuniform float fadeDistance;\nuniform float vignetteStrength;\nuniform float glowIntensity;\nuniform float opacity;\nuniform float gridRotation;\nuniform bool mouseInteraction;\nuniform vec2 mousePosition;\nuniform float mouseInfluence;\nuniform float mouseInteractionRadius;\nvarying vec2 vUv;\n\nfloat pi = 3.141592;\n\nmat2 rotate(float angle) {\n    float s = sin(angle);\n    float c = cos(angle);\n    return mat2(c, -s, s, c);\n}\n\nvoid main() {\n    vec2 uv = vUv * 2.0 - 1.0;\n    uv.x *= iResolution.x / iResolution.y;\n\n    if (gridRotation != 0.0) {\n        uv = rotate(gridRotation * pi / 180.0) * uv;\n    }\n\n    float dist = length(uv);\n    float func = sin(pi * (iTime - dist));\n    vec2 rippleUv = uv + uv * func * rippleIntensity;\n\n    if (mouseInteraction && mouseInfluence > 0.0) {\n        vec2 mouseUv = (mousePosition * 2.0 - 1.0);\n        mouseUv.x *= iResolution.x / iResolution.y;\n        float mouseDist = length(uv - mouseUv);\n        \n        float influence = mouseInfluence * exp(-mouseDist * mouseDist / (mouseInteractionRadius * mouseInteractionRadius));\n        \n        float mouseWave = sin(pi * (iTime * 2.0 - mouseDist * 3.0)) * influence;\n        rippleUv += normalize(uv - mouseUv) * mouseWave * rippleIntensity * 0.3;\n    }\n\n    vec2 a = sin(gridSize * 0.5 * pi * rippleUv - pi / 2.0);\n    vec2 b = abs(a);\n\n    float aaWidth = 0.5;\n    vec2 smoothB = vec2(\n        smoothstep(0.0, aaWidth, b.x),\n        smoothstep(0.0, aaWidth, b.y)\n    );\n\n    vec3 color = vec3(0.0);\n    color += exp(-gridThickness * smoothB.x * (0.8 + 0.5 * sin(pi * iTime)));\n    color += exp(-gridThickness * smoothB.y);\n    color += 0.5 * exp(-(gridThickness / 4.0) * sin(smoothB.x));\n    color += 0.5 * exp(-(gridThickness / 3.0) * smoothB.y);\n\n    if (glowIntensity > 0.0) {\n        color += glowIntensity * exp(-gridThickness * 0.5 * smoothB.x);\n        color += glowIntensity * exp(-gridThickness * 0.5 * smoothB.y);\n    }\n\n    float ddd = exp(-2.0 * clamp(pow(dist, fadeDistance), 0.0, 1.0));\n    \n    vec2 vignetteCoords = vUv - 0.5;\n    float vignetteDistance = length(vignetteCoords);\n    float vignette = 1.0 - pow(vignetteDistance * 2.0, vignetteStrength);\n    vignette = clamp(vignette, 0.0, 1.0);\n    \n    vec3 t;\n    if (enableRainbow) {\n        t = vec3(\n            uv.x * 0.5 + 0.5 * sin(iTime),\n            uv.y * 0.5 + 0.5 * cos(iTime),\n            pow(cos(iTime), 4.0)\n        ) + 0.5;\n    } else {\n        t = gridColor;\n    }\n\n    float finalFade = ddd * vignette;\n    float alpha = length(color) * finalFade * opacity;\n    gl_FragColor = vec4(color * t * finalFade * opacity, alpha);\n}";
            const uniforms = {
                iTime: {
                    value: 0
                },
                iResolution: {
                    value: [
                        1,
                        1
                    ]
                },
                enableRainbow: {
                    value: enableRainbow
                },
                gridColor: {
                    value: hexToRgb(gridColor)
                },
                rippleIntensity: {
                    value: rippleIntensity
                },
                gridSize: {
                    value: gridSize
                },
                gridThickness: {
                    value: gridThickness
                },
                fadeDistance: {
                    value: fadeDistance
                },
                vignetteStrength: {
                    value: vignetteStrength
                },
                glowIntensity: {
                    value: glowIntensity
                },
                opacity: {
                    value: opacity
                },
                gridRotation: {
                    value: gridRotation
                },
                mouseInteraction: {
                    value: mouseInteraction
                },
                mousePosition: {
                    value: [
                        0.5,
                        0.5
                    ]
                },
                mouseInfluence: {
                    value: 0
                },
                mouseInteractionRadius: {
                    value: mouseInteractionRadius
                }
            };
            uniformsRef.current = uniforms;
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: vert,
                fragment: frag,
                uniforms
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            const resize = {
                "RippleGrid.useEffect.resize": ()=>{
                    const { clientWidth: w, clientHeight: h } = containerRef.current;
                    renderer.setSize(w, h);
                    uniforms.iResolution.value = [
                        w,
                        h
                    ];
                }
            }["RippleGrid.useEffect.resize"];
            const handleMouseMove = {
                "RippleGrid.useEffect.handleMouseMove": (e)=>{
                    if (!mouseInteraction || !containerRef.current) return;
                    const rect = containerRef.current.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = 1.0 - (e.clientY - rect.top) / rect.height; // Flip Y coordinate
                    targetMouseRef.current = {
                        x,
                        y
                    };
                }
            }["RippleGrid.useEffect.handleMouseMove"];
            const handleMouseEnter = {
                "RippleGrid.useEffect.handleMouseEnter": ()=>{
                    if (!mouseInteraction) return;
                    mouseInfluenceRef.current = 1.0;
                }
            }["RippleGrid.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "RippleGrid.useEffect.handleMouseLeave": ()=>{
                    if (!mouseInteraction) return;
                    mouseInfluenceRef.current = 0.0;
                }
            }["RippleGrid.useEffect.handleMouseLeave"];
            window.addEventListener("resize", resize);
            if (mouseInteraction) {
                containerRef.current.addEventListener("mousemove", handleMouseMove);
                containerRef.current.addEventListener("mouseenter", handleMouseEnter);
                containerRef.current.addEventListener("mouseleave", handleMouseLeave);
            }
            resize();
            const render = {
                "RippleGrid.useEffect.render": (t)=>{
                    uniforms.iTime.value = t * 0.001;
                    const lerpFactor = 0.1;
                    mousePositionRef.current.x += (targetMouseRef.current.x - mousePositionRef.current.x) * lerpFactor;
                    mousePositionRef.current.y += (targetMouseRef.current.y - mousePositionRef.current.y) * lerpFactor;
                    const currentInfluence = uniforms.mouseInfluence.value;
                    const targetInfluence = mouseInfluenceRef.current;
                    uniforms.mouseInfluence.value += (targetInfluence - currentInfluence) * 0.05;
                    uniforms.mousePosition.value = [
                        mousePositionRef.current.x,
                        mousePositionRef.current.y
                    ];
                    renderer.render({
                        scene: mesh
                    });
                    requestAnimationFrame(render);
                }
            }["RippleGrid.useEffect.render"];
            requestAnimationFrame(render);
            console.log("RippleGrid reset sur:", pathname);
            return ({
                "RippleGrid.useEffect": ()=>{
                    var _renderer_gl_getExtension, _containerRef_current;
                    window.removeEventListener("resize", resize);
                    if (mouseInteraction && containerRef.current) {
                        containerRef.current.removeEventListener("mousemove", handleMouseMove);
                        containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
                        containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
                    }
                    (_renderer_gl_getExtension = renderer.gl.getExtension("WEBGL_lose_context")) === null || _renderer_gl_getExtension === void 0 ? void 0 : _renderer_gl_getExtension.loseContext();
                    (_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.removeChild(gl.canvas);
                }
            })["RippleGrid.useEffect"];
        }
    }["RippleGrid.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RippleGrid.useEffect": ()=>{
            if (!uniformsRef.current) return;
            const hexToRgb = {
                "RippleGrid.useEffect.hexToRgb": (hex)=>{
                    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                    console.log("RippleGrid reset sur:", pathname);
                    return result ? [
                        parseInt(result[1], 16) / 255,
                        parseInt(result[2], 16) / 255,
                        parseInt(result[3], 16) / 255
                    ] : [
                        1,
                        1,
                        1
                    ];
                }
            }["RippleGrid.useEffect.hexToRgb"];
            uniformsRef.current.enableRainbow.value = enableRainbow;
            uniformsRef.current.gridColor.value = hexToRgb(gridColor);
            uniformsRef.current.rippleIntensity.value = rippleIntensity;
            uniformsRef.current.gridSize.value = gridSize;
            uniformsRef.current.gridThickness.value = gridThickness;
            uniformsRef.current.fadeDistance.value = fadeDistance;
            uniformsRef.current.vignetteStrength.value = vignetteStrength;
            uniformsRef.current.glowIntensity.value = glowIntensity;
            uniformsRef.current.opacity.value = opacity;
            uniformsRef.current.gridRotation.value = gridRotation;
            uniformsRef.current.mouseInteraction.value = mouseInteraction;
            uniformsRef.current.mouseInteractionRadius.value = mouseInteractionRadius;
        }
    }["RippleGrid.useEffect"], [
        enableRainbow,
        gridColor,
        rippleIntensity,
        gridSize,
        gridThickness,
        fadeDistance,
        vignetteStrength,
        glowIntensity,
        opacity,
        gridRotation,
        mouseInteraction,
        mouseInteractionRadius,
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full h-full relative overflow-hidden [&_canvas]:block"
    }, pathname, false, {
        fileName: "[project]/src/app/Components/RippleGrid.tsx",
        lineNumber: 313,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RippleGrid, "INOBmIWnjCGDS0F1PN5nV/LA2Yw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = RippleGrid;
const __TURBOPACK__default__export__ = RippleGrid;
var _c;
__turbopack_context__.k.register(_c, "RippleGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/About.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$AboutQuestions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/AboutQuestions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$RippleGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/RippleGrid.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
// import ImgCarousel_1 from "@/app/assets/ImgCarousel/1.jpg";
// import ImgCarousel_2 from "@/app/assets/ImgCarousel/2.jpg";
// import ImgCarousel_3 from "@/app/assets/ImgCarousel/3.jpg";
// import ImgCarousel_4 from "@/app/assets/ImgCarousel/4.jpg";
const Questions = [
    {
        id: 1,
        value: "Qui sommes  nous ?",
        answer: "DivLab est un laboratoire de solutions numériques et d’intelligence artificielle. Nous accompagnons les entreprises et les particuliers dans la création de sites web, le développement de modèles IA, la formation en data science et la maintenance informatique. Notre mission est de rendre la technologie accessible, efficace et rentable pour tous.",
        img: "/assets/ImgCarousel/1.jpg"
    },
    {
        id: 2,
        value: "Quels services offrons nous ?",
        answer: "Nous proposons principalement :\n * Formation en Data Science et Intelligence Artificielle(Python, R, Machine Learning, Deep Learning, Excel avancé…).\n  * Développement de sites web et applications sur mesure.\n * Assistance à projets IA et consulting technique.\n  * Maintenance et dépannage informatique pour particuliers et entreprises.\n  * Exposition et accompagnement pour vos projets technologiques et idées de recherche.",
        img: "/assets/ImgCarousel/2.png"
    },
    {
        id: 3,
        value: "Pourquoi nous choisir ?",
        answer: "Expertise en data science, IA et développement web. Approche pratique et adaptée aux besoins réels des clients. Accompagnement de A à Z pour les projets, de la conception à la mise en production. Service rapide, fiable et accessible même pour les débutants.",
        img: "/assets/ImgCarousel/5.jpeg"
    },
    {
        id: 4,
        value: "Comment nous contacter ?",
        answer: "Vous pouvez nous joindre via : WhatsApp: 237652509674  \nEmail: divlabsoftware@gmail.com \nVia notre formulaire de contact sur ce site web",
        img: "/assets/ImgCarousel/14.webp"
    },
    {
        id: 5,
        value: "Ou sommes nous situes ?",
        answer: "DivLab est basé au Cameroun, mais nous intervenons également en ligne pour les clients internationaux.\nVous pouvez nous rencontrer sur rendez- vous dans nos locaux ou échanger à distance via nos plateformes numériques.",
        img: "/assets/ImgCarousel/6.jpeg"
    }
];
const QuestionsHome = {
    id: -1,
    value: "Accueil",
    answer: "Nous sommes une agence de developpement web et mobile qui se concentre sur la creation de solutions innovantes et sur mesure pour nos clients, BIENVENU !.",
    img: ""
};
const About = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 800,
                once: true
            });
        }
    }["About.useEffect"]);
    // const location = useLocation();
    // const [show, setShow] = useState(true);
    // useEffect(() => {
    //     setShow(false);
    //     const timer = setTimeout(() => setShow(true), 50); // recrée le composant
    //     return () => clearTimeout(timer);
    // }, [location]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "  md:px-[0%] relative top-0  z-20",
        "data-theme": "sunset",
        id: "about",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " h-auto flex flex-col overflow-hidden relative ",
            id: "about",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-20 absolute   bg-gradient-to-b  to-[#121c22] border-none  from-[#0074D9]/30"
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/About.tsx",
                    lineNumber: 55,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: "A Propos",
                    className: "mb-50 mt-20",
                    dataAos: "fade-down"
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/About.tsx",
                    lineNumber: 60,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute h-full w-full overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$RippleGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        enableRainbow: false,
                        gridColor: "#0074D9",
                        rippleIntensity: 0.05,
                        gridSize: 25,
                        gridThickness: 25,
                        mouseInteraction: true,
                        mouseInteractionRadius: 1.4,
                        opacity: 0.8,
                        fadeDistance: 4,
                        vignetteStrength: 3
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/About.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/About.tsx",
                    lineNumber: 62,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-50 px-5 md:px-15",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$AboutQuestions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        questions: Questions,
                        questionHome: QuestionsHome
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/About.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/About.tsx",
                    lineNumber: 77,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/Components/About.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/Components/About.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(About, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/lightswind/AnimatedOceanWaves.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnimatedOceanWaves": ()=>AnimatedOceanWaves,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const DEFAULT_WAVE_IMAGE = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg";
const AnimatedOceanWaves = (param)=>{
    let { height = "5%", oceanBackground, waveImageUrl = DEFAULT_WAVE_IMAGE, waveDuration = 7, waveOffset = 23, frontWaveOpacity = 1, backWaveOpacity = 1, className = "", style, zIndex = 1 } = param;
    // Inline styles for container and waves
    const oceanStyles = {
        height,
        width: "100%",
        position: "absolute",
        left: 0,
        bottom: 0,
        background: oceanBackground,
        zIndex,
        ...style
    };
    const waveStyles = {
        // String concatenation for background image URL
        background: "url(" + waveImageUrl + ") repeat-x",
        position: "absolute",
        top: 0,
        width: "6400px",
        height: "198px",
        // String concatenation for animation property
        animation: "waveAnim " + waveDuration + "s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite",
        transform: "translate3d(0, 0, 0)",
        opacity: frontWaveOpacity,
        pointerEvents: "none"
    };
    const backWaveStyles = {
        ...waveStyles,
        top: -waveOffset,
        opacity: backWaveOpacity,
        // String concatenation for combined animation property
        animation: "waveAnim " + waveDuration + "s cubic-bezier(0.36, 0.45, 0.63, 0.53) -" + waveDuration * 0.018 + "s infinite, " + "swellAnim " + waveDuration + "s ease -" + waveDuration * 0.18 + "s infinite"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: oceanStyles,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: "@keyframes waveAnim {" + "0% { margin-left: 0; }" + "100% { margin-left: -1600px; }" + "}" + "@keyframes swellAnim {" + "0%, 100% { transform: translate3d(0, -25px, 0);}" + "50% { transform: translate3d(0, 5px, 0);}" + "}"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/lightswind/AnimatedOceanWaves.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: waveStyles
            }, void 0, false, {
                fileName: "[project]/src/app/Components/lightswind/AnimatedOceanWaves.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: backWaveStyles
            }, void 0, false, {
                fileName: "[project]/src/app/Components/lightswind/AnimatedOceanWaves.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/lightswind/AnimatedOceanWaves.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AnimatedOceanWaves;
const __TURBOPACK__default__export__ = AnimatedOceanWaves;
var _c;
__turbopack_context__.k.register(_c, "AnimatedOceanWaves");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/lightswind/interactive-gradient.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "InteractiveGradient": ()=>InteractiveGradient,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lib/utils.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const InteractiveGradient = (param)=>{
    let { dataAos = "", color, glowColor = "#107667ed", width = "", height = "", borderRadius = "1rem", className = "", children, followMouse = true, hoverOnly = false, intensity = 100, backgroundColor } = param;
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resolvedGlowFallbackColor, setResolvedGlowFallbackColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#ffffff"); // Renamed for clarity
    // Detect dark mode for fallback (if backgroundColor prop isn't a direct CSS color)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveGradient.useEffect": ()=>{
            // This logic is primarily for the *glow fallback* when the background is handled by Tailwind
            // or when no direct backgroundColor is provided for the radial gradient's base.
            if (!backgroundColor || !backgroundColor.startsWith("#") && !backgroundColor.startsWith("rgb")) {
                const html = document.documentElement;
                const updateColor = {
                    "InteractiveGradient.useEffect.updateColor": ()=>{
                        const isDark = html.classList.contains("dark");
                        // This sets the color for the "base" of the radial gradient, which needs a CSS color.
                        setResolvedGlowFallbackColor(isDark ? "#000" : "#ffffff"); // Black for dark, white for light as default
                    }
                }["InteractiveGradient.useEffect.updateColor"];
                updateColor();
                const observer = new MutationObserver(updateColor);
                observer.observe(html, {
                    attributes: true,
                    attributeFilter: [
                        "class"
                    ]
                });
                return ({
                    "InteractiveGradient.useEffect": ()=>observer.disconnect()
                })["InteractiveGradient.useEffect"];
            } else {
                // If backgroundColor is a direct CSS color, use it for the radial gradient's base.
                setResolvedGlowFallbackColor(backgroundColor);
            }
        }
    }["InteractiveGradient.useEffect"], [
        backgroundColor
    ]);
    const normalizedIntensity = Math.max(0, Math.min(100, intensity)) / 100;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveGradient.useEffect": ()=>{
            if (!followMouse) return;
            const handleMouseMove = {
                "InteractiveGradient.useEffect.handleMouseMove": (e)=>{
                    if (!cardRef.current || hoverOnly && !isHovering) return;
                    const rect = cardRef.current.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    setPosition({
                        x,
                        y
                    });
                }
            }["InteractiveGradient.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "InteractiveGradient.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["InteractiveGradient.useEffect"];
        }
    }["InteractiveGradient.useEffect"], [
        followMouse,
        hoverOnly,
        isHovering
    ]);
    const getBackgroundStyle = ()=>{
        // Use resolvedGlowFallbackColor for the radial gradient's base,
        // which should always be a valid CSS color.
        if (!followMouse || hoverOnly && !isHovering) {
            return {
                background: "radial-gradient(circle at center, ".concat(glowColor, " 0%, ").concat(resolvedGlowFallbackColor, " ").concat(45 * normalizedIntensity, "%, ").concat(resolvedGlowFallbackColor, " 100%)")
            };
        }
        return {
            background: "radial-gradient(circle at ".concat(position.x, "px ").concat(position.y, "px, ").concat(glowColor, " 0%, ").concat(resolvedGlowFallbackColor, " ").concat(45 * normalizedIntensity, "%, ").concat(resolvedGlowFallbackColor, " 100%)")
        };
    };
    const getBorderStyle = ()=>{
        // resolvedGlowFallbackColor is also used here
        return {
            "--gradient-border": "linear-gradient(45deg, ".concat(resolvedGlowFallbackColor, ", ").concat(resolvedGlowFallbackColor, ", ").concat(color, ")")
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative grid \n         transition-all duration-300\n        interactive-gradient-card text-foreground", backgroundColor || 'bg-white dark:bg-black', className),
        style: {
            ...getBackgroundStyle(),
            ...getBorderStyle(),
            width,
            height,
            borderRadius
        },
        onMouseEnter: ()=>setIsHovering(true),
        onMouseLeave: ()=>setIsHovering(false),
        "data-aos": dataAos,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: '\n          .interactive-gradient-card::before {\n            position: absolute;\n            content: "";\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            border-radius: '.concat(borderRadius, ";\n            z-index: -1;\n            border: 0.155rem solid transparent;\n            background: var(--gradient-border) border-box;\n            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);\n            -webkit-mask-composite: destination-out;\n            mask-composite: exclude;\n          }\n        ")
            }, void 0, false, {
                fileName: "[project]/src/app/Components/lightswind/interactive-gradient.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/lightswind/interactive-gradient.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InteractiveGradient, "FZLysnZmI3cTIHWUmhXKUtSMqdM=");
_c = InteractiveGradient;
const __TURBOPACK__default__export__ = InteractiveGradient;
var _c;
__turbopack_context__.k.register(_c, "InteractiveGradient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/Services.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$AnimatedOceanWaves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lightswind/AnimatedOceanWaves.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$interactive$2d$gradient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lightswind/interactive-gradient.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$wavify$2f$lib$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-wavify/lib/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lightswind/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/lightswind/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
const Services = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Services.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                duration: 800,
                once: true
            });
        }
    }["Services.useEffect"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center  relative",
        id: "services",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$wavify$2f$lib$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fill: "#121c22",
                paused: false,
                style: {
                    display: 'flex'
                },
                options: {
                    height: 20,
                    amplitude: 60,
                    speed: 0.15,
                    points: 4
                },
                className: "transform rotate-180"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Services.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Nos Services",
                dataAos: "fade-down"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Services.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                "data-aos": "fade-right",
                children: "Voici un aperçu des services que nous proposons."
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Services.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row justify-center gap-5 m-5 mt-10 w-full  flex-wrap md:flex-nowrap  ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$interactive$2d$gradient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveGradient"], {
                        dataAos: "fade-right",
                        color: "#1890ff",
                        glowColor: "#ffc40050",
                        followMouse: true,
                        hoverOnly: false,
                        intensity: 100,
                        backgroundColor: "#151419",
                        width: "20rem",
                        height: "fit",
                        borderRadius: "2.25rem",
                        className: " transition-transform  justify-center h-100% mt-5 duration-500 hover:scale-105 hover:-translate-y-5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.6)] shadow-[0_5px_20px_rgba(0,0,0,0.5)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "w-100% relative h-100% rounded-4xl border-none flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-5 w-full h-20 rounded-3xl bg-gray-500 transform duration-300 hover:h-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                alt: "",
                                                width: 320,
                                                height: 420,
                                                className: " object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl ",
                                                src: "/assets/ImgCarousel/7.jpeg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Services.tsx",
                                                lineNumber: 64,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 63,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-white",
                                            children: "Formations specialisées"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 74,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Langages de programmation et Machine learning a portée de main."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 75,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 76,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "",
                                        children: "Développez vos compétences avec nos programmes de formation adaptés aux besoins du marché. Nous proposons des parcours pratiques en développement web, cloud computing, data science et intelligence artificielle, conçus pour renforcer votre expertise et accélérer votre carrière."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Services.tsx",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                    className: "",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "text-white rounded-2xl w-5/6 bg-[#ffc40050]  text-md p-0 transition-transform duration-400 hover:scale-99 hover:bg-[#755b06a6] hover:translate-y-1 shadow-[inset_3px_-3px_20px_rgba(0,0,0,0.8),-8px_15px_20px_rgba(0,0,0,0.7),-3px_5px_50px_rgba(0,200,255,0.2),inset_-7px_7px_20px_rgba(255,255,255,0.3)] ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/Formations",
                                            onClick: ()=>{
                                                if ("/Formations".startsWith("/")) {
                                                    window.scrollTo(0, 0);
                                                }
                                            },
                                            className: "w-full h-full p-2",
                                            children: "Voir"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 83,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Services.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/Services.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Services.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$interactive$2d$gradient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveGradient"], {
                        dataAos: "fade-up",
                        color: "#1890ff",
                        glowColor: "#1076675d",
                        followMouse: true,
                        hoverOnly: false,
                        intensity: 100,
                        backgroundColor: "#151419",
                        width: "20rem",
                        height: "fit",
                        borderRadius: "2.25rem",
                        className: "h-100%  hover:border-info transition-transform mt-5 duration-500  hover:scale-105 hover:-translate-y-5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.6)] shadow-[0_5px_20px_rgba(0,0,0,0.5)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "w-100% relative h-100% rounded-4xl border-none flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-5 w-full h-20 rounded-3xl bg-gray-500 transform duration-300 hover:h-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                alt: "",
                                                width: 320,
                                                height: 420,
                                                className: " object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl ",
                                                src: "/assets/ImgCarousel/2.png"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Services.tsx",
                                                lineNumber: 116,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 115,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-white",
                                            children: "Solutions Web & Cloud"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 126,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Créez votre identité en ligne via votre propre site web ou portofolio."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 127,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 128,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Nous concevons et déployons des solutions modernes pour vos applications web et cloud. De la création de sites performants à l’intégration de services cloud sécurisés et évolutifs, nous vous aidons à digitaliser vos processus et à gagner en efficacité."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Services.tsx",
                                        lineNumber: 131,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 130,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "text-white p-0  rounded-2xl w-5/6 bg-[#1076675d] hover:bg-[#0a4b4171]  text-md transition-transform duration-400 hover:scale-99  hover:translate-y-1 shadow-[inset_3px_-3px_20px_rgba(0,0,0,0.8),-8px_15px_20px_rgba(0,0,0,0.7),-3px_5px_50px_rgba(0,200,255,0.2),inset_-7px_7px_20px_rgba(255,255,255,0.3)] ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/Formations#solutions web",
                                            onClick: ()=>{
                                                if ("/Formations".startsWith("/")) {
                                                    window.scrollTo(0, 0);
                                                }
                                            },
                                            className: "w-full h-full p-2",
                                            children: "Voir"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 135,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Services.tsx",
                                        lineNumber: 134,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/Services.tsx",
                            lineNumber: 113,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Services.tsx",
                        lineNumber: 101,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$interactive$2d$gradient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveGradient"], {
                        dataAos: "fade-down",
                        color: "#1890ff",
                        glowColor: "#0074d956",
                        followMouse: true,
                        hoverOnly: false,
                        intensity: 100,
                        backgroundColor: "#151419",
                        width: "20rem",
                        height: "fit",
                        borderRadius: "2.25rem",
                        className: "  hover:border-info  h-100% transition-transform mt-5 duration-500 hover:scale-105 hover:-translate-y-5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.6)] shadow-[0_5px_20px_rgba(0,0,0,0.5)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "w-100% relative h-100% rounded-4xl border-none flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-5 w-full h-20 rounded-3xl bg-gray-500 transform duration-300 hover:h-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                alt: "",
                                                width: 320,
                                                height: 420,
                                                className: " object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl ",
                                                src: "/assets/ImgCarousel/13.jpg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Services.tsx",
                                                lineNumber: 168,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 167,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-white",
                                            children: "Intelligence artificielle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 178,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Decouvrez le monde de l'IA et son fonctionnnent plus que mysterieux."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 179,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 180,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 166,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Exploitez la puissance des données grâce à nos solutions en intelligence artificielle. Nous développons des modèles sur mesure pour l’automatisation, la prédiction et l’optimisation, afin de transformer vos données en leviers stratégiques pour votre entreprise."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Services.tsx",
                                        lineNumber: 183,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 182,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "text-white p-0 rounded-2xl w-5/6 bg-[#0074d956] hover:bg-[#003c70a1]  text-md transition-transform duration-400 hover:scale-99  hover:translate-y-1 shadow-[inset_3px_-3px_20px_rgba(0,0,0,0.8),-8px_15px_20px_rgba(0,0,0,0.7),-3px_5px_50px_rgba(0,200,255,0.2),inset_-7px_7px_20px_rgba(255,255,255,0.3)] ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/Formations#ia",
                                                onClick: ()=>{
                                                    if ("/Formations".startsWith("/")) {
                                                        window.scrollTo(0, 0);
                                                    }
                                                },
                                                className: "w-full h-full p-2",
                                                children: "Voir"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Services.tsx",
                                                lineNumber: 187,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 186,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/Services.tsx",
                            lineNumber: 165,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Services.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$interactive$2d$gradient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InteractiveGradient"], {
                        dataAos: "fade-up",
                        color: "#1890ff",
                        glowColor: "#8f0f4459",
                        followMouse: true,
                        hoverOnly: false,
                        intensity: 100,
                        backgroundColor: "#151419",
                        width: "20rem",
                        height: "fit",
                        borderRadius: "2.25rem",
                        className: " hover:border-info transition-transform mt-5 duration-500 hover:scale-105 hover:-translate-y-5 hover:shadow-[0_5px_20px_rgba(0,0,0,0.9)] shadow-[0_5px_20px_rgba(0,0,0,0.5)] ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "w-100% relative h-100% rounded-4xl border-none flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-5 w-full h-20 rounded-3xl bg-gray-500 transform duration-300 hover:h-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                alt: "",
                                                width: 320,
                                                height: 420,
                                                className: " object-cover shadow-[0_5px_20px_rgba(0,200,255,0.6)] relative h-full w-full rounded-3xl ",
                                                src: "/assets/ImgCarousel/4.jpeg"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Services.tsx",
                                                lineNumber: 218,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 217,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            className: "text-white",
                                            children: "Design & Creativite"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 228,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                            children: "Donnez vie a vos idées et pensées sous forme de visuel attractifs."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 229,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 230,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 216,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: " Donnez vie à vos idées avec des designs modernes et percutants. Notre équipe combine créativité et technologies pour concevoir des interfaces ergonomiques, des identités visuelles uniques et des expériences utilisateurs engageantes."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/Services.tsx",
                                        lineNumber: 233,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 232,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "text-white p-0 rounded-2xl w-5/6 bg-[#8f0f4459] hover:bg-[#3f081fb2] text-md transition-transform duration-400 hover:scale-99  hover:translate-y-1 shadow-[inset_3px_-3px_20px_rgba(0,0,0,0.8),-8px_15px_20px_rgba(0,0,0,0.7),-3px_5px_50px_rgba(0,200,255,0.2),inset_-7px_7px_20px_rgba(255,255,255,0.3)] ",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/Formations#design",
                                                onClick: ()=>{
                                                    if ("/Formations".startsWith("/")) {
                                                        window.scrollTo(0, 0);
                                                    }
                                                },
                                                className: "w-full h-full p-2",
                                                children: "Voir"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/Services.tsx",
                                                lineNumber: 237,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/Services.tsx",
                                            lineNumber: 236,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/Services.tsx",
                                    lineNumber: 235,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/Services.tsx",
                            lineNumber: 215,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Services.tsx",
                        lineNumber: 202,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/Services.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-48 rounded overflow-hidden ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$lightswind$2f$AnimatedOceanWaves$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedOceanWaves"], {
                    height: "50%",
                    oceanBackground: "#05080e",
                    frontWaveOpacity: 0.7,
                    backWaveOpacity: 0.28,
                    waveDuration: 10
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/Services.tsx",
                    lineNumber: 260,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Services.tsx",
                lineNumber: 258,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/Services.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Services, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Services;
const __TURBOPACK__default__export__ = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/public/assets/logo.jpg (static in ecmascript)": ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/logo.b552474f.jpg");}),
"[project]/public/assets/logo.jpg.mjs { IMAGE => \"[project]/public/assets/logo.jpg (static in ecmascript)\" } [app-client] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logo$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/public/assets/logo.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logo$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 382,
    height: 382,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0u2TW11+4eaQNYM2I04+UY69M1a5eV33M5c3MrbH/2Q=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whatsapp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$whatsapp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/whatsapp.svg.mjs { IMAGE => "[project]/public/whatsapp.svg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logo$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logo$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/assets/logo.jpg.mjs { IMAGE => "[project]/public/assets/logo.jpg (static in ecmascript)" } [app-client] (structured image object, ecmascript)');
;
;
;
;
;
;
const Footer = (param)=>{
    let { className } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer footer-horizontal footer-center  relative text-primary-content p-10 ".concat(className),
        id: "footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#home",
                        className: "gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$assets$2f$logo$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$assets$2f$logo$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src,
                                alt: "",
                                className: "w-16 h-16 rounded-full mt-1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Footer.tsx",
                                lineNumber: 16,
                                columnNumber: 51
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold",
                                children: "DIVLAB"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Footer.tsx",
                                lineNumber: 17,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Footer.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Copyright © ",
                            new Date().getFullYear(),
                            " - All right reserved"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/Footer.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Made by DIVLAB"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Footer.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/Footer.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-flow-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "https://www.facebook.com/share/16wnRmhYcd",
                            target: "_blank",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {}, void 0, false, {
                                fileName: "[project]/src/app/Components/Footer.tsx",
                                lineNumber: 26,
                                columnNumber: 92
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Footer.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {}, void 0, false, {
                                fileName: "[project]/src/app/Components/Footer.tsx",
                                lineNumber: 27,
                                columnNumber: 36
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Footer.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "#",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {}, void 0, false, {
                                fileName: "[project]/src/app/Components/Footer.tsx",
                                lineNumber: 29,
                                columnNumber: 36
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Footer.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "whatsapp://send?phone=237652509674",
                            target: "_blank",
                            className: "",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$whatsapp$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$whatsapp$2e$svg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"].src,
                                alt: "",
                                className: "w-6 h-6 rounded-full mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/Footer.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/Footer.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Components/Footer.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Footer.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/Footer.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Realisations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Realisations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/About.tsx [app-client] (ecmascript)");
// import Navbar from "./Components/Navbar";
// import ContactForm from "./Components/ContactForm";
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Services.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Home() {
    _s();
    const homeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [navbarTranslateY, setNavbarTranslateY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleScroll = {
                "Home.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    const scrollDelta = currentScrollY - lastScrollY.current;
                    if (!homeRef.current) return;
                    // Vérifie si Accueil est visible ≥30%
                    const rect = homeRef.current.getBoundingClientRect();
                    const homeVisible = rect.bottom > window.innerHeight * 0;
                    if (homeVisible) {
                        // Navbar stable dans Accueil
                        setNavbarTranslateY(0);
                    } else {
                        // Navbar réagit au scroll
                        setNavbarTranslateY({
                            "Home.useEffect.handleScroll": (prev)=>{
                                if (scrollDelta > 0) {
                                    // Scroll vers le bas → disparaît progressivement
                                    return Math.max(prev - scrollDelta, -64); // -64px = hauteur de la navbar
                                } else {
                                    // Scroll vers le haut → réapparaît progressivement
                                    return Math.min(prev - scrollDelta, 0);
                                }
                            }
                        }["Home.useEffect.handleScroll"]);
                    }
                    lastScrollY.current = currentScrollY;
                }
            }["Home.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "App flex  flex-col h-min-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Navbar, {
                    translateY: navbarTranslateY
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative isolate ",
                    ref: homeRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Realisations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Home, "tM+TPWeLli7YtRvB/cEgZDC5A+4=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_78b90103._.js.map