(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/three/DaycareEnvironment.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DaycareEnvironment",
    ()=>DaycareEnvironment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DaycareEnvironment() {
    _s();
    // Create decorative elements with memoization for performance
    const decorativeElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DaycareEnvironment.useMemo[decorativeElements]": ()=>{
            const elements = [];
            // Add decorative wall art and posters
            for(let i = 0; i < 8; i++){
                const angle = i / 8 * Math.PI * 2;
                const radius = 35;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                    type: "fixed",
                    colliders: "cuboid",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                        position: [
                            x,
                            3,
                            z
                        ],
                        rotation: [
                            0,
                            angle + Math.PI,
                            0
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                args: [
                                    2,
                                    1.5
                                ]
                            }, void 0, false, {
                                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                color: i % 2 === 0 ? "#FFE5EC" : "#D4F1F4",
                                roughness: 0.5
                            }, void 0, false, {
                                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/three/DaycareEnvironment.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, `wall-art-${i}`, false, {
                    fileName: "[project]/components/three/DaycareEnvironment.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this));
            }
            return elements;
        }
    }["DaycareEnvironment.useMemo[decorativeElements]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                friction: 1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    receiveShadow: true,
                    position: [
                        0,
                        -0.5,
                        0
                    ],
                    rotation: [
                        -Math.PI / 2,
                        0,
                        0
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                80,
                                80
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareEnvironment.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#FFF5F7",
                            roughness: 0.8,
                            metalness: 0.1
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareEnvironment.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/three/DaycareEnvironment.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WallSegment, {
                position: [
                    0,
                    2,
                    -40
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                width: 80,
                height: 4,
                color: "#E0BBE4",
                hasWindows: true
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WallSegment, {
                position: [
                    0,
                    2,
                    40
                ],
                rotation: [
                    0,
                    Math.PI,
                    0
                ],
                width: 80,
                height: 4,
                color: "#E0BBE4",
                hasWindows: true
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WallSegment, {
                position: [
                    -40,
                    2,
                    0
                ],
                rotation: [
                    0,
                    Math.PI / 2,
                    0
                ],
                width: 80,
                height: 4,
                color: "#FFDFD3",
                hasWindows: true
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WallSegment, {
                position: [
                    40,
                    2,
                    0
                ],
                rotation: [
                    0,
                    -Math.PI / 2,
                    0
                ],
                width: 80,
                height: 4,
                color: "#FFDFD3",
                hasWindows: true
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WallSegment, {
                position: [
                    -10,
                    2,
                    15
                ],
                rotation: [
                    0,
                    0,
                    0
                ],
                width: 20,
                height: 4,
                color: "#D4F1F4"
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WallSegment, {
                position: [
                    10,
                    2,
                    -15
                ],
                rotation: [
                    0,
                    Math.PI / 2,
                    0
                ],
                width: 15,
                height: 4,
                color: "#FFEAA7"
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        6,
                        0
                    ],
                    rotation: [
                        Math.PI / 2,
                        0,
                        0
                    ],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                            args: [
                                80,
                                80
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareEnvironment.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#FFFAF0",
                            side: 2,
                            transparent: true,
                            opacity: 0.9
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareEnvironment.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/three/DaycareEnvironment.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.01,
                    0
                ],
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                        args: [
                            8,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareEnvironment.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#FFE5EC",
                        roughness: 0.9
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareEnvironment.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -15,
                    0.01,
                    -15
                ],
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                        args: [
                            5,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareEnvironment.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#E0BBE4",
                        roughness: 0.9
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareEnvironment.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    15,
                    0.01,
                    15
                ],
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                        args: [
                            5,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareEnvironment.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#D4F1F4",
                        roughness: 0.9
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareEnvironment.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareEnvironment.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(DaycareEnvironment, "PKwVF2R4anfKGoQkAuenViIONKo=");
_c = DaycareEnvironment;
function WallSegment({ position, rotation, width, height, color, hasWindows = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
        type: "fixed",
        colliders: "cuboid",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            position: position,
            rotation: rotation,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    castShadow: true,
                    receiveShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                            args: [
                                width,
                                height,
                                0.2
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareEnvironment.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: color,
                            roughness: 0.7,
                            metalness: 0.2
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareEnvironment.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/three/DaycareEnvironment.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                hasWindows && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                0,
                                0,
                                0.11
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                                    args: [
                                        width * 0.8,
                                        height * 0.6
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/three/DaycareEnvironment.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: "#D4F1F4",
                                    transparent: true,
                                    opacity: 0.7
                                }, void 0, false, {
                                    fileName: "[project]/components/three/DaycareEnvironment.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/three/DaycareEnvironment.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                -width * 0.35,
                                height * 0.2,
                                0.12
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                    args: [
                                        0.5,
                                        0.1,
                                        0.03
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/three/DaycareEnvironment.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: "#FFE5EC"
                                }, void 0, false, {
                                    fileName: "[project]/components/three/DaycareEnvironment.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/three/DaycareEnvironment.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                            position: [
                                width * 0.35,
                                height * 0.2,
                                0.12
                            ],
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                                    args: [
                                        0.5,
                                        0.1,
                                        0.03
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/components/three/DaycareEnvironment.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                                    color: "#FFE5EC"
                                }, void 0, false, {
                                    fileName: "[project]/components/three/DaycareEnvironment.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/three/DaycareEnvironment.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/components/three/DaycareEnvironment.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/three/DaycareEnvironment.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
_c1 = WallSegment;
var _c, _c1;
__turbopack_context__.k.register(_c, "DaycareEnvironment");
__turbopack_context__.k.register(_c1, "WallSegment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/stores/gameStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectAllCaregivers",
    ()=>selectAllCaregivers,
    "selectAllPlayers",
    ()=>selectAllPlayers,
    "selectCaregiverById",
    ()=>selectCaregiverById,
    "selectPlayerById",
    ()=>selectPlayerById,
    "useGameStore",
    ()=>useGameStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const useGameStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subscribeWithSelector"])((set, get)=>({
        currentLobby: null,
        currentPlayerId: null,
        players: new Map(),
        caregivers: new Map(),
        objects: new Map(),
        accidents: new Map(),
        messages: [],
        isVoiceActive: false,
        selectedPlayerId: null,
        showPaywall: false,
        setCurrentLobby: (lobby)=>set({
                currentLobby: lobby,
                players: new Map(lobby.players),
                caregivers: new Map(lobby.caregivers),
                objects: new Map(lobby.objects),
                accidents: new Map(lobby.accidents)
            }),
        setCurrentPlayer: (playerId)=>set({
                currentPlayerId: playerId
            }),
        updatePlayer: (playerId, updates)=>set((state)=>{
                const players = new Map(state.players);
                const player = players.get(playerId);
                if (player) {
                    players.set(playerId, {
                        ...player,
                        ...updates
                    });
                }
                return player ? {
                    players
                } : state;
            }),
        updateCaregiver: (caregiverId, updates)=>set((state)=>{
                const caregivers = new Map(state.caregivers);
                const caregiver = caregivers.get(caregiverId);
                if (caregiver) {
                    caregivers.set(caregiverId, {
                        ...caregiver,
                        ...updates
                    });
                }
                return caregiver ? {
                    caregivers
                } : state;
            }),
        addMessage: (message)=>set((state)=>({
                    messages: [
                        ...state.messages,
                        message
                    ].slice(-100)
                })),
        addAccident: (accident)=>set((state)=>{
                const accidents = new Map(state.accidents);
                accidents.set(accident.id, accident);
                return {
                    accidents
                };
            }),
        cleanAccident: (accidentId)=>set((state)=>{
                const accidents = new Map(state.accidents);
                const accident = accidents.get(accidentId);
                if (accident) {
                    accidents.set(accidentId, {
                        ...accident,
                        cleanedUp: true
                    });
                }
                return {
                    accidents
                };
            }),
        updateObject: (objectId, updates)=>set((state)=>{
                const objects = new Map(state.objects);
                const obj = objects.get(objectId);
                if (obj) {
                    objects.set(objectId, {
                        ...obj,
                        ...updates
                    });
                }
                return {
                    objects
                };
            }),
        setVoiceActive: (active)=>set({
                isVoiceActive: active
            }),
        setSelectedPlayer: (playerId)=>set({
                selectedPlayerId: playerId
            }),
        setShowPaywall: (show)=>set({
                showPaywall: show
            }),
        updatePlayerPosition: (playerId, position, rotation)=>set((state)=>{
                const players = new Map(state.players);
                const player = players.get(playerId);
                if (player) {
                    if (player.position.x === position.x && player.position.y === position.y && player.position.z === position.z && player.rotation === rotation) {
                        return state;
                    }
                    players.set(playerId, {
                        ...player,
                        position,
                        rotation
                    });
                }
                return player ? {
                    players
                } : state;
            }),
        updatePlayerClothing: (playerId, clothing)=>set((state)=>{
                const players = new Map(state.players);
                const player = players.get(playerId);
                if (player) {
                    players.set(playerId, {
                        ...player,
                        clothing: {
                            ...player.clothing,
                            ...clothing
                        }
                    });
                }
                return player ? {
                    players
                } : state;
            }),
        updatePlayerNeeds: (playerId, needs)=>set((state)=>{
                const players = new Map(state.players);
                const player = players.get(playerId);
                if (player) {
                    players.set(playerId, {
                        ...player,
                        needs: {
                            ...player.needs,
                            ...needs
                        }
                    });
                }
                return player ? {
                    players
                } : state;
            }),
        addCaregiver: (caregiver)=>set((state)=>{
                const caregivers = new Map(state.caregivers);
                caregivers.set(caregiver.id, caregiver);
                return {
                    caregivers
                };
            })
    })));
const selectPlayerById = (state, playerId)=>state.players.get(playerId);
const selectAllPlayers = (state)=>state.players;
const selectCaregiverById = (state, caregiverId)=>state.caregivers.get(caregiverId);
const selectAllCaregivers = (state)=>state.caregivers;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/three/DaycareObjects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DaycareObjects",
    ()=>DaycareObjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function DaycareObjects() {
    _s();
    const objectsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "DaycareObjects.useGameStore[objectsMap]": (state)=>state.objects
    }["DaycareObjects.useGameStore[objectsMap]"]);
    const objects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DaycareObjects.useMemo[objects]": ()=>Array.from(objectsMap.values())
    }["DaycareObjects.useMemo[objects]"], [
        objectsMap
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            objects.map((obj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InteractiveObjectMesh, {
                    object: obj
                }, obj.id, false, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)),
            objects.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultDaycareObjects, {}, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 19,
                columnNumber: 32
            }, this)
        ]
    }, void 0, true);
}
_s(DaycareObjects, "uBDXfqKesqZUtMCrV0WdhecQtpA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = DaycareObjects;
function InteractiveObjectMesh({ object }) {
    _s1();
    const updateObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "InteractiveObjectMesh.useGameStore[updateObject]": (state)=>state.updateObject
    }["InteractiveObjectMesh.useGameStore[updateObject]"]);
    const handleClick = ()=>{
        console.log("[v0] Object clicked:", object.id, object.type);
    // Handle object interaction
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
        type: "fixed",
        colliders: "cuboid",
        position: [
            object.position.x,
            object.position.y,
            object.position.z
        ],
        rotation: [
            0,
            object.rotation,
            0
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ObjectByType, {
            type: object.type,
            isOccupied: object.isOccupied,
            onClick: handleClick
        }, void 0, false, {
            fileName: "[project]/components/three/DaycareObjects.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/three/DaycareObjects.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s1(InteractiveObjectMesh, "SiA9UwIUqEAVZ0wKfvyUeguaPJE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c1 = InteractiveObjectMesh;
function ObjectByType({ type, isOccupied, onClick }) {
    const occupiedColor = isOccupied ? "#FFA5A5" : "#B5EAD7";
    switch(type){
        case "changing_station":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChangingStation, {
                color: occupiedColor,
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 57,
                columnNumber: 14
            }, this);
        case "timeout_chair":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeoutChair, {
                color: occupiedColor,
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 60,
                columnNumber: 14
            }, this);
        case "timeout_stool":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeoutStool, {
                color: occupiedColor,
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 63,
                columnNumber: 14
            }, this);
        case "slide":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slide, {
                color: occupiedColor,
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 66,
                columnNumber: 14
            }, this);
        case "play_area":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayArea, {
                color: occupiedColor,
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 69,
                columnNumber: 14
            }, this);
        case "potty":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Potty, {
                color: occupiedColor,
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 72,
                columnNumber: 14
            }, this);
        case "toilet_female":
        case "toilet_male":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toilet, {
                color: occupiedColor,
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 76,
                columnNumber: 14
            }, this);
        case "toy_box":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToyBox, {
                color: occupiedColor,
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 79,
                columnNumber: 14
            }, this);
        case "music_system":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MusicSystem, {
                color: occupiedColor,
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 82,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultObject, {
                color: occupiedColor,
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 85,
                columnNumber: 14
            }, this);
    }
}
_c2 = ObjectByType;
function ChangingStation({ color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.75,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            2,
                            0.2,
                            1.5
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        roughness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.8,
                    0.35,
                    -0.6
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.05,
                            0.05,
                            0.7
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#C7CEEA"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.8,
                    0.35,
                    -0.6
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.05,
                            0.05,
                            0.7
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#C7CEEA"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.8,
                    0.35,
                    0.6
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.05,
                            0.05,
                            0.7
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#C7CEEA"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.8,
                    0.35,
                    0.6
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.05,
                            0.05,
                            0.7
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#C7CEEA"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.95,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.8,
                            0.3,
                            1.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#FFE5EC",
                        roughness: 0.9
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/DaycareObjects.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c3 = ChangingStation;
function TimeoutChair({ color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.4,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.6,
                            0.1,
                            0.6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        roughness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.8,
                    -0.25
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.6,
                            0.7,
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        roughness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            [
                [
                    -0.25,
                    0.2,
                    -0.25
                ],
                [
                    0.25,
                    0.2,
                    -0.25
                ],
                [
                    -0.25,
                    0.2,
                    0.25
                ],
                [
                    0.25,
                    0.2,
                    0.25
                ]
            ].map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: pos,
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                            args: [
                                0.03,
                                0.03,
                                0.4
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareObjects.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#E0BBE4"
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareObjects.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/DaycareObjects.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_c4 = TimeoutChair;
function TimeoutStool({ color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.3,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.3,
                            0.3,
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        roughness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            [
                [
                    -0.2,
                    0.125,
                    -0.2
                ],
                [
                    0.2,
                    0.125,
                    -0.2
                ],
                [
                    -0.2,
                    0.125,
                    0.2
                ],
                [
                    0.2,
                    0.125,
                    0.2
                ]
            ].map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: pos,
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                            args: [
                                0.025,
                                0.025,
                                0.25
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareObjects.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#FFDFD3"
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareObjects.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/DaycareObjects.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c5 = TimeoutStool;
function Slide({ color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1,
                    0
                ],
                rotation: [
                    -Math.PI / 6,
                    0,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.2,
                            0.1,
                            3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        roughness: 0.3,
                        metalness: 0.4
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.55,
                    1.2,
                    0
                ],
                rotation: [
                    -Math.PI / 6,
                    0,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.1,
                            0.3,
                            3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#D4F1F4"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.55,
                    1.2,
                    0
                ],
                rotation: [
                    -Math.PI / 6,
                    0,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.1,
                            0.3,
                            3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#D4F1F4"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    2,
                    -1.2
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.2,
                            0.2,
                            0.8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#FFEAA7"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1,
                    -1.2
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.1,
                            0.1,
                            2
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#E0BBE4"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/DaycareObjects.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_c6 = Slide;
function PlayArea({ color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.05,
                    0
                ],
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                        args: [
                            2,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        roughness: 0.9
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.5,
                    0.2,
                    0.5
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.3,
                            0.3,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#FFE5EC"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.6,
                    0.15,
                    -0.4
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.15
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#D4F1F4"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.25,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.2,
                            0.2,
                            0.5
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#FFDFD3"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/DaycareObjects.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_c7 = PlayArea;
function Potty({ color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.15,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.25,
                            0.3,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        roughness: 0.4
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.35,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.22,
                            0.18,
                            0.15
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#FFFFFF",
                        roughness: 0.2,
                        metalness: 0.3
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.5,
                    -0.2
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.4,
                            0.3,
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        roughness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/DaycareObjects.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
_c8 = Potty;
function Toilet({ color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.2,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.5,
                            0.4,
                            0.6
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#FFFFFF",
                        roughness: 0.2,
                        metalness: 0.3
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.45,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.2,
                            0.2,
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#FFFFFF",
                        roughness: 0.2,
                        metalness: 0.3
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.7,
                    -0.2
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.45,
                            0.5,
                            0.2
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#FFFFFF",
                        roughness: 0.2,
                        metalness: 0.3
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.5,
                    0
                ],
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ringGeometry", {
                        args: [
                            0.15,
                            0.25,
                            32
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        roughness: 0.4,
                        side: 2
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/DaycareObjects.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
_c9 = Toilet;
function ToyBox({ color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.4,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.2,
                            0.8,
                            0.8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        roughness: 0.7
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.85,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            1.25,
                            0.1,
                            0.85
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#E0BBE4",
                        roughness: 0.7
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.3,
                    0.9,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#FFE5EC"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.2,
                    0.95,
                    0.1
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.15,
                            0.15,
                            0.15
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#D4F1F4"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/DaycareObjects.tsx",
        lineNumber: 283,
        columnNumber: 5
    }, this);
}
_c10 = ToyBox;
function MusicSystem({ color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.5,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.8,
                            0.6,
                            0.4
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: color,
                        roughness: 0.5,
                        metalness: 0.5
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    0.55,
                    0.21
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            0.6,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#87CEEB",
                        emissive: "#87CEEB",
                        emissiveIntensity: 0.5
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareObjects.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            [
                -0.2,
                0,
                0.2
            ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        x,
                        0.25,
                        0.21
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                            args: [
                                0.05,
                                0.05,
                                0.05
                            ]
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareObjects.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#FFE5EC"
                        }, void 0, false, {
                            fileName: "[project]/components/three/DaycareObjects.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/DaycareObjects.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, this);
}
_c11 = MusicSystem;
function DefaultObject({ color, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        onClick: onClick,
        castShadow: true,
        receiveShadow: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                args: [
                    1,
                    1,
                    1
                ]
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                color: color,
                roughness: 0.6
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/DaycareObjects.tsx",
        lineNumber: 333,
        columnNumber: 5
    }, this);
}
_c12 = DefaultObject;
function DefaultDaycareObjects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                position: [
                    -15,
                    0,
                    10
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChangingStation, {
                    color: "#B5EAD7",
                    onClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 345,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                position: [
                    15,
                    0,
                    -15
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeoutChair, {
                    color: "#B5EAD7",
                    onClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 350,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                position: [
                    17,
                    0,
                    -15
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeoutChair, {
                    color: "#B5EAD7",
                    onClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 353,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 352,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                position: [
                    -20,
                    0,
                    -10
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slide, {
                    color: "#FFB7B2",
                    onClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                position: [
                    0,
                    0,
                    0
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayArea, {
                    color: "#D4F1F4",
                    onClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 363,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                position: [
                    -5,
                    0,
                    15
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Potty, {
                    color: "#FFEAA7",
                    onClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 368,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                position: [
                    -3,
                    0,
                    15
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Potty, {
                    color: "#FFEAA7",
                    onClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                position: [
                    18,
                    0,
                    18
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toilet, {
                    color: "#E0BBE4",
                    onClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                position: [
                    -10,
                    0,
                    -5
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToyBox, {
                    color: "#FFDFD3",
                    onClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 381,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
                type: "fixed",
                colliders: "cuboid",
                position: [
                    10,
                    0,
                    10
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MusicSystem, {
                    color: "#C7CEEA",
                    onClick: ()=>{}
                }, void 0, false, {
                    fileName: "[project]/components/three/DaycareObjects.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/three/DaycareObjects.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c13 = DefaultDaycareObjects;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "DaycareObjects");
__turbopack_context__.k.register(_c1, "InteractiveObjectMesh");
__turbopack_context__.k.register(_c2, "ObjectByType");
__turbopack_context__.k.register(_c3, "ChangingStation");
__turbopack_context__.k.register(_c4, "TimeoutChair");
__turbopack_context__.k.register(_c5, "TimeoutStool");
__turbopack_context__.k.register(_c6, "Slide");
__turbopack_context__.k.register(_c7, "PlayArea");
__turbopack_context__.k.register(_c8, "Potty");
__turbopack_context__.k.register(_c9, "Toilet");
__turbopack_context__.k.register(_c10, "ToyBox");
__turbopack_context__.k.register(_c11, "MusicSystem");
__turbopack_context__.k.register(_c12, "DefaultObject");
__turbopack_context__.k.register(_c13, "DefaultDaycareObjects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/three/PlayerCharacters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerCharacters",
    ()=>PlayerCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './StablePlayerController'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$KeyboardControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/KeyboardControls.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Keyboard controls configuration
const keyboardMap = [
    {
        name: "forward",
        keys: [
            "ArrowUp",
            "KeyW"
        ]
    },
    {
        name: "backward",
        keys: [
            "ArrowDown",
            "KeyS"
        ]
    },
    {
        name: "left",
        keys: [
            "ArrowLeft",
            "KeyA"
        ]
    },
    {
        name: "right",
        keys: [
            "ArrowRight",
            "KeyD"
        ]
    },
    {
        name: "jump",
        keys: [
            "Space"
        ]
    },
    {
        name: "run",
        keys: [
            "ShiftLeft",
            "ShiftRight"
        ]
    }
];
function PlayerCharacters() {
    _s();
    const playersMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "PlayerCharacters.useGameStore[playersMap]": (state)=>state.players
    }["PlayerCharacters.useGameStore[playersMap]"]);
    const currentPlayerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "PlayerCharacters.useGameStore[currentPlayerId]": (state)=>state.currentPlayerId
    }["PlayerCharacters.useGameStore[currentPlayerId]"]);
    const players = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerCharacters.useMemo[players]": ()=>Array.from(playersMap.values())
    }["PlayerCharacters.useMemo[players]"], [
        playersMap
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$KeyboardControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardControls"], {
        map: keyboardMap,
        children: players.map((player)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StablePlayerController, {
                player: player,
                isLocalPlayer: player.id === currentPlayerId
            }, player.id, false, {
                fileName: "[project]/components/three/PlayerCharacters.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/three/PlayerCharacters.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(PlayerCharacters, "AfgA2DLD83Nl3Z9M3VWUb20IaNE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = PlayerCharacters;
var _c;
__turbopack_context__.k.register(_c, "PlayerCharacters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/PathfindingService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PathfindingService",
    ()=>PathfindingService
]);
class PathfindingService {
    grid;
    gridWidth;
    gridHeight;
    cellSize;
    obstacles = new Set();
    dynamicObstacles = new Map();
    constructor(gridWidth = 40, gridHeight = 40, cellSize = 2){
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.cellSize = cellSize;
        this.grid = this.createGrid();
    }
    /**
   * Create the initial grid for the daycare environment
   */ createGrid() {
        const grid = [];
        for(let x = 0; x < this.gridWidth; x++){
            grid[x] = [];
            for(let y = 0; y < this.gridHeight; y++){
                // Mark boundaries as blocked
                if (x === 0 || x === this.gridWidth - 1 || y === 0 || y === this.gridHeight - 1) {
                    grid[x][y] = false; // Blocked
                } else {
                    grid[x][y] = true; // Walkable
                }
            }
        }
        // Add static obstacles (walls, furniture)
        this.addStaticObstacles(grid);
        return grid;
    }
    /**
   * Add static obstacles for the daycare environment
   */ addStaticObstacles(grid) {
        // Interior walls (simplified daycare layout)
        this.addRectangularObstacle(grid, 15, 15, 10, 1, "interior_wall_1");
        this.addRectangularObstacle(grid, 25, 20, 1, 8, "interior_wall_2");
        this.addRectangularObstacle(grid, 5, 25, 15, 1, "interior_wall_3");
        // Furniture areas
        this.addRectangularObstacle(grid, 8, 8, 3, 3, "toy_storage");
        this.addRectangularObstacle(grid, 30, 12, 4, 2, "bookshelf");
        this.addRectangularObstacle(grid, 12, 30, 6, 3, "changing_area");
        // Kitchen/Bathroom areas (blocked for safety)
        this.addRectangularObstacle(grid, 2, 2, 6, 4, "kitchen_area");
        this.addRectangularObstacle(grid, 32, 32, 6, 6, "bathroom_area");
        // Play equipment (circular obstacles)
        this.addCircularObstacle(grid, 20, 10, 2, "slide");
        this.addCircularObstacle(grid, 15, 25, 2.5, "climbing_structure");
        this.addCircularObstacle(grid, 28, 18, 1.5, "toy_chest");
    }
    /**
   * Add a rectangular obstacle to the grid
   */ addRectangularObstacle(grid, startX, startY, width, height, id) {
        for(let x = startX; x < startX + width && x < this.gridWidth; x++){
            for(let y = startY; y < startY + height && y < this.gridHeight; y++){
                if (x >= 0 && y >= 0) {
                    grid[x][y] = false; // Blocked
                }
            }
        }
        this.obstacles.add(id);
    }
    /**
   * Add a circular obstacle to the grid
   */ addCircularObstacle(grid, centerX, centerY, radius, id) {
        const radiusSquared = radius * radius;
        // Calculate integer bounds for the loop to avoid floating-point array indices
        const startX = Math.max(0, Math.floor(centerX - radius));
        const endX = Math.min(this.gridWidth, Math.ceil(centerX + radius));
        const startY = Math.max(0, Math.floor(centerY - radius));
        const endY = Math.min(this.gridHeight, Math.ceil(centerY + radius));
        for(let x = startX; x < endX; x++){
            for(let y = startY; y < endY; y++){
                // Additional bounds check to prevent undefined access
                if (x >= 0 && x < this.gridWidth && y >= 0 && y < this.gridHeight) {
                    const distanceSquared = (x - centerX) * (x - centerX) + (y - centerY) * (y - centerY);
                    if (distanceSquared <= radiusSquared) {
                        grid[x][y] = false; // Blocked
                    }
                }
            }
        }
        this.obstacles.add(id);
    }
    /**
   * Add dynamic obstacle (other players, temporary objects)
   */ addDynamicObstacle(id, position, radius, durationMs) {
        const expiresAt = durationMs ? Date.now() + durationMs : undefined;
        this.dynamicObstacles.set(id, {
            position,
            radius,
            expiresAt
        });
        // Clean up expired obstacles periodically
        if (expiresAt) {
            setTimeout(()=>{
                this.dynamicObstacles.delete(id);
            }, durationMs);
        }
    }
    /**
   * Remove dynamic obstacle
   */ removeDynamicObstacle(id) {
        this.dynamicObstacles.delete(id);
    }
    /**
   * Find path using A* algorithm
   */ findPath(start, end, avoidDynamicObstacles = true) {
        const startNode = this.worldToGrid(start);
        const endNode = this.worldToGrid(end);
        // Validate start and end positions
        if (!this.isValidPosition(startNode.x, startNode.y) || !this.isValidPosition(endNode.x, endNode.y)) {
            console.warn("Invalid start or end position for pathfinding");
            return [];
        }
        // If start and end are the same
        if (startNode.x === endNode.x && startNode.y === endNode.y) {
            return [
                start
            ];
        }
        const openSet = [];
        const closedSet = new Set();
        const cameFrom = new Map();
        // Add start node to open set
        const startKey = `${startNode.x},${startNode.y}`;
        const hStart = this.heuristic(startNode, endNode);
        openSet.push({
            x: startNode.x,
            y: startNode.y,
            g: 0,
            h: hStart,
            f: hStart
        });
        while(openSet.length > 0){
            // Find node with lowest f score
            let currentIndex = 0;
            for(let i = 1; i < openSet.length; i++){
                if (openSet[i].f < openSet[currentIndex].f) {
                    currentIndex = i;
                }
            }
            const current = openSet.splice(currentIndex, 1)[0];
            const currentKey = `${current.x},${current.y}`;
            // Add to closed set
            closedSet.add(currentKey);
            // Check if we reached the goal
            if (current.x === endNode.x && current.y === endNode.y) {
                return this.reconstructPath(cameFrom, current, start, end);
            }
            // Check neighbors
            const neighbors = this.getNeighbors(current.x, current.y, avoidDynamicObstacles);
            for (const neighbor of neighbors){
                const neighborKey = `${neighbor.x},${neighbor.y}`;
                if (closedSet.has(neighborKey)) {
                    continue;
                }
                const tentativeG = current.g + this.getMovementCost(current, neighbor);
                // Check if this path to neighbor is better
                const existingNodeIndex = openSet.findIndex((node)=>node.x === neighbor.x && node.y === neighbor.y);
                if (existingNodeIndex === -1) {
                    // New node
                    const g = tentativeG;
                    const h = this.heuristic(neighbor, endNode);
                    const f = g + h;
                    openSet.push({
                        x: neighbor.x,
                        y: neighbor.y,
                        g,
                        h,
                        f,
                        parent: {
                            x: current.x,
                            y: current.y
                        }
                    });
                    cameFrom.set(neighborKey, {
                        x: current.x,
                        y: current.y
                    });
                } else if (tentativeG < openSet[existingNodeIndex].g) {
                    // Better path found
                    openSet[existingNodeIndex].g = tentativeG;
                    openSet[existingNodeIndex].f = tentativeG + openSet[existingNodeIndex].h;
                    openSet[existingNodeIndex].parent = {
                        x: current.x,
                        y: current.y
                    };
                    cameFrom.set(neighborKey, {
                        x: current.x,
                        y: current.y
                    });
                }
            }
        }
        // No path found
        console.warn("No path found from", start, "to", end);
        return [];
    }
    /**
   * Get walkable neighbors for a position
   */ getNeighbors(x, y, avoidDynamicObstacles) {
        const neighbors = [];
        const directions = [
            {
                x: -1,
                y: -1
            },
            {
                x: 0,
                y: -1
            },
            {
                x: 1,
                y: -1
            },
            {
                x: -1,
                y: 0
            },
            {
                x: 1,
                y: 0
            },
            {
                x: -1,
                y: 1
            },
            {
                x: 0,
                y: 1
            },
            {
                x: 1,
                y: 1
            }
        ];
        for (const dir of directions){
            const newX = x + dir.x;
            const newY = y + dir.y;
            if (this.isWalkable(newX, newY, avoidDynamicObstacles)) {
                neighbors.push({
                    x: newX,
                    y: newY
                });
            }
        }
        return neighbors;
    }
    /**
   * Check if a position is walkable
   */ isWalkable(x, y, avoidDynamicObstacles) {
        // Check grid bounds
        if (!this.isValidPosition(x, y)) {
            return false;
        }
        // Check static obstacles
        if (!this.grid[x][y]) {
            return false;
        }
        // Check dynamic obstacles
        if (avoidDynamicObstacles) {
            const worldPos = this.gridToWorld({
                x,
                y
            });
            this.dynamicObstacles.forEach((obstacle, id)=>{
                if (obstacle.expiresAt && Date.now() > obstacle.expiresAt) {
                    return; // Skip expired obstacles
                }
                const distance = this.calculateDistance(worldPos, obstacle.position);
                if (distance < obstacle.radius + 0.5) {
                    // Add small buffer
                    return false;
                }
            });
        }
        return true;
    }
    /**
   * Check if position is within grid bounds
   */ isValidPosition(x, y) {
        return x >= 0 && x < this.gridWidth && y >= 0 && y < this.gridHeight;
    }
    /**
   * Calculate heuristic (Manhattan distance for 4-directional, Euclidean for 8-directional)
   */ heuristic(a, b) {
        const dx = Math.abs(a.x - b.x);
        const dy = Math.abs(a.y - b.y);
        return Math.sqrt(dx * dx + dy * dy) // Euclidean distance
        ;
    }
    /**
   * Calculate movement cost between two nodes
   */ getMovementCost(a, b) {
        const dx = Math.abs(a.x - b.x);
        const dy = Math.abs(a.y - b.y);
        // Diagonal movement costs more
        if (dx === 1 && dy === 1) {
            return Math.SQRT2 // ~1.414
            ;
        }
        return 1 // Straight movement
        ;
    }
    /**
   * Reconstruct path from cameFrom map
   */ reconstructPath(cameFrom, current, startWorld, endWorld) {
        const path = [];
        // Add end position
        path.unshift(endWorld);
        // Work backwards from current node
        let currentKey = `${current.x},${current.y}`;
        while(cameFrom.has(currentKey)){
            const parent = cameFrom.get(currentKey);
            const parentWorld = this.gridToWorld(parent);
            path.unshift(parentWorld);
            currentKey = `${parent.x},${parent.y}`;
        }
        // Add start position
        path.unshift(startWorld);
        return path;
    }
    /**
   * Convert world coordinates to grid coordinates
   */ worldToGrid(position) {
        return {
            x: Math.floor((position.x + this.gridWidth * this.cellSize / 2) / this.cellSize),
            y: Math.floor((position.z + this.gridHeight * this.cellSize / 2) / this.cellSize)
        };
    }
    /**
   * Convert grid coordinates to world coordinates
   */ gridToWorld(gridPos) {
        return {
            x: gridPos.x * this.cellSize - this.gridWidth * this.cellSize / 2,
            y: 0,
            z: gridPos.y * this.cellSize - this.gridHeight * this.cellSize / 2
        };
    }
    /**
   * Calculate distance between two world positions
   */ calculateDistance(p1, p2) {
        const dx = p1.x - p2.x;
        const dz = p1.z - p2.z;
        return Math.sqrt(dx * dx + dz * dz);
    }
    /**
   * Find nearest walkable position to a given point
   */ findNearestWalkable(position, maxSearchRadius = 5) {
        const startGrid = this.worldToGrid(position);
        const searchRadius = Math.ceil(maxSearchRadius / this.cellSize);
        // Check center first
        if (this.isWalkable(startGrid.x, startGrid.y, true)) {
            return position;
        }
        // Spiral search outward
        for(let radius = 1; radius <= searchRadius; radius++){
            for(let x = startGrid.x - radius; x <= startGrid.x + radius; x++){
                for(let y = startGrid.y - radius; y <= startGrid.y + radius; y++){
                    // Only check the perimeter of the current radius
                    if (Math.abs(x - startGrid.x) === radius || Math.abs(y - startGrid.y) === radius) {
                        if (this.isWalkable(x, y, true)) {
                            return this.gridToWorld({
                                x,
                                y
                            });
                        }
                    }
                }
            }
        }
        return null // No walkable position found within radius
        ;
    }
    /**
   * Update grid with interactive objects
   */ updateWithObjects(objects) {
        // Clear existing dynamic obstacles from objects
        const objectKeysToRemove = [];
        this.dynamicObstacles.forEach((obstacle, id)=>{
            if (id.startsWith("object_")) {
                objectKeysToRemove.push(id);
            }
        });
        objectKeysToRemove.forEach((id)=>{
            this.dynamicObstacles.delete(id);
        });
        // Add current objects as obstacles
        for (const obj of objects){
            if (obj.isOccupied) {
                this.addDynamicObstacle(`object_${obj.id}`, obj.position, 1.5);
            }
        }
    }
    /**
   * Get pathfinding debug info
   */ getDebugInfo() {
        return {
            gridSize: {
                width: this.gridWidth,
                height: this.gridHeight
            },
            staticObstacles: Array.from(this.obstacles),
            dynamicObstacles: this.dynamicObstacles.size,
            cellSize: this.cellSize
        };
    }
    /**
   * Smooth path using line-of-sight checks
   */ smoothPath(path) {
        if (path.length <= 2) {
            return path;
        }
        const smoothedPath = [
            path[0]
        ];
        let currentIndex = 0;
        while(currentIndex < path.length - 1){
            let farthestReachable = currentIndex + 1;
            // Find the farthest point we can reach in a straight line
            for(let i = currentIndex + 2; i < path.length; i++){
                if (this.hasLineOfSight(path[currentIndex], path[i])) {
                    farthestReachable = i;
                } else {
                    break;
                }
            }
            smoothedPath.push(path[farthestReachable]);
            currentIndex = farthestReachable;
        }
        return smoothedPath;
    }
    /**
   * Check if there's a line of sight between two points
   */ hasLineOfSight(start, end) {
        const steps = Math.ceil(this.calculateDistance(start, end) / (this.cellSize / 2));
        for(let i = 1; i < steps; i++){
            const t = i / steps;
            const point = {
                x: start.x + (end.x - start.x) * t,
                y: 0,
                z: start.z + (end.z - start.z) * t
            };
            const gridPos = this.worldToGrid(point);
            if (!this.isWalkable(gridPos.x, gridPos.y, true)) {
                return false;
            }
        }
        return true;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/BrainService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrainService",
    ()=>BrainService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>");
;
class BrainService {
    caregiver;
    lobby;
    decisionInterval;
    perceptionRadius;
    lastDecisionTime = 0;
    behaviorMemory = new Map();
    interactionCooldowns = new Map();
    constructor(caregiver, lobby, config = {}){
        this.caregiver = caregiver;
        this.lobby = lobby;
        this.decisionInterval = config.decisionInterval || 2000; // Default 2 seconds
        this.perceptionRadius = config.perceptionRadius || 15; // Default 15 units
    }
    /**
   * Update the caregiver reference
   */ updateCaregiver(caregiver) {
        this.caregiver = caregiver;
    }
    /**
   * Update the lobby reference
   */ updateLobby(lobby) {
        this.lobby = lobby;
    }
    /**
   * Main decision-making loop with enhanced logic
   */ async makeDecision() {
        const now = Date.now();
        if (now - this.lastDecisionTime < this.decisionInterval) {
            return null;
        }
        this.lastDecisionTime = now;
        // Update perception first
        this.updatePerception();
        try {
            // Enhanced decision making with multiple priority levels
            return this.makeEnhancedDecision();
        } catch (error) {
            console.error("BrainService decision error:", error);
            return null;
        }
    }
    /**
   * Enhanced decision making with sophisticated prioritization
   */ makeEnhancedDecision() {
        // Priority 1: Immediate safety concerns
        const safetyDecision = this.assessSafetyConcerns();
        if (safetyDecision) return safetyDecision;
        // Priority 2: Critical needs (diaper, bathroom)
        const needsDecision = this.assessCriticalNeeds();
        if (needsDecision) return needsDecision;
        // Priority 3: Behavioral interventions
        const behaviorDecision = this.assessBehavioralIssues();
        if (behaviorDecision) return behaviorDecision;
        // Priority 4: Environment maintenance
        const maintenanceDecision = this.assessEnvironmentMaintenance();
        if (maintenanceDecision) return maintenanceDecision;
        // Priority 5: Positive engagement
        const engagementDecision = this.assessPositiveEngagement();
        if (engagementDecision) return engagementDecision;
        return null;
    }
    /**
   * Assess immediate safety concerns
   */ assessSafetyConcerns() {
        // Check for accidents that pose safety risks
        const dangerousAccidents = Array.from(this.lobby.accidents.values()).filter((accident)=>!accident.cleanedUp && accident.size > 70);
        if (dangerousAccidents.length > 0) {
            const nearestAccident = this.findNearestAccident(dangerousAccidents);
            return this.createCleaningDecision(nearestAccident, "dangerous_accident");
        }
        // Check for players in dangerous situations
        const endangeredPlayers = this.identifyEndangeredPlayers();
        if (endangeredPlayers.length > 0) {
            const nearestEndangered = this.findNearestPlayer(endangeredPlayers);
            return this.createInterventionDecision(nearestEndangered, "safety_rescue", {
                type: "escort",
                authorityId: this.caregiver.id,
                targetId: nearestEndangered.id,
                destinationId: this.findSafeLocation(nearestEndangered.position),
                canResist: false,
                reason: "safety_concern"
            });
        }
        return null;
    }
    /**
   * Assess critical player needs
   */ assessCriticalNeeds() {
        const players = Array.from(this.lobby.players.values());
        // Check for diaper emergencies
        for (const player of players){
            if (this.isDiaperEmergency(player)) {
                return this.createDiaperChangeDecision(player, "emergency_diaper_change");
            }
        }
        // Check for bathroom emergencies
        for (const player of players){
            if (this.isBathroomEmergency(player)) {
                return this.createEscortDecision(player, "bathroom_emergency", "toilet_female");
            }
        }
        // Check for players showing distress signals
        const distressedPlayers = this.identifyDistressedPlayers();
        if (distressedPlayers.length > 0) {
            const nearestDistressed = this.findNearestPlayer(distressedPlayers);
            return this.createComfortDecision(nearestDistressed, "distress_comfort");
        }
        return null;
    }
    /**
   * Assess behavioral issues requiring intervention
   */ assessBehavioralIssues() {
        const players = Array.from(this.lobby.players.values());
        // Check for repeat offenders
        const repeatOffenders = players.filter((player)=>this.isRepeatOffender(player));
        if (repeatOffenders.length > 0) {
            const worstOffender = this.findWorstOffender(repeatOffenders);
            return this.createDisciplinaryDecision(worstOffender, "repeat_offender");
        }
        // Check for current rule violations
        const ruleViolators = players.filter((player)=>this.isCurrentlyViolatingRules(player));
        if (ruleViolators.length > 0) {
            const worstViolator = this.findWorstViolator(ruleViolators);
            return this.createDisciplinaryDecision(worstViolator, "active_rule_violation");
        }
        // Check for timeout completions
        const timeoutCompleters = players.filter((player)=>player.isInTimeout && player.timeoutEndTime && Date.now() > player.timeoutEndTime);
        if (timeoutCompleters.length > 0) {
            const completer = this.findNearestPlayer(timeoutCompleters);
            return this.createReleaseDecision(completer, "timeout_completed");
        }
        return null;
    }
    /**
   * Assess environment maintenance needs
   */ assessEnvironmentMaintenance() {
        // Clean up routine accidents
        const routineAccidents = Array.from(this.lobby.accidents.values()).filter((accident)=>!accident.cleanedUp && accident.size <= 70);
        if (routineAccidents.length > 0) {
            const oldestAccident = routineAccidents.reduce((oldest, current)=>current.timestamp < oldest.timestamp ? current : oldest);
            return this.createCleaningDecision(oldestAccident, "routine_cleanup");
        }
        // Check and restock supplies if needed
        const supplyCheck = this.checkSupplyLevels();
        if (supplyCheck.needsRestock) {
            return this.createSupplyRestockDecision(supplyCheck.location, "supply_maintenance");
        }
        return null;
    }
    /**
   * Assess opportunities for positive engagement
   */ assessPositiveEngagement() {
        const now = Date.now();
        // Avoid spamming positive interactions
        if (this.interactionCooldowns.has("positive_engagement")) {
            const lastEngagement = this.interactionCooldowns.get("positive_engagement");
            if (now - lastEngagement < 30000) {
                // 30 second cooldown
                return null;
            }
        }
        const wellBehavedPlayers = this.identifyWellBehavedPlayers();
        if (wellBehavedPlayers.length > 0) {
            const exemplaryPlayer = this.findExemplaryPlayer(wellBehavedPlayers);
            this.interactionCooldowns.set("positive_engagement", now);
            return this.createRewardDecision(exemplaryPlayer, "positive_recognition");
        }
        return null;
    }
    /**
   * Update caregiver perception based on current lobby state
   */ updatePerception() {
        const visibleEntities = [];
        const distances = new Map();
        const audioEvents = [];
        // Scan players
        this.lobby.players.forEach((player)=>{
            const dist = this.calculateDistance(this.caregiver.position, player.position);
            if (dist <= this.perceptionRadius) {
                visibleEntities.push({
                    id: player.id,
                    type: "player",
                    position: player.position
                });
                distances.set(player.id, dist);
                // Add audio events for players who are talking
                if (player.lastVoiceActivity && Date.now() - player.lastVoiceActivity < 5000) {
                    audioEvents.push({
                        id: `audio_${player.id}_${Date.now()}`,
                        type: "voice",
                        source: player.id,
                        position: player.position,
                        intensity: Math.max(0.1, 1 - dist / this.perceptionRadius),
                        timestamp: Date.now()
                    });
                }
            }
        });
        // Scan accidents
        this.lobby.accidents.forEach((accident)=>{
            const dist = this.calculateDistance(this.caregiver.position, accident.position);
            if (dist <= this.perceptionRadius) {
                visibleEntities.push({
                    id: accident.id,
                    type: "accident",
                    position: accident.position
                });
                distances.set(accident.id, dist);
            }
        });
        // Scan objects
        this.lobby.objects.forEach((obj)=>{
            const dist = this.calculateDistance(this.caregiver.position, obj.position);
            if (dist <= this.perceptionRadius) {
                visibleEntities.push({
                    id: obj.id,
                    type: "object",
                    position: obj.position
                });
                distances.set(obj.id, dist);
            }
        });
        // Update perception
        this.caregiver.perception = {
            visibleEntities,
            distances,
            occluded: false,
            audioEvents
        };
    }
    /**
   * Process chat messages and generate contextual responses
   */ async processChatMessage(message) {
        if (message.senderId === this.caregiver.id) {
            return null // Don't respond to self
            ;
        }
        const player = this.lobby.players.get(message.senderId);
        if (!player) {
            return null;
        }
        try {
            const responseText = this.generateContextualResponse(message, player);
            // Add to behavior memory for future decisions
            this.addToBehaviorMemory(player.id, {
                id: `chat_${Date.now()}`,
                actorId: player.id,
                category: "rule_violation",
                severity: 1,
                timestamp: Date.now(),
                description: `Said: "${message.content}"`
            });
            return {
                response: responseText,
                audio: new ArrayBuffer(0)
            };
        } catch (error) {
            console.error("Failed to process chat message:", error);
            return null;
        }
    }
    /**
   * Generate appropriate speech for decisions
   */ async generateSpeechForDecision(decision) {
        const speechText = this.generateDecisionSpeech(decision);
        return {
            text: speechText,
            audio: new ArrayBuffer(0)
        };
    }
    /**
   * Update caregiver intent based on current decision
   */ updateIntent(decision) {
        if (!decision) {
            return;
        }
        const goals = [];
        // Add goal based on decision type
        if (decision.reasoning.includes("diaper")) {
            goals.push({
                id: `goal_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])()}`,
                priority: 1,
                description: "Change player diaper",
                targetId: decision.targetId
            });
        } else if (decision.reasoning.includes("accident") || decision.reasoning.includes("cleanup")) {
            goals.push({
                id: `goal_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])()}`,
                priority: 1,
                description: "Clean up mess",
                targetId: decision.targetId
            });
        } else if (decision.reasoning.includes("safety")) {
            goals.push({
                id: `goal_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])()}`,
                priority: 1,
                description: "Ensure player safety",
                targetId: decision.targetId
            });
        }
        // Update caregiver intent
        this.caregiver.currentIntent = {
            goals,
            constraints: [],
            cooldowns: new Map()
        };
    }
    // ============ Helper Methods ============
    calculateDistance(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dz = p1.z - p2.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
    findNearestAccident(accidents) {
        return accidents.reduce((nearest, current)=>{
            const currentDist = this.calculateDistance(this.caregiver.position, current.position);
            const nearestDist = this.calculateDistance(this.caregiver.position, nearest.position);
            return currentDist < nearestDist ? current : nearest;
        });
    }
    findNearestPlayer(players) {
        return players.reduce((nearest, current)=>{
            const currentDist = this.calculateDistance(this.caregiver.position, current.position);
            const nearestDist = this.calculateDistance(this.caregiver.position, nearest.position);
            return currentDist < nearestDist ? current : nearest;
        });
    }
    isDiaperEmergency(player) {
        return player.clothing.underwearType === "diaper" && (player.clothing.diaperFillLevel >= 3 || player.clothing.underwearState === "both");
    }
    isBathroomEmergency(player) {
        return player.needs.bladder > 90 || player.needs.bowel > 90;
    }
    identifyDistressedPlayers() {
        return Array.from(this.lobby.players.values()).filter((player)=>{
            // Check for distress signals
            const recentMessages = Array.from(this.lobby.players.values()).flatMap((p)=>[]) // Simplified for now
            ;
            return player.disciplineStatus === "red" || player.alignment === "little_shit" || player.needs.bladder > 80;
        });
    }
    isRepeatOffender(player) {
        const memory = this.behaviorMemory.get(player.id) || [];
        const recentBehaviors = memory.filter((behavior)=>Date.now() - behavior.timestamp < 300000);
        return recentBehaviors.length > 2;
    }
    findWorstOffender(players) {
        return players.reduce((worst, current)=>{
            const worstMemory = this.behaviorMemory.get(worst.id) || [];
            const currentMemory = this.behaviorMemory.get(current.id) || [];
            const worstScore = worstMemory.length;
            const currentScore = currentMemory.length;
            return currentScore > worstScore ? current : worst;
        });
    }
    identifyWellBehavedPlayers() {
        return Array.from(this.lobby.players.values()).filter((player)=>player.alignment === "little_angel" || player.alignment === "good_boy_girl" || player.disciplineStatus === "green" && player.punishments.length === 0);
    }
    findExemplaryPlayer(players) {
        return players.reduce((exemplary, current)=>{
            const exemplaryRewards = exemplary.rewards.length;
            const currentRewards = current.rewards.length;
            return currentRewards > exemplaryRewards ? current : exemplary;
        });
    }
    generateContextualResponse(message, player) {
        const content = message.content.toLowerCase();
        // Emergency responses
        if (content.includes("help") || content.includes("emergency")) {
            return `${player.name}, I'm coming to help you right away!`;
        }
        // Bathroom requests
        if (content.includes("bathroom") || content.includes("toilet") || content.includes("potty")) {
            if (player.character.ageGroup === "1-4" || player.character.ageGroup === "4-7") {
                return `Come with me, ${player.name}. I'll help you use the potty.`;
            } else {
                return `You know where the bathroom is, ${player.name}. You may go now.`;
            }
        }
        // Diaper requests
        if (content.includes("diaper") || content.includes("change")) {
            if (this.isDiaperEmergency(player)) {
                return `Yes, ${player.name}, your diaper definitely needs changing. Let's go to the changing station.`;
            } else {
                return `Let me check your diaper, ${player.name}. We'll see if you need a change.`;
            }
        }
        // General inquiries
        if (content.includes("what") || content.includes("how") || content.includes("why")) {
            return `That's a good question, ${player.name}. Let me think about that.`;
        }
        // Positive interactions
        if (content.includes("thank") || content.includes("good job") || content.includes("love you")) {
            return `Aww, thank you ${player.name}! You're such a sweet little.`;
        }
        // Default responses
        const responses = [
            `I hear you, ${player.name}.`,
            `That's interesting, ${player.name}.`,
            `Tell me more about that, ${player.name}.`,
            `I understand, ${player.name}.`
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    generateDecisionSpeech(decision) {
        const targetPlayer = this.lobby.players.get(decision.targetId);
        if (!targetPlayer) {
            return "I need to attend to something.";
        }
        const playerName = targetPlayer.name;
        const reasoning = decision.reasoning.toLowerCase();
        if (reasoning.includes("diaper") || reasoning.includes("change")) {
            return `${playerName}, it's time for a diaper change. Let's go to the changing station.`;
        }
        if (reasoning.includes("accident") || reasoning.includes("cleanup")) {
            return `I need to clean up a mess. Please stay where you are, ${playerName}.`;
        }
        if (reasoning.includes("safety")) {
            return `${playerName}, I need to make sure you're safe. Come with me.`;
        }
        if (reasoning.includes("bathroom")) {
            return `${playerName}, let's go to the bathroom.`;
        }
        if (reasoning.includes("discipline") || reasoning.includes("timeout")) {
            return `${playerName}, you need some time to think about your behavior.`;
        }
        if (reasoning.includes("reward") || reasoning.includes("good")) {
            return `${playerName}, you're being such a good little!`;
        }
        return `${playerName}, I need to talk to you.`;
    }
    // ============ Decision Creation Helpers ============
    createCleaningDecision(accident, reason) {
        return {
            authorityId: this.caregiver.id,
            targetId: accident.id,
            triggeringEventId: `accident_${accident.id}`,
            confidence: 1.0,
            interventions: [
                {
                    type: "disciplinary_action",
                    targetId: accident.id,
                    effect: "reputation_change",
                    magnitude: 0,
                    reason: reason
                }
            ],
            reasoning: `Cleaning up ${accident.type} accident`
        };
    }
    createDiaperChangeDecision(player, reason) {
        return {
            authorityId: this.caregiver.id,
            targetId: player.id,
            triggeringEventId: `diaper_${player.id}`,
            confidence: 0.95,
            interventions: [
                {
                    type: "escort",
                    authorityId: this.caregiver.id,
                    targetId: player.id,
                    destinationId: this.findNearestChangingStation(player.position),
                    canResist: false,
                    reason: reason
                }
            ],
            reasoning: `${player.name} needs an immediate diaper change`
        };
    }
    createEscortDecision(player, reason, destinationType) {
        return {
            authorityId: this.caregiver.id,
            targetId: player.id,
            triggeringEventId: `escort_${player.id}`,
            confidence: 0.9,
            interventions: [
                {
                    type: "escort",
                    authorityId: this.caregiver.id,
                    targetId: player.id,
                    destinationId: this.findDestinationByType(destinationType),
                    canResist: false,
                    reason: reason
                }
            ],
            reasoning: `Escorting ${player.name} to ${destinationType}`
        };
    }
    createComfortDecision(player, reason) {
        return {
            authorityId: this.caregiver.id,
            targetId: player.id,
            triggeringEventId: `comfort_${player.id}`,
            confidence: 0.8,
            interventions: [
                {
                    type: "disciplinary_action",
                    targetId: player.id,
                    effect: "morale_penalty",
                    magnitude: -2,
                    reason: reason
                }
            ],
            reasoning: `Comforting ${player.name} who seems distressed`
        };
    }
    createDisciplinaryDecision(player, reason) {
        const severity = this.calculateDisciplineSeverity(player);
        let intervention;
        if (severity > 3) {
            intervention = {
                type: "cooldown",
                targetId: player.id,
                durationMs: Math.min(severity * 60000, 300000),
                restrictedCapabilities: severity > 4 ? [
                    "movement",
                    "interaction"
                ] : [
                    "interaction"
                ],
                reason: reason
            };
        } else {
            intervention = {
                type: "disciplinary_action",
                targetId: player.id,
                effect: "reputation_change",
                magnitude: severity,
                reason: reason
            };
        }
        return {
            authorityId: this.caregiver.id,
            targetId: player.id,
            triggeringEventId: `discipline_${player.id}`,
            confidence: 0.85,
            interventions: [
                intervention
            ],
            reasoning: `${player.name} requires disciplinary action for ${reason}`
        };
    }
    createRewardDecision(player, reason) {
        return {
            authorityId: this.caregiver.id,
            targetId: player.id,
            triggeringEventId: `reward_${player.id}`,
            confidence: 0.7,
            interventions: [
                {
                    type: "disciplinary_action",
                    targetId: player.id,
                    effect: "morale_penalty",
                    magnitude: -1,
                    reason: reason
                }
            ],
            reasoning: `Rewarding ${player.name} for good behavior`
        };
    }
    createReleaseDecision(player, reason) {
        return {
            authorityId: this.caregiver.id,
            targetId: player.id,
            triggeringEventId: `release_${player.id}`,
            confidence: 1.0,
            interventions: [
                {
                    type: "disciplinary_action",
                    targetId: player.id,
                    effect: "morale_penalty",
                    magnitude: -1,
                    reason: reason
                }
            ],
            reasoning: `${player.name} timeout has ended`
        };
    }
    createInterventionDecision(player, reason, intervention) {
        return {
            authorityId: this.caregiver.id,
            targetId: player.id,
            triggeringEventId: `intervention_${player.id}`,
            confidence: 0.9,
            interventions: [
                intervention
            ],
            reasoning: `${player.name} requires intervention for ${reason}`
        };
    }
    createSupplyRestockDecision(location, reason) {
        return {
            authorityId: this.caregiver.id,
            targetId: "supply_closet",
            triggeringEventId: `supply_${Date.now()}`,
            confidence: 0.6,
            interventions: [
                {
                    type: "disciplinary_action",
                    targetId: "supply_closet",
                    effect: "reputation_change",
                    magnitude: 0,
                    reason: reason
                }
            ],
            reasoning: "Restocking supplies for daycare maintenance"
        };
    }
    calculateDisciplineSeverity(player) {
        let severity = 1;
        // Base severity on discipline status
        switch(player.disciplineStatus){
            case "red":
                severity += 3;
                break;
            case "yellow":
                severity += 1;
                break;
        }
        // Increase severity based on alignment
        switch(player.alignment){
            case "little_shit":
                severity += 2;
                break;
            case "bad_boy_girl":
                severity += 1;
                break;
        }
        // Increase severity based on recent punishment history
        const recentPunishments = player.punishments.filter((p)=>Date.now() - p.timestamp < 300000);
        severity += recentPunishments.length;
        return Math.min(severity, 5);
    }
    findNearestChangingStation(position) {
        const changingStations = Array.from(this.lobby.objects.values()).filter((obj)=>obj.type === "changing_station");
        if (changingStations.length === 0) return "changing_station_1";
        const nearest = changingStations.reduce((closest, current)=>{
            const currentDist = this.calculateDistance(position, current.position);
            const closestDist = this.calculateDistance(position, closest.position);
            return currentDist < closestDist ? current : closest;
        });
        return nearest.id;
    }
    findDestinationByType(type) {
        const destinations = Array.from(this.lobby.objects.values()).filter((obj)=>obj.type === type);
        if (destinations.length === 0) return "default_destination";
        return destinations[0].id;
    }
    findSafeLocation(position) {
        // Find nearest safe area (play area, timeout area, etc.)
        const safeAreas = Array.from(this.lobby.objects.values()).filter((obj)=>[
                "play_area",
                "timeout_chair",
                "timeout_stool"
            ].includes(obj.type));
        if (safeAreas.length === 0) return "safe_zone";
        const nearest = safeAreas.reduce((closest, current)=>{
            const currentDist = this.calculateDistance(position, current.position);
            const closestDist = this.calculateDistance(position, closest.position);
            return currentDist < closestDist ? current : closest;
        });
        return nearest.id;
    }
    identifyEndangeredPlayers() {
        // This would be more sophisticated in a real implementation
        // For now, return players with critical needs
        return Array.from(this.lobby.players.values()).filter((player)=>player.needs.bladder > 95 || player.needs.bowel > 95);
    }
    isCurrentlyViolatingRules(player) {
        // Check for active rule violations
        // This would be more sophisticated with actual rule checking
        return player.disciplineStatus === "red";
    }
    findWorstViolator(players) {
        return players.reduce((worst, current)=>{
            const worstSeverity = this.calculateDisciplineSeverity(worst);
            const currentSeverity = this.calculateDisciplineSeverity(current);
            return currentSeverity > worstSeverity ? current : worst;
        });
    }
    checkSupplyLevels() {
        // Simplified supply checking
        return {
            needsRestock: false,
            location: "supply_closet"
        };
    }
    addToBehaviorMemory(playerId, behavior) {
        if (!this.behaviorMemory.has(playerId)) {
            this.behaviorMemory.set(playerId, []);
        }
        const playerMemory = this.behaviorMemory.get(playerId);
        playerMemory.push(behavior);
        // Keep only recent behaviors (last 10 minutes)
        const cutoffTime = Date.now() - 600000;
        this.behaviorMemory.set(playerId, playerMemory.filter((b)=>b.timestamp > cutoffTime));
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/three/CaregiverCharacters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaregiverCharacters",
    ()=>CaregiverCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Gltf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$PathfindingService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/PathfindingService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$BrainService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/BrainService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function CaregiverCharacters() {
    _s();
    const caregiversMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CaregiverCharacters.useGameStore[caregiversMap]": (state)=>state.caregivers
    }["CaregiverCharacters.useGameStore[caregiversMap]"]);
    const caregiverIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CaregiverCharacters.useMemo[caregiverIds]": ()=>Array.from(caregiversMap.keys())
    }["CaregiverCharacters.useMemo[caregiverIds]"], [
        caregiversMap.size
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: caregiverIds.map((id)=>{
            const caregiver = caregiversMap.get(id);
            return caregiver ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CaregiverCharacter, {
                caregiverId: id
            }, id, false, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 21,
                columnNumber: 28
            }, this) : null;
        })
    }, void 0, false);
}
_s(CaregiverCharacters, "kqhzLAy6duFA1TislrQlg53vOpk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = CaregiverCharacters;
function CaregiverCharacter({ caregiverId }) {
    _s1();
    const rigidBodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const caregiver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CaregiverCharacter.useGameStore[caregiver]": (state)=>state.caregivers.get(caregiverId)
    }["CaregiverCharacter.useGameStore[caregiver]"]);
    const currentLobby = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CaregiverCharacter.useGameStore[currentLobby]": (state)=>state.currentLobby
    }["CaregiverCharacter.useGameStore[currentLobby]"]);
    const playersMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CaregiverCharacter.useGameStore[playersMap]": (state)=>state.players
    }["CaregiverCharacter.useGameStore[playersMap]"]);
    const objectsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CaregiverCharacter.useGameStore[objectsMap]": (state)=>state.objects
    }["CaregiverCharacter.useGameStore[objectsMap]"]);
    const accidentsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CaregiverCharacter.useGameStore[accidentsMap]": (state)=>state.accidents
    }["CaregiverCharacter.useGameStore[accidentsMap]"]);
    const addMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CaregiverCharacter.useGameStore[addMessage]": (state)=>state.addMessage
    }["CaregiverCharacter.useGameStore[addMessage]"]);
    const updateCaregiver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "CaregiverCharacter.useGameStore[updateCaregiver]": (state)=>state.updateCaregiver
    }["CaregiverCharacter.useGameStore[updateCaregiver]"]);
    const pathfinding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CaregiverCharacter.useMemo[pathfinding]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$PathfindingService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathfindingService"](40, 40, 2)
    }["CaregiverCharacter.useMemo[pathfinding]"], []);
    const brain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CaregiverCharacter.useMemo[brain]": ()=>{
            if (!currentLobby || !caregiver) return null;
            const lobby = {
                ...currentLobby,
                players: playersMap,
                caregivers: new Map([
                    [
                        caregiverId,
                        caregiver
                    ]
                ]),
                objects: objectsMap,
                accidents: accidentsMap
            };
            return new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$BrainService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrainService"](caregiver, lobby, {
                decisionInterval: 2000,
                perceptionRadius: 15
            });
        }
    }["CaregiverCharacter.useMemo[brain]"], [
        caregiverId
    ]);
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pathIndex, setPathIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const lastDecisionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CaregiverCharacter.useEffect": ()=>{
            if (!brain || !currentLobby || !caregiver) return;
            const lobby = {
                ...currentLobby,
                players: playersMap,
                caregivers: new Map([
                    [
                        caregiverId,
                        caregiver
                    ]
                ]),
                objects: objectsMap,
                accidents: accidentsMap
            };
            brain.updateLobby(lobby);
            brain.updateCaregiver(caregiver);
        }
    }["CaregiverCharacter.useEffect"], [
        playersMap,
        objectsMap,
        accidentsMap,
        caregiver
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CaregiverCharacter.useEffect": ()=>{
            const objectsArray = Array.from(objectsMap.values());
            pathfinding.updateWithObjects(objectsArray);
        }
    }["CaregiverCharacter.useEffect"], [
        objectsMap,
        pathfinding
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "CaregiverCharacter.useFrame": (state, delta)=>{
            if (!caregiver?.isAI || !brain || !rigidBodyRef.current) return;
            const now = Date.now();
            if (now - lastDecisionRef.current > 2000) {
                lastDecisionRef.current = now;
                brain.makeDecision().then({
                    "CaregiverCharacter.useFrame": (decision)=>{
                        if (decision) {
                            console.log("[v0] AI Caregiver decision:", decision);
                            handleCaregiverDecision(decision);
                            brain.generateSpeechForDecision(decision).then({
                                "CaregiverCharacter.useFrame": (speech)=>{
                                    addMessage({
                                        id: `msg_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])()}`,
                                        senderId: caregiverId,
                                        senderName: caregiver.name,
                                        content: speech.text,
                                        timestamp: Date.now(),
                                        isSystem: false,
                                        messageType: "chat"
                                    });
                                    updateCaregiver(caregiverId, {
                                        lastVoiceActivity: Date.now()
                                    });
                                }
                            }["CaregiverCharacter.useFrame"]);
                            brain.updateIntent(decision);
                            if (decision.interventions.length > 0) {
                                const intervention = decision.interventions[0];
                                if (intervention.type === "escort") {
                                    const targetPlayer = playersMap.get(decision.targetId);
                                    if (targetPlayer) {
                                        const path = pathfinding.findPath(caregiver.position, targetPlayer.position);
                                        if (path.length > 0) {
                                            const smoothPath = pathfinding.smoothPath(path);
                                            setCurrentPath(smoothPath);
                                            setPathIndex(0);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }["CaregiverCharacter.useFrame"]);
            }
            if (currentPath.length > 0 && pathIndex < currentPath.length) {
                const targetPos = currentPath[pathIndex];
                const currentPos = rigidBodyRef.current.translation();
                const distance = Math.sqrt(Math.pow(targetPos.x - currentPos.x, 2) + Math.pow(targetPos.z - currentPos.z, 2));
                if (distance < 0.5) {
                    setPathIndex(pathIndex + 1);
                    if (pathIndex + 1 >= currentPath.length) {
                        setCurrentPath([]);
                        setPathIndex(0);
                    }
                } else {
                    const direction = {
                        x: targetPos.x - currentPos.x,
                        z: targetPos.z - currentPos.z
                    };
                    const magnitude = Math.sqrt(direction.x * direction.x + direction.z * direction.z);
                    const normalized = {
                        x: direction.x / magnitude,
                        z: direction.z / magnitude
                    };
                    const speed = 2.5;
                    const newPos = {
                        x: currentPos.x + normalized.x * speed * delta,
                        y: currentPos.y,
                        z: currentPos.z + normalized.z * speed * delta
                    };
                    rigidBodyRef.current.setNextKinematicTranslation(newPos);
                    const angle = Math.atan2(direction.x, direction.z);
                    rigidBodyRef.current.setNextKinematicRotation({
                        x: 0,
                        y: Math.sin(angle / 2),
                        z: 0,
                        w: Math.cos(angle / 2)
                    });
                    updateCaregiver(caregiverId, {
                        position: newPos,
                        rotation: angle
                    });
                }
            } else {
                if (Math.random() < 0.001) {
                    const randomTarget = {
                        x: (Math.random() - 0.5) * 30,
                        y: 0,
                        z: (Math.random() - 0.5) * 30
                    };
                    const path = pathfinding.findPath(caregiver.position, randomTarget);
                    if (path.length > 0) {
                        const smoothPath = pathfinding.smoothPath(path);
                        setCurrentPath(smoothPath);
                        setPathIndex(0);
                    }
                }
            }
        }
    }["CaregiverCharacter.useFrame"]);
    const handleCaregiverDecision = (decision)=>{
        const intervention = decision.interventions[0];
        switch(intervention?.type){
            case "escort":
                console.log("[v0] Escorting player:", decision.targetId);
                break;
            case "cooldown":
                console.log("[v0] Putting player in timeout:", decision.targetId);
                break;
            case "disciplinary_action":
                console.log("[v0] Disciplinary action:", decision.reasoning);
                break;
            case "physical_control":
                console.log("[v0] Physical control:", decision.targetId);
                break;
            default:
                console.log("[v0] Unknown intervention type");
        }
    };
    if (!caregiver) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RigidBody"], {
        ref: rigidBodyRef,
        colliders: "ball",
        type: "kinematicPosition",
        position: [
            caregiver.position.x,
            caregiver.position.y + 1,
            caregiver.position.z
        ],
        enabledRotations: [
            false,
            true,
            false
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EnhancedCaregiverModel, {
            caregiver: caregiver
        }, void 0, false, {
            fileName: "[project]/components/three/CaregiverCharacters.tsx",
            lineNumber: 228,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/three/CaregiverCharacters.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_s1(CaregiverCharacter, "QHh56uJEizPTodd6sJl0Xmf3QUQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = CaregiverCharacter;
function CaregiverModel({ caregiver }) {
    const bodyColor = caregiver.character.skinColor;
    const hairColor = caregiver.character.hairColor || "#8B4513";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    2,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.35,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: bodyColor,
                        roughness: 0.7
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    2.3,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.37,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: hairColor,
                        roughness: 0.9
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.12,
                    2.05,
                    0.32
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.05
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#4A90E2"
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.12,
                    2.05,
                    0.32
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.05
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#4A90E2"
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.4,
                    1.3,
                    0
                ],
                rotation: [
                    0,
                    0,
                    Math.PI / 8
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.09,
                            0.09,
                            0.6,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: bodyColor,
                        roughness: 0.7
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.4,
                    1.3,
                    0
                ],
                rotation: [
                    0,
                    0,
                    -Math.PI / 8
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.09,
                            0.09,
                            0.6,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: bodyColor,
                        roughness: 0.7
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.15,
                    0.5,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.12,
                            0.1,
                            1,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#C7CEEA",
                        roughness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.15,
                    0.5,
                    0
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                        args: [
                            0.12,
                            0.1,
                            1,
                            8
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#C7CEEA",
                        roughness: 0.6
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    -0.15,
                    0.08,
                    0.05
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.14,
                            0.1,
                            0.18
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#8B4513"
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0.15,
                    0.08,
                    0.05
                ],
                castShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("boxGeometry", {
                        args: [
                            0.14,
                            0.1,
                            0.18
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        color: "#8B4513"
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    1.5,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.6,
                            16,
                            16
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: caregiver.personality.strictness > 70 ? "#FF6347" : "#90EE90",
                        transparent: true,
                        opacity: 0.1
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/CaregiverCharacters.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
_c2 = CaregiverModel;
// Enhanced Caregiver Model using GLB
function EnhancedCaregiverModel({ caregiver }) {
    _s2();
    const modelPath = `/models/${caregiver.gender === "female" ? "female_caregiver" : "male_caregiver"}.glb`;
    const { scene } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"])(modelPath);
    // Debug logging
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnhancedCaregiverModel.useEffect": ()=>{
            console.log(`[EnhancedCaregiverModel] Loaded caregiver model: ${modelPath}`);
            console.log(`[EnhancedCaregiverModel] Scene has ${scene.children.length} children`);
        }
    }["EnhancedCaregiverModel.useEffect"], [
        scene,
        modelPath
    ]);
    const clonedScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EnhancedCaregiverModel.useMemo[clonedScene]": ()=>{
            const cloned = scene.clone();
            // Ensure all materials are properly configured for rendering (fully opaque)
            cloned.traverse({
                "EnhancedCaregiverModel.useMemo[clonedScene]": (child)=>{
                    const mesh = child;
                    if (mesh.isMesh && mesh.material) {
                        // Ensure materials are set up for proper rendering - completely opaque
                        if (Array.isArray(mesh.material)) {
                            mesh.material.forEach({
                                "EnhancedCaregiverModel.useMemo[clonedScene]": (mat)=>{
                                    mat.transparent = false;
                                    mat.opacity = 1.0;
                                    mat.alphaTest = 0;
                                    mat.alphaToCoverage = false;
                                    mat.depthWrite = true;
                                    mat.depthTest = true;
                                    mat.blending = 0; // NoBlending
                                    mat.side = 1; // FrontSide
                                    mat.needsUpdate = true;
                                }
                            }["EnhancedCaregiverModel.useMemo[clonedScene]"]);
                        } else {
                            mesh.material.transparent = false;
                            mesh.material.opacity = 1.0;
                            mesh.material.alphaTest = 0;
                            mesh.material.alphaToCoverage = false;
                            mesh.material.depthWrite = true;
                            mesh.material.depthTest = true;
                            mesh.material.blending = 0; // NoBlending
                            mesh.material.side = 1; // FrontSide
                            mesh.material.needsUpdate = true;
                        }
                    }
                }
            }["EnhancedCaregiverModel.useMemo[clonedScene]"]);
            return cloned;
        }
    }["EnhancedCaregiverModel.useMemo[clonedScene]"], [
        scene
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        scale: 1.1,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("primitive", {
                object: clonedScene
            }, void 0, false, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    2.5,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            1.2,
                            0.3
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#FFB7B2",
                        transparent: true,
                        opacity: 0.9
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            caregiver.lastVoiceActivity && Date.now() - caregiver.lastVoiceActivity < 2000 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    2.8,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.1
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#87CEEB"
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 357,
                columnNumber: 9
            }, this),
            caregiver.currentIntent.goals.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                position: [
                    0,
                    3,
                    0
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sphereGeometry", {
                        args: [
                            0.08
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                        color: "#FFD700"
                    }, void 0, false, {
                        fileName: "[project]/components/three/CaregiverCharacters.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/CaregiverCharacters.tsx",
                lineNumber: 365,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/CaregiverCharacters.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, this);
}
_s2(EnhancedCaregiverModel, "nnpEZcJ/z6KMioaBFUHKtgGRHDk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"]
    ];
});
_c3 = EnhancedCaregiverModel;
// Preload caregiver models
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/male_caregiver.glb");
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Gltf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGLTF"].preload("/models/female_caregiver.glb");
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CaregiverCharacters");
__turbopack_context__.k.register(_c1, "CaregiverCharacter");
__turbopack_context__.k.register(_c2, "CaregiverModel");
__turbopack_context__.k.register(_c3, "EnhancedCaregiverModel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/three/AccidentMarkers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccidentMarkers",
    ()=>AccidentMarkers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AccidentMarkers() {
    _s();
    const accidentsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "AccidentMarkers.useGameStore[accidentsMap]": (state)=>state.accidents
    }["AccidentMarkers.useGameStore[accidentsMap]"]);
    const accidents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AccidentMarkers.useMemo[accidents]": ()=>Array.from(accidentsMap.values())
    }["AccidentMarkers.useMemo[accidents]"], [
        accidentsMap
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: accidents.map((accident)=>!accident.cleanedUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccidentMarker, {
                accident: accident
            }, accident.id, false, {
                fileName: "[project]/components/three/AccidentMarkers.tsx",
                lineNumber: 11,
                columnNumber: 59
            }, this))
    }, void 0, false);
}
_s(AccidentMarkers, "xYGZPwjKnFNmGPm7qbzggOoRrg0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = AccidentMarkers;
function AccidentMarker({ accident }) {
    const color = accident.type === "pee" ? "#FFD700" : "#8B4513";
    const size = 0.3 + accident.size / 100 * 0.5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
        position: [
            accident.position.x,
            0.02,
            accident.position.z
        ],
        rotation: [
            -Math.PI / 2,
            0,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circleGeometry", {
                args: [
                    size,
                    16
                ]
            }, void 0, false, {
                fileName: "[project]/components/three/AccidentMarkers.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshBasicMaterial", {
                color: color,
                transparent: true,
                opacity: 0.7
            }, void 0, false, {
                fileName: "[project]/components/three/AccidentMarkers.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/three/AccidentMarkers.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = AccidentMarker;
var _c, _c1;
__turbopack_context__.k.register(_c, "AccidentMarkers");
__turbopack_context__.k.register(_c1, "AccidentMarker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/three/LoadingFallback.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingFallback",
    ()=>LoadingFallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
"use client";
;
;
function LoadingFallback() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
        center: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-4 p-8 bg-primary/10 rounded-xl backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/components/three/LoadingFallback.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-medium text-foreground",
                    children: "Loading Daycare..."
                }, void 0, false, {
                    fileName: "[project]/components/three/LoadingFallback.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/three/LoadingFallback.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/three/LoadingFallback.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = LoadingFallback;
var _c;
__turbopack_context__.k.register(_c, "LoadingFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/rules/gameRules.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AGE_RULES",
    ()=>AGE_RULES,
    "AI_CAREGIVER_RULES",
    ()=>AI_CAREGIVER_RULES,
    "calculateInterventionConfidence",
    ()=>calculateInterventionConfidence,
    "calculatePersonalityModifiers",
    ()=>calculatePersonalityModifiers,
    "canChangeUnderwear",
    ()=>canChangeUnderwear,
    "canUseToiletWithCurrentUnderwear",
    ()=>canUseToiletWithCurrentUnderwear,
    "getAICaregiverRules",
    ()=>getAICaregiverRules,
    "getAICaregiverVoiceEmotion",
    ()=>getAICaregiverVoiceEmotion,
    "getAgeRules",
    ()=>getAgeRules,
    "getAnimationForAge",
    ()=>getAnimationForAge,
    "getCaregiverPermissions",
    ()=>getCaregiverPermissions,
    "getDefaultClothingForAge",
    ()=>getDefaultClothingForAge,
    "shouldAICaregiverIntervene",
    ()=>shouldAICaregiverIntervene,
    "shouldShowPacifier",
    ()=>shouldShowPacifier
]);
const AGE_RULES = {
    "1-4": {
        canChooseClothes: false,
        canTogglePacifier: false,
        alwaysHasPacifier: true,
        allowedUnderwear: [
            "diaper"
        ],
        canUsePotty: false,
        canUseToilet: ()=>false,
        defaultAnimation: "crawl",
        defaultClothing: {
            shirt: false,
            pants: false,
            socks: false,
            shoes: false,
            underwearType: "diaper",
            pacifierIn: true
        }
    },
    "4-7": {
        canChooseClothes: false,
        canTogglePacifier: true,
        alwaysHasPacifier: false,
        allowedUnderwear: [
            "diaper",
            "training_pants",
            "underwear"
        ],
        canUsePotty: true,
        canUseToilet: (underwear)=>underwear === "training_pants" || underwear === "underwear",
        defaultAnimation: "walk",
        defaultClothing: {
            shirt: true,
            pants: true,
            socks: true,
            shoes: true,
            underwearType: "training_pants",
            pacifierIn: false
        }
    },
    "7-9": {
        canChooseClothes: true,
        canTogglePacifier: false,
        alwaysHasPacifier: false,
        allowedUnderwear: [
            "diaper",
            "training_pants",
            "underwear"
        ],
        canUsePotty: true,
        canUseToilet: (underwear)=>underwear === "training_pants" || underwear === "underwear",
        defaultAnimation: "walk",
        defaultClothing: {
            shirt: true,
            pants: true,
            socks: true,
            shoes: true,
            underwearType: "underwear",
            pacifierIn: false
        }
    },
    "12+": {
        canChooseClothes: true,
        canTogglePacifier: false,
        alwaysHasPacifier: false,
        allowedUnderwear: [
            "diaper",
            "training_pants",
            "underwear"
        ],
        canUsePotty: true,
        canUseToilet: (underwear)=>underwear === "training_pants" || underwear === "underwear",
        defaultAnimation: "walk",
        defaultClothing: {
            shirt: true,
            pants: true,
            socks: true,
            shoes: true,
            underwearType: "underwear",
            pacifierIn: false
        }
    }
};
const AI_CAREGIVER_RULES = {
    maxPatrolDistance: 10.0,
    reactionTime: 500,
    interventionThresholds: {
        safety: 2,
        ruleViolation: 3,
        disruption: 4
    },
    voiceSettings: {
        defaultEmotion: "caring",
        firmnessThreshold: 70,
        nurturingThreshold: 30
    },
    personalityModifiers: {
        strictness: 0.5,
        nurturing: 0.5,
        patience: 0.5,
        fairness: 0.5,
        responsiveness: 0.5
    }
};
function getCaregiverPermissions(targetAgeGroup) {
    return {
        canForceUnderwear: targetAgeGroup === "1-4" || targetAgeGroup === "4-7",
        canForceTimeout: true,
        canChangeClothes: true,
        canUsePhysicalControl: targetAgeGroup === "1-4" || targetAgeGroup === "4-7",
        canEscort: true,
        canSpeak: true
    };
}
function getAICaregiverRules() {
    return AI_CAREGIVER_RULES;
}
function calculatePersonalityModifiers(personality) {
    return {
        strictness: personality.strictness / 100,
        nurturing: personality.nurturing / 100,
        patience: personality.patience / 100,
        fairness: personality.fairness / 100,
        responsiveness: personality.responsiveness / 100
    };
}
function shouldAICaregiverIntervene(event, personality) {
    const rules = getAICaregiverRules();
    // Map the category string to the correct property name
    const categoryKey = event.category === "rule_violation" ? "ruleViolation" : event.category;
    const threshold = rules.interventionThresholds[categoryKey];
    // Adjust threshold based on personality
    let adjustedThreshold = threshold;
    // Strict caregivers intervene more frequently
    if (personality.strictness > 70) {
        adjustedThreshold = Math.max(1, threshold - 1);
    } else if (personality.nurturing > 70) {
        adjustedThreshold = Math.min(5, threshold + 1);
    }
    return event.severity >= adjustedThreshold;
}
function getAICaregiverVoiceEmotion(personality, context) {
    const rules = getAICaregiverRules();
    switch(context){
        case "normal":
            return rules.voiceSettings.defaultEmotion;
        case "warning":
            return personality.strictness > rules.voiceSettings.firmnessThreshold ? "firm" : "caring";
        case "discipline":
            return "stern";
        case "comfort":
            return "caring" // Use 'caring' instead of 'nurturing'
            ;
        default:
            return rules.voiceSettings.defaultEmotion;
    }
}
function calculateInterventionConfidence(event, personality) {
    let baseConfidence = 0.5;
    // Higher strictness increases confidence in interventions
    baseConfidence += (personality.strictness - 50) / 100;
    // Higher severity increases confidence
    baseConfidence += (event.severity - 1) * 0.1;
    // Higher responsiveness increases confidence
    baseConfidence += (personality.responsiveness - 50) / 200;
    return Math.max(0.1, Math.min(1.0, baseConfidence));
}
function getAgeRules(ageGroup) {
    return AGE_RULES[ageGroup];
}
function canChangeUnderwear(ageGroup, newType) {
    const rules = AGE_RULES[ageGroup];
    return rules.allowedUnderwear.includes(newType);
}
function canUseToiletWithCurrentUnderwear(ageGroup, underwearType) {
    const rules = AGE_RULES[ageGroup];
    return rules.canUseToilet(underwearType);
}
function shouldShowPacifier(ageGroup, pacifierIn) {
    const rules = AGE_RULES[ageGroup];
    if (rules.alwaysHasPacifier) return true;
    if (ageGroup === "7-9" || ageGroup === "12+") return false;
    return pacifierIn;
}
function getDefaultClothingForAge(ageGroup) {
    return AGE_RULES[ageGroup].defaultClothing;
}
function getAnimationForAge(ageGroup) {
    return AGE_RULES[ageGroup].defaultAnimation;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/three/NeedsSystem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNeedsSystem",
    ()=>useNeedsSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rules$2f$gameRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rules/gameRules.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useNeedsSystem() {
    _s();
    const playersMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "useNeedsSystem.useGameStore[playersMap]": (state)=>state.players
    }["useNeedsSystem.useGameStore[playersMap]"]);
    const updatePlayerNeeds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "useNeedsSystem.useGameStore[updatePlayerNeeds]": (state)=>state.updatePlayerNeeds
    }["useNeedsSystem.useGameStore[updatePlayerNeeds]"]);
    const updatePlayerClothing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "useNeedsSystem.useGameStore[updatePlayerClothing]": (state)=>state.updatePlayerClothing
    }["useNeedsSystem.useGameStore[updatePlayerClothing]"]);
    const addAccident = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "useNeedsSystem.useGameStore[addAccident]": (state)=>state.addAccident
    }["useNeedsSystem.useGameStore[addAccident]"]);
    const playerIdsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNeedsSystem.useEffect": ()=>{
            const players = Array.from(playersMap.values());
            const interval = setInterval({
                "useNeedsSystem.useEffect.interval": ()=>{
                    players.forEach({
                        "useNeedsSystem.useEffect.interval": (player)=>{
                            // Skip caregivers
                            if (player.role === "caregiver") return;
                            const ageRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rules$2f$gameRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeRules"])(player.character.ageGroup);
                            const newNeeds = {
                                ...player.needs
                            };
                            // Increase needs over time
                            newNeeds.bladder = Math.min(100, player.needs.bladder + Math.random() * 2);
                            newNeeds.bowel = Math.min(100, player.needs.bowel + Math.random() * 1);
                            newNeeds.hunger = Math.min(100, player.needs.hunger + Math.random() * 0.5);
                            updatePlayerNeeds(player.id, newNeeds);
                            // Check for accidents
                            if (newNeeds.bladder >= 100 && player.clothing.underwearType === "diaper") {
                                // Automatic wetting in diaper
                                const newFillLevel = Math.min(5, player.clothing.diaperFillLevel + 1);
                                const newState = player.clothing.underwearState === "messy" ? "both" : "wet";
                                updatePlayerClothing(player.id, {
                                    diaperFillLevel: newFillLevel,
                                    underwearState: newState
                                });
                                // Reset bladder
                                updatePlayerNeeds(player.id, {
                                    bladder: 0
                                });
                            } else if (newNeeds.bladder >= 100 && player.clothing.underwearType !== "diaper") {
                                // Accident on floor
                                addAccident({
                                    id: `accident_${Date.now()}_${player.id}`,
                                    type: "pee",
                                    position: player.position,
                                    playerId: player.id,
                                    timestamp: Date.now(),
                                    cleanedUp: false,
                                    size: 50 + Math.random() * 50,
                                    cause: "bladder_full"
                                });
                                // Wet underwear
                                updatePlayerClothing(player.id, {
                                    underwearState: player.clothing.underwearState === "messy" ? "both" : "wet"
                                });
                                // Reset bladder
                                updatePlayerNeeds(player.id, {
                                    bladder: 0
                                });
                            }
                            // Bowel accidents
                            if (newNeeds.bowel >= 100) {
                                if (player.clothing.underwearType === "diaper") {
                                    // Mess in diaper
                                    const newFillLevel = Math.min(5, player.clothing.diaperFillLevel + 2);
                                    const newState = player.clothing.underwearState === "wet" ? "both" : "messy";
                                    updatePlayerClothing(player.id, {
                                        diaperFillLevel: newFillLevel,
                                        underwearState: newState
                                    });
                                    // Reset bowel
                                    updatePlayerNeeds(player.id, {
                                        bowel: 0
                                    });
                                } else {
                                    // Accident on floor
                                    addAccident({
                                        id: `accident_${Date.now()}_${player.id}`,
                                        type: "poop",
                                        position: player.position,
                                        playerId: player.id,
                                        timestamp: Date.now(),
                                        cleanedUp: false,
                                        size: 30 + Math.random() * 40,
                                        cause: "bowel_full"
                                    });
                                    // Messy underwear
                                    updatePlayerClothing(player.id, {
                                        underwearState: player.clothing.underwearState === "wet" ? "both" : "messy"
                                    });
                                    // Reset bowel
                                    updatePlayerNeeds(player.id, {
                                        bowel: 0
                                    });
                                }
                            }
                        }
                    }["useNeedsSystem.useEffect.interval"]);
                }
            }["useNeedsSystem.useEffect.interval"], 5000) // Update every 5 seconds
            ;
            return ({
                "useNeedsSystem.useEffect": ()=>clearInterval(interval)
            })["useNeedsSystem.useEffect"];
        }
    }["useNeedsSystem.useEffect"], [
        playersMap.size,
        updatePlayerNeeds,
        updatePlayerClothing,
        addAccident
    ]);
}
_s(useNeedsSystem, "XfPikmdrqG6q0jPe13bfBv0E3n4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/three/DaycareScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DaycareScene",
    ()=>DaycareScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/rapier/dist/react-three-rapier.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Sky.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Environment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$DaycareEnvironment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/three/DaycareEnvironment.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$DaycareObjects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/three/DaycareObjects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$PlayerCharacters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/three/PlayerCharacters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$CaregiverCharacters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/three/CaregiverCharacters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$AccidentMarkers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/three/AccidentMarkers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$LoadingFallback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/three/LoadingFallback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$NeedsSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/three/NeedsSystem.tsx [app-client] (ecmascript)");
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
;
function DaycareScene() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$NeedsSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNeedsSystem"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            shadows: true,
            camera: {
                position: [
                    0,
                    5,
                    10
                ],
                fov: 60,
                near: 0.1,
                far: 1000
            },
            gl: {
                antialias: true,
                alpha: false,
                powerPreference: "high-performance"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$LoadingFallback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingFallback"], {}, void 0, false, {
                    fileName: "[project]/components/three/DaycareScene.tsx",
                    lineNumber: 34,
                    columnNumber: 29
                }, void 0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                        intensity: 0.6,
                        color: "#FFE5EC"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareScene.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                        position: [
                            10,
                            20,
                            10
                        ],
                        intensity: 0.8,
                        castShadow: true,
                        "shadow-mapSize-width": 2048,
                        "shadow-mapSize-height": 2048,
                        "shadow-camera-far": 50,
                        "shadow-camera-left": -30,
                        "shadow-camera-right": 30,
                        "shadow-camera-top": 30,
                        "shadow-camera-bottom": -30,
                        color: "#FFFAF0"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareScene.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                        position: [
                            -10,
                            10,
                            -10
                        ],
                        intensity: 0.3,
                        color: "#E0BBE4"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareScene.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                        position: [
                            10,
                            10,
                            10
                        ],
                        intensity: 0.3,
                        color: "#FFDFD3"
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareScene.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Sky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sky"], {
                        distance: 450000,
                        sunPosition: [
                            10,
                            20,
                            10
                        ],
                        inclination: 0.6,
                        azimuth: 0.25,
                        turbidity: 2,
                        rayleigh: 0.5
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareScene.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$rapier$2f$dist$2f$react$2d$three$2d$rapier$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Physics"], {
                        gravity: [
                            0,
                            -9.81,
                            0
                        ],
                        debug: false,
                        timeStep: 1 / 60,
                        numSolverIterations: 10,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$DaycareEnvironment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DaycareEnvironment"], {}, void 0, false, {
                                fileName: "[project]/components/three/DaycareScene.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$DaycareObjects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DaycareObjects"], {}, void 0, false, {
                                fileName: "[project]/components/three/DaycareScene.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$PlayerCharacters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerCharacters"], {}, void 0, false, {
                                fileName: "[project]/components/three/DaycareScene.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$CaregiverCharacters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaregiverCharacters"], {}, void 0, false, {
                                fileName: "[project]/components/three/DaycareScene.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$AccidentMarkers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccidentMarkers"], {}, void 0, false, {
                                fileName: "[project]/components/three/DaycareScene.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/three/DaycareScene.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Environment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Environment"], {
                        preset: "apartment",
                        background: false
                    }, void 0, false, {
                        fileName: "[project]/components/three/DaycareScene.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/three/DaycareScene.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/three/DaycareScene.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/three/DaycareScene.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(DaycareScene, "oB55vmhLxMByTbaJ2Sj50jMBnRw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$NeedsSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNeedsSystem"]
    ];
});
_c = DaycareScene;
var _c;
__turbopack_context__.k.register(_c, "DaycareScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-progress/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Progress({ className, value, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "progress",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$progress$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "progress-indicator",
            className: "bg-primary h-full w-full flex-1 transition-all",
            style: {
                transform: `translateX(-${100 - (value || 0)}%)`
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/progress.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/progress.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Progress;
;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks/usePlayerActions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePlayerActions",
    ()=>usePlayerActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rules$2f$gameRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rules/gameRules.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function usePlayerActions() {
    _s();
    const currentPlayerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "usePlayerActions.useGameStore[currentPlayerId]": (state)=>state.currentPlayerId
    }["usePlayerActions.useGameStore[currentPlayerId]"]);
    const currentPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "usePlayerActions.useGameStore[currentPlayer]": (state)=>state.currentPlayerId ? state.players.get(state.currentPlayerId) : null
    }["usePlayerActions.useGameStore[currentPlayer]"]);
    const updatePlayerClothing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "usePlayerActions.useGameStore[updatePlayerClothing]": (state)=>state.updatePlayerClothing
    }["usePlayerActions.useGameStore[updatePlayerClothing]"]);
    const updatePlayerNeeds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "usePlayerActions.useGameStore[updatePlayerNeeds]": (state)=>state.updatePlayerNeeds
    }["usePlayerActions.useGameStore[updatePlayerNeeds]"]);
    const addMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "usePlayerActions.useGameStore[addMessage]": (state)=>state.addMessage
    }["usePlayerActions.useGameStore[addMessage]"]);
    const togglePacifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerActions.useCallback[togglePacifier]": ()=>{
            if (!currentPlayer) return;
            const ageRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rules$2f$gameRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeRules"])(currentPlayer.character.ageGroup);
            if (!ageRules.canTogglePacifier) {
                addMessage({
                    id: `msg_${Date.now()}`,
                    senderId: "system",
                    senderName: "System",
                    content: "You cannot remove your pacifier at this age.",
                    timestamp: Date.now(),
                    isSystem: true,
                    messageType: "announcement"
                });
                return;
            }
            updatePlayerClothing(currentPlayer.id, {
                pacifierIn: !currentPlayer.clothing.pacifierIn
            });
        }
    }["usePlayerActions.useCallback[togglePacifier]"], [
        currentPlayer,
        updatePlayerClothing,
        addMessage
    ]);
    const changeUnderwear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerActions.useCallback[changeUnderwear]": (newType)=>{
            if (!currentPlayer) return;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rules$2f$gameRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canChangeUnderwear"])(currentPlayer.character.ageGroup, newType)) {
                addMessage({
                    id: `msg_${Date.now()}`,
                    senderId: "system",
                    senderName: "System",
                    content: `You cannot wear ${newType} at your age.`,
                    timestamp: Date.now(),
                    isSystem: true,
                    messageType: "announcement"
                });
                return;
            }
            updatePlayerClothing(currentPlayer.id, {
                underwearType: newType,
                underwearState: "clean",
                diaperFillLevel: 0
            });
            addMessage({
                id: `msg_${Date.now()}`,
                senderId: "system",
                senderName: "System",
                content: `Changed to ${newType}.`,
                timestamp: Date.now(),
                isSystem: true,
                messageType: "announcement"
            });
        }
    }["usePlayerActions.useCallback[changeUnderwear]"], [
        currentPlayer,
        updatePlayerClothing,
        addMessage
    ]);
    const usePotty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerActions.useCallback[usePotty]": ()=>{
            if (!currentPlayer) return;
            const ageRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rules$2f$gameRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeRules"])(currentPlayer.character.ageGroup);
            if (!ageRules.canUsePotty) {
                addMessage({
                    id: `msg_${Date.now()}`,
                    senderId: "system",
                    senderName: "System",
                    content: "You need help using the potty.",
                    timestamp: Date.now(),
                    isSystem: true,
                    messageType: "announcement"
                });
                return;
            }
            // Check if near a potty (would need object proximity check)
            updatePlayerNeeds(currentPlayer.id, {
                bladder: Math.max(0, currentPlayer.needs.bladder - 50)
            });
            addMessage({
                id: `msg_${Date.now()}`,
                senderId: "system",
                senderName: "System",
                content: "You used the potty!",
                timestamp: Date.now(),
                isSystem: true,
                messageType: "announcement"
            });
        }
    }["usePlayerActions.useCallback[usePotty]"], [
        currentPlayer,
        updatePlayerNeeds,
        addMessage
    ]);
    const useToilet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerActions.useCallback[useToilet]": ()=>{
            if (!currentPlayer) return;
            const ageRules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rules$2f$gameRules$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAgeRules"])(currentPlayer.character.ageGroup);
            if (!ageRules.canUseToilet(currentPlayer.clothing.underwearType)) {
                addMessage({
                    id: `msg_${Date.now()}`,
                    senderId: "system",
                    senderName: "System",
                    content: "You cannot use the toilet with your current underwear.",
                    timestamp: Date.now(),
                    isSystem: true,
                    messageType: "announcement"
                });
                return;
            }
            updatePlayerNeeds(currentPlayer.id, {
                bladder: 0,
                bowel: 0
            });
            addMessage({
                id: `msg_${Date.now()}`,
                senderId: "system",
                senderName: "System",
                content: "You used the toilet!",
                timestamp: Date.now(),
                isSystem: true,
                messageType: "announcement"
            });
        }
    }["usePlayerActions.useCallback[useToilet]"], [
        currentPlayer,
        updatePlayerNeeds,
        addMessage
    ]);
    return {
        togglePacifier,
        changeUnderwear,
        usePotty,
        useToilet,
        currentPlayer
    };
}
_s(usePlayerActions, "ySJ6uLTZjXKIN3U46LKXaNZbqpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/types/gameTypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VOICE_SERVICE_CONFIG",
    ()=>VOICE_SERVICE_CONFIG,
    "calculateAlignmentChange",
    ()=>calculateAlignmentChange,
    "canUseBathroomAlone",
    ()=>canUseBathroomAlone,
    "canUsePottyAlone",
    ()=>canUsePottyAlone,
    "getAgeGroupScale",
    ()=>getAgeGroupScale,
    "getAlignmentColor",
    ()=>getAlignmentColor,
    "lobbySettingsSchema",
    ()=>lobbySettingsSchema,
    "needsEscort",
    ()=>needsEscort
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
const lobbySettingsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(50),
    maxPlayers: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(2).max(20),
    staffOnlyRoleChanges: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    staffOnlyGenderChanges: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    isPrivate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
function getAgeGroupScale(ageGroup) {
    switch(ageGroup){
        case "1-4":
            return 0.6;
        case "4-7":
            return 0.75;
        case "7-9":
            return 0.85;
        case "12+":
            return 1.0;
    }
}
function canUsePottyAlone(ageGroup) {
    return ageGroup === "7-9" || ageGroup === "12+";
}
function canUseBathroomAlone(ageGroup) {
    return ageGroup === "12+";
}
function needsEscort(ageGroup) {
    return ageGroup === "1-4" || ageGroup === "4-7";
}
function getAlignmentColor(alignment) {
    switch(alignment){
        case "little_angel":
            return "#FFD700";
        case "good_boy_girl":
            return "#90EE90";
        case "boy_girl":
            return "#87CEEB";
        case "bad_boy_girl":
            return "#FFA500";
        case "little_shit":
            return "#FF6347";
    }
}
function calculateAlignmentChange(currentAlignment, change) {
    // This would need more sophisticated logic in a real implementation
    const alignmentOrder = [
        "little_shit",
        "bad_boy_girl",
        "boy_girl",
        "good_boy_girl",
        "little_angel"
    ];
    const currentIndex = alignmentOrder.indexOf(currentAlignment);
    const newIndex = Math.max(0, Math.min(alignmentOrder.length - 1, currentIndex + change));
    return alignmentOrder[newIndex];
}
const VOICE_SERVICE_CONFIG = {
    // Default voice settings for AI caregivers
    CAREGIVER_VOICE: {
        stability: 0.7,
        similarityBoost: 0.8,
        style: 0.3,
        useSpeakerBoost: true
    },
    // Audio processing settings
    AUDIO_SETTINGS: {
        sampleRate: 44100,
        channels: 1,
        bitDepth: 16,
        chunkDuration: 1000
    },
    // Recognition settings (for player speech recognition)
    RECOGNITION_SETTINGS: {
        language: "en",
        model: "eleven_multilingual_v2",
        confidence: 0.8
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/HUD.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HUD",
    ()=>HUD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$usePlayerActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/usePlayerActions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$gameTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types/gameTypes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function HUD() {
    _s();
    const { currentPlayer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$usePlayerActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerActions"])();
    const messagesArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "HUD.useGameStore[messagesArray]": (state)=>state.messages
    }["HUD.useGameStore[messagesArray]"]);
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HUD.useMemo[messages]": ()=>messagesArray.slice(-5)
    }["HUD.useMemo[messages]"], [
        messagesArray
    ]);
    if (!currentPlayer) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "absolute top-4 left-4 p-4 pointer-events-auto bg-card/90 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 min-w-[200px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-foreground",
                            children: currentPlayer.name
                        }, void 0, false, {
                            fileName: "[project]/components/ui/HUD.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-2 py-1 rounded-md text-xs font-medium text-center",
                            style: {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2f$gameTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlignmentColor"])(currentPlayer.alignment)
                            },
                            children: currentPlayer.alignment.replace(/_/g, " ").toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/components/ui/HUD.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Bladder"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/HUD.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                Math.round(currentPlayer.needs.bladder),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/HUD.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                    value: currentPlayer.needs.bladder,
                                    className: "h-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Bowel"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/HUD.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                Math.round(currentPlayer.needs.bowel),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/HUD.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                    value: currentPlayer.needs.bowel,
                                    className: "h-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Hunger"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/HUD.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                Math.round(currentPlayer.needs.hunger),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/HUD.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                    value: currentPlayer.needs.hunger,
                                    className: "h-2"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/HUD.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Underwear: ",
                                        currentPlayer.clothing.underwearType
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "State: ",
                                        currentPlayer.clothing.underwearState
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                currentPlayer.clothing.underwearType === "diaper" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "Fill: ",
                                        currentPlayer.clothing.diaperFillLevel,
                                        "/5"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/HUD.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/HUD.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/HUD.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 w-[500px] pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1",
                    children: messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-primary",
                                    children: [
                                        msg.senderName,
                                        ": "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-foreground",
                                    children: msg.content
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/HUD.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, msg.id, true, {
                            fileName: "[project]/components/ui/HUD.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/ui/HUD.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/HUD.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "absolute bottom-4 right-4 p-3 pointer-events-auto bg-card/90 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold mb-1",
                            children: "Controls"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/HUD.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "WASD / Arrows - Move"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/HUD.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Shift - Run"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/HUD.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Space - Jump"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/HUD.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/HUD.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/HUD.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/HUD.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(HUD, "F4b2vnJRGUduFT1mmTm8vemo9hQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$usePlayerActions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerActions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = HUD;
var _c;
__turbopack_context__.k.register(_c, "HUD");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/stores/voiceStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceStore",
    ()=>useVoiceStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useVoiceStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isConnected: false,
        isRecording: false,
        audioLevel: 0,
        currentVoiceProfile: null,
        availableVoices: [],
        caregiverVoices: new Map(),
        lastTranscript: null,
        transcriptConfidence: 0,
        setConnected: (connected)=>set({
                isConnected: connected
            }),
        setRecording: (recording)=>set({
                isRecording: recording
            }),
        setAudioLevel: (level)=>set({
                audioLevel: level
            }),
        setVoiceProfile: (profile)=>set({
                currentVoiceProfile: profile
            }),
        setAvailableVoices: (voices)=>set({
                availableVoices: voices
            }),
        setCaregiverVoice: (caregiverId, voiceId)=>set((state)=>{
                const caregiverVoices = new Map(state.caregiverVoices);
                caregiverVoices.set(caregiverId, voiceId);
                return {
                    caregiverVoices
                };
            }),
        setLastTranscript: (transcript, confidence)=>set({
                lastTranscript: transcript,
                transcriptConfidence: confidence
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/services/ElevenLabsService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElevenLabsService",
    ()=>ElevenLabsService
]);
class ElevenLabsService {
    voiceProfile = null;
    recognitionLanguage = "en";
    synthesisLanguage = "en";
    audioLevelCallback;
    constructor(){}
    get isInitialized() {
        return true // Always initialized since we use server routes
        ;
    }
    async recognizeSpeech(audioData) {
        try {
            const formData = new FormData();
            formData.append("audio", new Blob([
                audioData
            ], {
                type: "audio/wav"
            }));
            const response = await fetch("/api/voice/transcribe", {
                method: "POST",
                body: formData
            });
            if (!response.ok) {
                throw new Error(`Transcription error: ${response.status}`);
            }
            const result = await response.json();
            return {
                text: result.text || "",
                confidence: result.confidence || 0.9,
                language: result.language || this.recognitionLanguage,
                duration: result.duration || 0
            };
        } catch (error) {
            console.error("Speech recognition failed:", error);
            throw new Error(`Speech recognition failed: ${error}`);
        }
    }
    async startContinuousRecognition() {
        console.log("Starting continuous recognition");
    }
    async stopContinuousRecognition() {
        console.log("Stopping continuous recognition");
        return "";
    }
    async synthesizeSpeech(text, options) {
        try {
            const { voiceId, stability = 0.7, similarityBoost = 0.8, style = 0.3 } = options;
            const response = await fetch("/api/voice/synthesize", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text,
                    voiceId,
                    stability,
                    similarityBoost,
                    style
                })
            });
            if (!response.ok) {
                throw new Error(`Speech synthesis error: ${response.status}`);
            }
            return await response.arrayBuffer();
        } catch (error) {
            console.error("Speech synthesis failed:", error);
            throw new Error(`Speech synthesis failed: ${error}`);
        }
    }
    async getAvailableVoices() {
        try {
            const response = await fetch("/api/voice/voices");
            if (!response.ok) {
                throw new Error(`Failed to fetch voices: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Failed to fetch available voices:", error);
            return [];
        }
    }
    async createVoiceProfile(voiceId) {
        const voices = await this.getAvailableVoices();
        const voice = voices.find((v)=>v.voiceId === voiceId);
        if (!voice) {
            throw new Error(`Voice not found: ${voiceId}`);
        }
        return voice;
    }
    async processAudioInput(stream) {
        console.log("Processing audio input");
    }
    setAudioLevelCallback(callback) {
        this.audioLevelCallback = callback;
    }
    setRecognitionLanguage(language) {
        this.recognitionLanguage = language;
    }
    setSynthesisLanguage(language) {
        this.synthesisLanguage = language;
    }
    setVoiceProfile(profile) {
        this.voiceProfile = profile;
    }
    getVoiceSettingsForEmotion(emotion) {
        switch(emotion){
            case "caring":
                return {
                    stability: 0.75,
                    similarityBoost: 0.85,
                    style: 0.25,
                    useSpeakerBoost: true
                };
            case "firm":
                return {
                    stability: 0.8,
                    similarityBoost: 0.7,
                    style: 0.6,
                    useSpeakerBoost: true
                };
            case "stern":
                return {
                    stability: 0.9,
                    similarityBoost: 0.6,
                    style: 0.8,
                    useSpeakerBoost: true
                };
            case "playful":
                return {
                    stability: 0.6,
                    similarityBoost: 0.8,
                    style: 0.2,
                    useSpeakerBoost: false
                };
            case "neutral":
            default:
                return {
                    stability: 0.7,
                    similarityBoost: 0.8,
                    style: 0.4,
                    useSpeakerBoost: true
                };
        }
    }
    async synthesizeCaregiverSpeech(voiceId, text, emotion = "caring") {
        const voiceSettings = this.getVoiceSettingsForEmotion(emotion);
        return this.synthesizeSpeech(text, {
            voiceId,
            ...voiceSettings
        });
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/VoiceControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceControls",
    ()=>VoiceControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.js [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$voiceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/voiceStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$ElevenLabsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/ElevenLabsService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>");
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
function VoiceControls() {
    _s();
    const [isRecording, setIsRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [voiceService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "VoiceControls.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$ElevenLabsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElevenLabsService"]()
    }["VoiceControls.useState"]);
    const mediaRecorderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioChunksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const { setRecording, setAudioLevel, setLastTranscript } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$voiceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceStore"])();
    const addMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "VoiceControls.useGameStore[addMessage]": (state)=>state.addMessage
    }["VoiceControls.useGameStore[addMessage]"]);
    const currentPlayerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "VoiceControls.useGameStore[currentPlayerId]": (state)=>state.currentPlayerId
    }["VoiceControls.useGameStore[currentPlayerId]"]);
    const startRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceControls.useCallback[startRecording]": async ()=>{
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true
                });
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;
                audioChunksRef.current = [];
                mediaRecorder.ondataavailable = ({
                    "VoiceControls.useCallback[startRecording]": (event)=>{
                        if (event.data.size > 0) {
                            audioChunksRef.current.push(event.data);
                        }
                    }
                })["VoiceControls.useCallback[startRecording]"];
                mediaRecorder.onstop = ({
                    "VoiceControls.useCallback[startRecording]": async ()=>{
                        const audioBlob = new Blob(audioChunksRef.current, {
                            type: "audio/wav"
                        });
                        const arrayBuffer = await audioBlob.arrayBuffer();
                        // Transcribe audio
                        try {
                            const result = await voiceService.recognizeSpeech(arrayBuffer);
                            console.log("[v0] Transcription:", result.text);
                            setLastTranscript(result.text, result.confidence);
                            // Add message to chat
                            if (currentPlayerId) {
                                addMessage({
                                    id: `msg_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])()}`,
                                    senderId: currentPlayerId,
                                    senderName: "You",
                                    content: result.text,
                                    timestamp: Date.now(),
                                    isSystem: false,
                                    messageType: "chat"
                                });
                            }
                        } catch (error) {
                            console.error("[v0] Transcription failed:", error);
                        }
                        // Clean up
                        stream.getTracks().forEach({
                            "VoiceControls.useCallback[startRecording]": (track)=>track.stop()
                        }["VoiceControls.useCallback[startRecording]"]);
                        audioChunksRef.current = [];
                    }
                })["VoiceControls.useCallback[startRecording]"];
                mediaRecorder.start();
                setIsRecording(true);
                setRecording(true);
                // Audio level monitoring
                if (("TURBOPACK compile-time value", "object") !== "undefined" && "AudioContext" in window) {
                    const audioContext = new AudioContext();
                    const source = audioContext.createMediaStreamSource(stream);
                    const analyser = audioContext.createAnalyser();
                    analyser.fftSize = 256;
                    source.connect(analyser);
                    const dataArray = new Uint8Array(analyser.frequencyBinCount);
                    const updateLevel = {
                        "VoiceControls.useCallback[startRecording].updateLevel": ()=>{
                            if (mediaRecorderRef.current?.state === "recording") {
                                analyser.getByteFrequencyData(dataArray);
                                const average = dataArray.reduce({
                                    "VoiceControls.useCallback[startRecording].updateLevel": (a, b)=>a + b
                                }["VoiceControls.useCallback[startRecording].updateLevel"]) / dataArray.length;
                                setAudioLevel(average / 255);
                                requestAnimationFrame(updateLevel);
                            }
                        }
                    }["VoiceControls.useCallback[startRecording].updateLevel"];
                    updateLevel();
                }
            } catch (error) {
                console.error("[v0] Failed to start recording:", error);
            }
        }
    }["VoiceControls.useCallback[startRecording]"], [
        voiceService,
        setRecording,
        setAudioLevel,
        setLastTranscript,
        addMessage,
        currentPlayerId
    ]);
    const stopRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceControls.useCallback[stopRecording]": ()=>{
            if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
                mediaRecorderRef.current.stop();
                setIsRecording(false);
                setRecording(false);
                setAudioLevel(0);
            }
        }
    }["VoiceControls.useCallback[stopRecording]"], [
        setRecording,
        setAudioLevel
    ]);
    const toggleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VoiceControls.useCallback[toggleMute]": ()=>{
            setIsMuted(!isMuted);
        }
    }["VoiceControls.useCallback[toggleMute]"], [
        isMuted
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "absolute top-4 right-4 p-3 pointer-events-auto bg-card/90 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: isRecording ? "destructive" : "default",
                    size: "icon",
                    onMouseDown: startRecording,
                    onMouseUp: stopRecording,
                    onTouchStart: startRecording,
                    onTouchEnd: stopRecording,
                    children: isRecording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                        className: "h-4 w-4 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/VoiceControls.tsx",
                        lineNumber: 121,
                        columnNumber: 26
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/VoiceControls.tsx",
                        lineNumber: 121,
                        columnNumber: 70
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/VoiceControls.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "icon",
                    onClick: toggleMute,
                    children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/VoiceControls.tsx",
                        lineNumber: 125,
                        columnNumber: 22
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/VoiceControls.tsx",
                        lineNumber: 125,
                        columnNumber: 56
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/VoiceControls.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-1 min-w-[100px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs font-medium",
                            children: isRecording ? "Recording..." : "Hold to talk"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/VoiceControls.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        isRecording && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 bg-secondary rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-primary animate-pulse",
                                style: {
                                    width: "100%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ui/VoiceControls.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/VoiceControls.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/VoiceControls.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/VoiceControls.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/VoiceControls.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(VoiceControls, "fQcQtPnz1FesL3QrnOA4JesxLl0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$voiceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = VoiceControls;
var _c;
__turbopack_context__.k.register(_c, "VoiceControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/VoiceVisualizer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoiceVisualizer",
    ()=>VoiceVisualizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$voiceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/voiceStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VoiceVisualizer() {
    _s();
    const audioLevel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$voiceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceStore"])({
        "VoiceVisualizer.useVoiceStore[audioLevel]": (state)=>state.audioLevel
    }["VoiceVisualizer.useVoiceStore[audioLevel]"]);
    const playersMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "VoiceVisualizer.useGameStore[playersMap]": (state)=>state.players
    }["VoiceVisualizer.useGameStore[playersMap]"]);
    const caregiversMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "VoiceVisualizer.useGameStore[caregiversMap]": (state)=>state.caregivers
    }["VoiceVisualizer.useGameStore[caregiversMap]"]);
    const players = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VoiceVisualizer.useMemo[players]": ()=>Array.from(playersMap.values())
    }["VoiceVisualizer.useMemo[players]"], [
        playersMap
    ]);
    const caregivers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VoiceVisualizer.useMemo[caregivers]": ()=>Array.from(caregiversMap.values())
    }["VoiceVisualizer.useMemo[caregivers]"], [
        caregiversMap
    ]);
    const activeSpeakers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "VoiceVisualizer.useMemo[activeSpeakers]": ()=>[
                ...players,
                ...caregivers
            ].filter({
                "VoiceVisualizer.useMemo[activeSpeakers]": (entity)=>entity.lastVoiceActivity && Date.now() - entity.lastVoiceActivity < 2000
            }["VoiceVisualizer.useMemo[activeSpeakers]"])
    }["VoiceVisualizer.useMemo[activeSpeakers]"], [
        players,
        caregivers
    ]);
    if (activeSpeakers.length === 0 && audioLevel === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-20 right-4 pointer-events-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2",
            children: [
                activeSpeakers.map((speaker)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-primary/20 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-primary rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/VoiceVisualizer.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-foreground",
                                children: [
                                    speaker.name,
                                    " is speaking"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/VoiceVisualizer.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, speaker.id, true, {
                        fileName: "[project]/components/ui/VoiceVisualizer.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)),
                audioLevel > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-secondary/20 backdrop-blur-sm rounded-lg px-3 py-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: Array.from({
                                    length: 5
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 bg-primary rounded-full transition-all",
                                        style: {
                                            height: audioLevel * 100 > i * 20 ? `${(i + 1) * 4}px` : "4px"
                                        }
                                    }, i, false, {
                                        fileName: "[project]/components/ui/VoiceVisualizer.tsx",
                                        lineNumber: 43,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ui/VoiceVisualizer.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground",
                                children: "Your mic"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/VoiceVisualizer.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/VoiceVisualizer.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/VoiceVisualizer.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/VoiceVisualizer.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/VoiceVisualizer.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(VoiceVisualizer, "+GhaYoPL/6aQWcTgFIU4tZBw66s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$voiceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = VoiceVisualizer;
var _c;
__turbopack_context__.k.register(_c, "VoiceVisualizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/TranscriptDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TranscriptDisplay",
    ()=>TranscriptDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$voiceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/voiceStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TranscriptDisplay() {
    _s();
    const lastTranscript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$voiceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceStore"])({
        "TranscriptDisplay.useVoiceStore[lastTranscript]": (state)=>state.lastTranscript
    }["TranscriptDisplay.useVoiceStore[lastTranscript]"]);
    const transcriptConfidence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$voiceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceStore"])({
        "TranscriptDisplay.useVoiceStore[transcriptConfidence]": (state)=>state.transcriptConfidence
    }["TranscriptDisplay.useVoiceStore[transcriptConfidence]"]);
    if (!lastTranscript) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "fixed bottom-32 left-1/2 -translate-x-1/2 p-3 max-w-[500px] pointer-events-auto bg-card/90 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-muted-foreground flex justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "You said:"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/TranscriptDisplay.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Confidence: ",
                                Math.round(transcriptConfidence * 100),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/TranscriptDisplay.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/TranscriptDisplay.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm text-foreground",
                    children: lastTranscript
                }, void 0, false, {
                    fileName: "[project]/components/ui/TranscriptDisplay.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/TranscriptDisplay.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/TranscriptDisplay.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(TranscriptDisplay, "1DmYWKLvF9DsTahMAI7AkP6WY4k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$voiceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$voiceStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceStore"]
    ];
});
_c = TranscriptDisplay;
var _c;
__turbopack_context__.k.register(_c, "TranscriptDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils/paywall.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Paywall utilities for daycare creation
 */ __turbopack_context__.s([
    "DAYCARE_PAYWALL",
    ()=>DAYCARE_PAYWALL,
    "hasValidDaycareAccess",
    ()=>hasValidDaycareAccess,
    "processPayment",
    ()=>processPayment,
    "watchAdvertisement",
    ()=>watchAdvertisement
]);
const DAYCARE_PAYWALL = {
    price: 9.99,
    adDuration: 30,
    trialDays: 7
};
async function processPayment(userId) {
    // Integration with payment processor (Stripe, etc.)
    try {
        // Placeholder for actual payment processing
        console.log("[v0] Processing payment for user:", userId);
        return true;
    } catch (error) {
        console.error("[v0] Payment processing failed:", error);
        return false;
    }
}
async function watchAdvertisement() {
    // Integration with ad network
    try {
        console.log("[v0] Loading advertisement...");
        // Placeholder - would integrate with Google AdMob, Unity Ads, etc.
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log("[v0] Advertisement completed");
                resolve(true);
            }, DAYCARE_PAYWALL.adDuration * 1000);
        });
    } catch (error) {
        console.error("[v0] Advertisement failed:", error);
        return false;
    }
}
function hasValidDaycareAccess(createdAt, trialEndDate, isPaid = false) {
    if (isPaid) return true;
    if (trialEndDate) {
        return Date.now() < trialEndDate;
    }
    const trialEnd = createdAt + DAYCARE_PAYWALL.trialDays * 24 * 60 * 60 * 1000;
    return Date.now() < trialEnd;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/PaywallDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaywallDialog",
    ()=>PaywallDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/paywall.ts [app-client] (ecmascript)");
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
function PaywallDialog() {
    _s();
    const showPaywall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "PaywallDialog.useGameStore[showPaywall]": (state)=>state.showPaywall
    }["PaywallDialog.useGameStore[showPaywall]"]);
    const setShowPaywall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "PaywallDialog.useGameStore[setShowPaywall]": (state)=>state.setShowPaywall
    }["PaywallDialog.useGameStore[setShowPaywall]"]);
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handlePayment = async ()=>{
        setIsProcessing(true);
        setPaymentMethod("payment");
        try {
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["processPayment"])("user_demo");
            if (success) {
                setShowPaywall(false);
                // Would grant access to daycare creation
                console.log("[v0] Payment successful - daycare access granted");
            } else {
                console.error("[v0] Payment failed");
            }
        } catch (error) {
            console.error("[v0] Payment error:", error);
        } finally{
            setIsProcessing(false);
            setPaymentMethod(null);
        }
    };
    const handleWatchAd = async ()=>{
        setIsProcessing(true);
        setPaymentMethod("ad");
        try {
            const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchAdvertisement"])();
            if (success) {
                setShowPaywall(false);
                // Would grant access to daycare creation
                console.log("[v0] Ad completed - daycare access granted");
            } else {
                console.error("[v0] Ad failed or was skipped");
            }
        } catch (error) {
            console.error("[v0] Ad error:", error);
        } finally{
            setIsProcessing(false);
            setPaymentMethod(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: showPaywall,
        onOpenChange: setShowPaywall,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[500px] bg-background",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-2xl font-bold text-foreground",
                            children: "Create Your Daycare"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PaywallDialog.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "text-muted-foreground",
                            children: "Choose how you'd like to unlock daycare creation and start welcoming little ones"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PaywallDialog.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/PaywallDialog.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-foreground flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                className: "h-5 w-5 text-primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                                lineNumber: 78,
                                                                columnNumber: 21
                                                            }, this),
                                                            "One-Time Payment"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Instant access, no ads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-primary",
                                                        children: [
                                                            "$",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAYCARE_PAYWALL"].price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: "One-time fee"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex flex-col gap-2 text-sm text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Lifetime access to daycare creation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "No advertisements"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Support development"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Priority customer support"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handlePayment,
                                        disabled: isProcessing,
                                        className: "w-full bg-primary hover:bg-primary/90",
                                        children: isProcessing && paymentMethod === "payment" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, this),
                                                "Processing..."
                                            ]
                                        }, void 0, true) : "Purchase Now"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PaywallDialog.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-6 border-2 border-secondary/20 hover:border-secondary/40 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-semibold text-foreground flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                                className: "h-5 w-5 text-secondary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Watch Advertisement"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Free access after watching"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-secondary",
                                                        children: "FREE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-muted-foreground",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAYCARE_PAYWALL"].adDuration,
                                                            "s ad"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex flex-col gap-2 text-sm text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-secondary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Watch a ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAYCARE_PAYWALL"].adDuration,
                                                            "-second advertisement"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-secondary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Get ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DAYCARE_PAYWALL"].trialDays,
                                                            "-day trial access"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-secondary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "No payment required"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-secondary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Can upgrade to premium anytime"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleWatchAd,
                                        disabled: isProcessing,
                                        variant: "secondary",
                                        className: "w-full",
                                        children: isProcessing && paymentMethod === "ad" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/PaywallDialog.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, this),
                                                "Loading Ad..."
                                            ]
                                        }, void 0, true) : "Watch Ad & Start Trial"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PaywallDialog.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "By proceeding, you agree to our Terms of Service and Privacy Policy.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/ui/PaywallDialog.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    "Payment processed securely through Stripe."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/PaywallDialog.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/PaywallDialog.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/PaywallDialog.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/PaywallDialog.tsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/PaywallDialog.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(PaywallDialog, "JXBE0xUKtAp4UlDDG9ray2e1P8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = PaywallDialog;
var _c;
__turbopack_context__.k.register(_c, "PaywallDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/TrialBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrialBanner",
    ()=>TrialBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/paywall.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function TrialBanner() {
    _s();
    const currentLobby = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TrialBanner.useGameStore[currentLobby]": (state)=>state.currentLobby
    }["TrialBanner.useGameStore[currentLobby]"]);
    const setShowPaywall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "TrialBanner.useGameStore[setShowPaywall]": (state)=>state.setShowPaywall
    }["TrialBanner.useGameStore[setShowPaywall]"]);
    const [daysRemaining, setDaysRemaining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrialBanner.useEffect": ()=>{
            if (!currentLobby || !currentLobby.trialEndDate) {
                setIsVisible(false);
                return;
            }
            const hasAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasValidDaycareAccess"])(currentLobby.createdAt, currentLobby.trialEndDate, false);
            const remaining = Math.ceil((currentLobby.trialEndDate - Date.now()) / (1000 * 60 * 60 * 24));
            setDaysRemaining(remaining);
            setIsVisible(hasAccess && remaining <= 3); // Show when 3 or fewer days remain
        }
    }["TrialBanner.useEffect"], [
        currentLobby
    ]);
    if (!isVisible || daysRemaining <= 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "fixed top-20 left-1/2 -translate-x-1/2 p-4 pointer-events-auto bg-accent/90 backdrop-blur-sm border-2 border-primary/30 max-w-[400px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2 bg-primary/20 rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        className: "h-5 w-5 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/TrialBanner.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/TrialBanner.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold text-foreground flex items-center gap-1",
                            children: [
                                "Trial Ending Soon",
                                daysRemaining <= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "h-3 w-3 text-primary animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/TrialBanner.tsx",
                                    lineNumber: 41,
                                    columnNumber: 36
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/TrialBanner.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: [
                                daysRemaining === 1 ? "1 day" : `${daysRemaining} days`,
                                " left in your free trial"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/TrialBanner.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/TrialBanner.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    size: "sm",
                    onClick: ()=>setShowPaywall(true),
                    className: "bg-primary hover:bg-primary/90",
                    children: "Upgrade"
                }, void 0, false, {
                    fileName: "[project]/components/ui/TrialBanner.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/TrialBanner.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/TrialBanner.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(TrialBanner, "VgqENZZft1/I6y+/vIIKbY9eMfk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = TrialBanner;
var _c;
__turbopack_context__.k.register(_c, "TrialBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/DaycareCreationButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DaycareCreationButton",
    ()=>DaycareCreationButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/paywall.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function DaycareCreationButton() {
    _s();
    const currentLobby = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "DaycareCreationButton.useGameStore[currentLobby]": (state)=>state.currentLobby
    }["DaycareCreationButton.useGameStore[currentLobby]"]);
    const setShowPaywall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "DaycareCreationButton.useGameStore[setShowPaywall]": (state)=>state.setShowPaywall
    }["DaycareCreationButton.useGameStore[setShowPaywall]"]);
    const handleCreateDaycare = ()=>{
        // Check if user has valid access
        const hasAccess = currentLobby ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasValidDaycareAccess"])(currentLobby.createdAt, currentLobby.trialEndDate, false) : false;
        if (hasAccess) {
            // Create daycare
            console.log("[v0] Creating daycare...");
        // Would show daycare creation modal
        } else {
            // Show paywall
            setShowPaywall(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: handleCreateDaycare,
        className: "gap-2 bg-primary hover:bg-primary/90",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/DaycareCreationButton.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            "Create Daycare"
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/DaycareCreationButton.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(DaycareCreationButton, "J9u5G9R2mLrdfPGUcetzmX1C7x8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = DaycareCreationButton;
var _c;
__turbopack_context__.k.register(_c, "DaycareCreationButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/SubscriptionStatus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionStatus",
    ()=>SubscriptionStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils/paywall.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function SubscriptionStatus() {
    _s();
    const currentLobby = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "SubscriptionStatus.useGameStore[currentLobby]": (state)=>state.currentLobby
    }["SubscriptionStatus.useGameStore[currentLobby]"]);
    const setShowPaywall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "SubscriptionStatus.useGameStore[setShowPaywall]": (state)=>state.setShowPaywall
    }["SubscriptionStatus.useGameStore[setShowPaywall]"]);
    if (!currentLobby) return null;
    const isPaid = false // Would check actual payment status
    ;
    const hasAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2f$paywall$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasValidDaycareAccess"])(currentLobby.createdAt, currentLobby.trialEndDate, isPaid);
    const isExpired = currentLobby.trialEndDate && Date.now() > currentLobby.trialEndDate;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (isExpired) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-4 bg-destructive/10 border-destructive/30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-destructive/20 rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "h-5 w-5 text-destructive"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold text-foreground",
                                children: "Trial Expired"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Upgrade to continue using daycare features"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        onClick: ()=>setShowPaywall(true),
                        className: "bg-primary hover:bg-primary/90",
                        children: "Upgrade Now"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/SubscriptionStatus.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    if (currentLobby.trialEndDate) {
        const daysRemaining = Math.ceil((currentLobby.trialEndDate - Date.now()) / (1000 * 60 * 60 * 24));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "p-4 bg-secondary/10 border-secondary/30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 bg-secondary/20 rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "h-5 w-5 text-secondary"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold text-foreground",
                                children: "Free Trial Active"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    daysRemaining,
                                    " ",
                                    daysRemaining === 1 ? "day" : "days",
                                    " remaining"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        variant: "outline",
                        onClick: ()=>setShowPaywall(true),
                        className: "border-primary text-primary hover:bg-primary/10",
                        children: "Upgrade"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/SubscriptionStatus.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/SubscriptionStatus.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    }
    return null;
}
_s(SubscriptionStatus, "J9u5G9R2mLrdfPGUcetzmX1C7x8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
_c = SubscriptionStatus;
var _c;
__turbopack_context__.k.register(_c, "SubscriptionStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks/useAICaregivers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAICaregivers",
    ()=>useAICaregivers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useAICaregivers() {
    _s();
    const hasInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAICaregivers.useEffect": ()=>{
            if (hasInitialized.current) return;
            hasInitialized.current = true;
            // Use setTimeout to defer spawning to next tick, avoiding render cycle
            const timeoutId = setTimeout({
                "useAICaregivers.useEffect.timeoutId": ()=>{
                    const state = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"].getState();
                    const playerCount = state.players.size;
                    const caregiverCount = state.caregivers.size;
                    const neededCaregivers = Math.max(1, Math.ceil(Math.max(1, playerCount) / 4));
                    if (caregiverCount < neededCaregivers) {
                        const toSpawn = neededCaregivers - caregiverCount;
                        for(let i = 0; i < toSpawn; i++){
                            const caregiver = createAICaregiver(caregiverCount + i);
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"].getState().addCaregiver(caregiver);
                        }
                    }
                }
            }["useAICaregivers.useEffect.timeoutId"], 0);
            return ({
                "useAICaregivers.useEffect": ()=>clearTimeout(timeoutId)
            })["useAICaregivers.useEffect"];
        }
    }["useAICaregivers.useEffect"], []);
}
_s(useAICaregivers, "xlWU9WGpPOGbTJN+8jcj+vweDBA=");
function createAICaregiver(index) {
    const personalities = [
        {
            name: "Miss Sophie",
            strictness: 60,
            nurturing: 70
        },
        {
            name: "Mr. James",
            strictness: 75,
            nurturing: 55
        },
        {
            name: "Miss Emily",
            strictness: 45,
            nurturing: 85
        },
        {
            name: "Mr. David",
            strictness: 80,
            nurturing: 50
        },
        {
            name: "Miss Rachel",
            strictness: 55,
            nurturing: 75
        }
    ];
    const personality = personalities[index % personalities.length];
    return {
        id: `ai_caregiver_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])()}`,
        name: personality.name,
        role: "caregiver",
        gender: personality.name.startsWith("Miss") ? "female" : "male",
        adminRole: "mod",
        character: {
            skinColor: "#F5D0C5",
            ageGroup: "12+",
            hairColor: "#8B4513",
            eyeColor: "#4A90E2"
        },
        clothing: {
            shirt: true,
            pants: true,
            socks: true,
            shoes: true,
            underwearType: "underwear",
            underwearState: "clean",
            diaperFillLevel: 0,
            pacifierIn: false
        },
        needs: {
            bladder: 0,
            bowel: 0,
            hunger: 0
        },
        position: {
            x: (Math.random() - 0.5) * 20,
            y: 0,
            z: (Math.random() - 0.5) * 20
        },
        rotation: Math.random() * Math.PI * 2,
        disciplineStatus: "green",
        alignment: "little_angel",
        isInTimeout: false,
        isBeingLed: false,
        currentAnimation: "walk",
        privileges: [
            "all"
        ],
        rewards: [],
        punishments: [],
        personality: {
            strictness: personality.strictness,
            nurturing: personality.nurturing,
            patience: 60 + Math.random() * 20,
            fairness: 75 + Math.random() * 15,
            responsiveness: 70 + Math.random() * 20
        },
        perception: {
            visibleEntities: [],
            distances: new Map(),
            occluded: false,
            audioEvents: []
        },
        worldState: {
            navmesh: null,
            hazards: [],
            interactables: new Map()
        },
        currentIntent: {
            goals: [],
            constraints: [],
            cooldowns: new Map()
        },
        voiceProfile: {
            provider: "elevenlabs",
            voiceId: `caregiver_voice_${index}`,
            pitch: 1.0,
            speed: 1.0,
            emotion: "caring",
            recognitionProvider: "openai",
            synthesisProvider: "elevenlabs"
        },
        isAI: true,
        lastDecisionTime: Date.now()
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/hooks/useVoiceCommunication.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVoiceCommunication",
    ()=>useVoiceCommunication
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$ElevenLabsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/services/ElevenLabsService.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useVoiceCommunication() {
    _s();
    const messageCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "useVoiceCommunication.useGameStore[messageCount]": (state)=>state.messages.length
    }["useVoiceCommunication.useGameStore[messageCount]"]);
    const lastMessageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "useVoiceCommunication.useGameStore[lastMessageId]": (state)=>state.messages[state.messages.length - 1]?.id
    }["useVoiceCommunication.useGameStore[lastMessageId]"]);
    const caregiversMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "useVoiceCommunication.useGameStore[caregiversMap]": (state)=>state.caregivers
    }["useVoiceCommunication.useGameStore[caregiversMap]"]);
    const [voiceService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useVoiceCommunication.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$services$2f$ElevenLabsService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElevenLabsService"]()
    }["useVoiceCommunication.useState"]);
    const lastProcessedMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Stable function to get caregiver
    const getCaregiver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVoiceCommunication.useCallback[getCaregiver]": (id)=>caregiversMap.get(id)
    }["useVoiceCommunication.useCallback[getCaregiver]"], [
        caregiversMap
    ]);
    // Initialize audio context
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoiceCommunication.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== "undefined" && "AudioContext" in window) {
                audioContextRef.current = new AudioContext();
            }
            return ({
                "useVoiceCommunication.useEffect": ()=>{
                    audioContextRef.current?.close();
                }
            })["useVoiceCommunication.useEffect"];
        }
    }["useVoiceCommunication.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoiceCommunication.useEffect": ()=>{
            if (!audioContextRef.current || !lastMessageId || messageCount === 0) return;
            if (lastMessageId === lastProcessedMessage.current) return;
            // Get latest message from store
            const messages = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"].getState().messages;
            const latestMessage = messages[messages.length - 1];
            if (!latestMessage) return;
            const caregiver = getCaregiver(latestMessage.senderId);
            if (!caregiver) return;
            lastProcessedMessage.current = lastMessageId;
            // Synthesize speech
            const voiceSettings = voiceService.getVoiceSettingsForEmotion(caregiver.voiceProfile.emotion);
            voiceService.synthesizeSpeech(latestMessage.content, {
                voiceId: caregiver.voiceProfile.voiceId,
                ...voiceSettings
            }).then({
                "useVoiceCommunication.useEffect": async (audioData)=>{
                    if (!audioContextRef.current || audioData.byteLength === 0) return;
                    try {
                        const audioBuffer = await audioContextRef.current.decodeAudioData(audioData);
                        const source = audioContextRef.current.createBufferSource();
                        source.buffer = audioBuffer;
                        source.connect(audioContextRef.current.destination);
                        source.start();
                    } catch (error) {
                        console.error("[v0] Failed to play audio:", error);
                    }
                }
            }["useVoiceCommunication.useEffect"]).catch({
                "useVoiceCommunication.useEffect": (error)=>{
                    console.error("[v0] Failed to synthesize speech:", error);
                }
            }["useVoiceCommunication.useEffect"]);
        }
    }["useVoiceCommunication.useEffect"], [
        lastMessageId,
        messageCount,
        voiceService,
        getCaregiver
    ]);
}
_s(useVoiceCommunication, "YmNH6WzKqXjZHSBGrGVDayKEILk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$DaycareScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/three/DaycareScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/HUD.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VoiceControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/VoiceControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VoiceVisualizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/VoiceVisualizer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$TranscriptDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/TranscriptDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PaywallDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PaywallDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$TrialBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/TrialBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DaycareCreationButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/DaycareCreationButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SubscriptionStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SubscriptionStatus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/stores/gameStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useAICaregivers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/useAICaregivers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useVoiceCommunication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/hooks/useVoiceCommunication.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.browser.js [app-client] (ecmascript) <locals>");
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
;
;
;
;
function Home() {
    _s();
    const setCurrentLobby = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "Home.useGameStore[setCurrentLobby]": (state)=>state.setCurrentLobby
    }["Home.useGameStore[setCurrentLobby]"]);
    const setCurrentPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"])({
        "Home.useGameStore[setCurrentPlayer]": (state)=>state.setCurrentPlayer
    }["Home.useGameStore[setCurrentPlayer]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useAICaregivers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAICaregivers"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useVoiceCommunication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceCommunication"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Initialize a test lobby with player
            const playerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])();
            const testPlayer = {
                id: playerId,
                name: "Little One",
                role: "little",
                gender: "male",
                adminRole: "none",
                character: {
                    skinColor: "#F5D0C5",
                    ageGroup: "4-7",
                    hairColor: "#FFD700",
                    eyeColor: "#87CEEB"
                },
                clothing: {
                    shirt: true,
                    pants: true,
                    socks: true,
                    shoes: true,
                    underwearType: "training_pants",
                    underwearState: "clean",
                    diaperFillLevel: 0,
                    pacifierIn: false
                },
                needs: {
                    bladder: 20,
                    bowel: 10,
                    hunger: 15
                },
                position: {
                    x: 0,
                    y: 1.5,
                    z: 0
                },
                rotation: 0,
                disciplineStatus: "green",
                alignment: "boy_girl",
                isInTimeout: false,
                isBeingLed: false,
                currentAnimation: "walk",
                privileges: [],
                rewards: [],
                punishments: []
            };
            const testLobby = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(),
                inviteCode: "TEST123",
                settings: {
                    name: "Test Daycare",
                    maxPlayers: 20,
                    staffOnlyRoleChanges: false,
                    staffOnlyGenderChanges: false,
                    isPrivate: false,
                    monetizationEnabled: true,
                    trialDays: 7
                },
                ownerId: playerId,
                players: new Map([
                    [
                        playerId,
                        testPlayer
                    ]
                ]),
                caregivers: new Map(),
                objects: new Map(),
                accidents: new Map(),
                createdAt: Date.now(),
                trialEndDate: Date.now() + 2 * 24 * 60 * 60 * 1000,
                isSuspended: false
            };
            setCurrentLobby(testLobby);
            setCurrentPlayer(playerId);
        }
    }["Home.useEffect"], [
        setCurrentLobby,
        setCurrentPlayer
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full h-screen overflow-hidden relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-screen flex items-center justify-center bg-background",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 100,
                            columnNumber: 15
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-medium text-foreground",
                            children: "Initializing Daycare..."
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 101,
                            columnNumber: 15
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 99,
                    columnNumber: 13
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 98,
                columnNumber: 11
            }, void 0),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$three$2f$DaycareScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DaycareScene"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUD"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VoiceControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceControls"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$VoiceVisualizer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceVisualizer"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$TranscriptDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranscriptDisplay"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PaywallDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaywallDialog"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$TrialBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrialBanner"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed top-4 left-1/2 -translate-x-1/2 flex items-center gap-4 pointer-events-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$DaycareCreationButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DaycareCreationButton"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-4 left-4 pointer-events-auto max-w-[350px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SubscriptionStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubscriptionStatus"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(Home, "XfyLrPWcwgFnUq3X2gdgEN4/4Jw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$stores$2f$gameStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useAICaregivers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAICaregivers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$hooks$2f$useVoiceCommunication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVoiceCommunication"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_04c07fba._.js.map