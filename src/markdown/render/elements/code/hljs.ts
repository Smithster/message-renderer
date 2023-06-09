import {globalCss} from "../../../../Stitches/stitches.config";

export const hljsTheme = globalCss({
    '.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_': {
        color: '#ff7b72'
    },
    '.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_': {
        color: '#d2a8ff'
    },
    '.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable': {
        color: '#79c0ff'
    },
    '.hljs-meta .hljs-string,.hljs-regexp,.hljs-string': {
        color: '#a5d6ff'
    },
    '.hljs-built_in,.hljs-symbol': {
        color: '#ffa657'
    },
    '.hljs-code,.hljs-comment,.hljs-formula': {
        color: '#8b949e'
    },
    '.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag': {
        color: '#7ee787'
    },
    '.hljs-subst': {
        color: '#c9d1d9'
    },
    '.hljs-section': {
        color: '#1f6feb',
        fontWeight: '700',
    },
    '.hljs-bullet': {
        color: '#f2cc60'
    },
    '.hljs-emphasis': {
        color: '#c9d1d9',
        fontStyle: 'italic',
    },
    '.hljs-strong': {
        color: '#c9d1d9',
        fontWeight: '700',
    },
    '.hljs-addition': {
        color: '#aff5b4',
        backgroundColor: '#033a16',
    },
    '.hljs-deletion': {
        color: '#ffdcd7',
        backgroundColor: '#67060c',
    }
});
