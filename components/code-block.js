import { useEffect, useState } from 'react'
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'

const highlighterPromises = new Map()

const getHighlighter = (language, theme) => {
    const key = `${language}:${theme}`

    if (!highlighterPromises.has(key)) {
        highlighterPromises.set(
            key,
            import('shiki').then(({ createHighlighter }) =>
                createHighlighter({ langs: [language], themes: [theme] })
            )
        )
    }

    return highlighterPromises.get(key)
}

const CodeBlock = ({ children, language = 'cpp', theme, diff = false }) => {
    const { colorMode } = useColorMode()
    const resolvedTheme = theme ?? (colorMode === 'light' ? 'github-light' : 'github-dark')
    const code = typeof children === 'string' ? children.trim() : ''
    const [highlightedCode, setHighlightedCode] = useState('')

    useEffect(() => {
        let cancelled = false
        setHighlightedCode('')

        const lines = code.split('\n')
        const source = diff
            ? lines.map(line => /^[+-]/.test(line) ? line.slice(1) : line).join('\n')
            : code
        const transformers = diff
            ? [{
                line(node, lineNumber) {
                    const marker = lines[lineNumber - 1]?.[0]
                    if (marker !== '+' && marker !== '-') return

                    const className = marker === '+' ? 'diff-added' : 'diff-removed'
                    node.children = [{
                        type: 'element',
                        tagName: 'span',
                        properties: { className: [className] },
                        children: [
                            {
                                type: 'element',
                                tagName: 'span',
                                properties: { className: ['diff-marker'] },
                                children: [{ type: 'text', value: marker }],
                            },
                            ...node.children,
                        ],
                    }]
                },
            }]
            : []

        getHighlighter(language, resolvedTheme)
            .then(highlighter => highlighter.codeToHtml(source, { lang: language, theme: resolvedTheme, transformers }))
            .then(html => {
                if (!cancelled) setHighlightedCode(html)
            })
            .catch(() => {})

        return () => {
            cancelled = true
        }
    }, [code, diff, language, resolvedTheme])

    return (
        <Box
            my={4}
            sx={{
                '& pre': {
                    m: 0,
                    p: 4,
                    overflowX: 'auto',
                    borderRadius: 'md',
                    fontFamily: 'mono',
                    fontSize: 'sm',
                    lineHeight: 'tall',
                },
                '& .diff-added': {
                    backgroundColor: useColorModeValue('rgba(46, 160, 67, 0.12)', 'rgba(46, 160, 67, 0.22)'),
                },
                '& .diff-removed': {
                    backgroundColor: useColorModeValue('rgba(248, 81, 73, 0.12)', 'rgba(248, 81, 73, 0.22)'),
                },
                '& .diff-marker': {
                    display: 'inline-block',
                    width: '1.5em',
                    fontWeight: 'bold',
                    color: useColorModeValue('#1a7f37', '#3fb950'),
                    userSelect: 'none',
                },
                '& .diff-removed .diff-marker': {
                    color: useColorModeValue('#cf222e', '#ff7b72'),
                },
            }}
        >
            {highlightedCode ? (
                <Box dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            ) : (
                <Box
                    as="pre"
                    bg={useColorModeValue('white', '#24292e')}
                    color={useColorModeValue('gray.800', '#e1e4e8')}
                >
                    <Box as="code">{code}</Box>
                </Box>
            )}
        </Box>
    )
}

export default CodeBlock
