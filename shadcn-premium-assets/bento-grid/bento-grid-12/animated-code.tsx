'use client'

import { useState, useEffect } from 'react'

import { cn } from '@/lib/utils'

// Tokenize and colorize JSON/code
function colorizeCode(code: string) {
  const tokens: Array<{ text: string; color: string }> = []
  let i = 0

  while (i < code.length) {
    const char = code[i]

    // Check for string (in quotes)
    if (char === '"') {
      let str = '"'

      i++
      let isKey = false

      while (i < code.length && code[i] !== '"') {
        if (code[i] === '\\') {
          str += code[i] + (code[i + 1] || '')
          i += 2
        } else {
          str += code[i]
          i++
        }
      }

      if (i < code.length) {
        str += '"'
        i++
      }

      // Check if this is a key (followed by a colon)
      let j = i

      while (j < code.length && /\s/.test(code[j])) j++
      if (code[j] === ':') isKey = true

      tokens.push({
        text: str,
        color: isKey ? 'text-sky-400' : 'text-green-400'
      })
      continue
    }

    // Check for numbers
    if (/\d/.test(char) || (char === '-' && /\d/.test(code[i + 1]))) {
      let num = char

      i++

      while (i < code.length && /[\d.]/.test(code[i])) {
        num += code[i]
        i++
      }

      tokens.push({ text: num, color: 'text-orange-400' })
      continue
    }

    // Check for boolean/null
    if (code.slice(i, i + 4) === 'true' || code.slice(i, i + 5) === 'false' || code.slice(i, i + 4) === 'null') {
      const keyword = code.slice(i, i + 4) === 'true' ? 'true' : code.slice(i, i + 5) === 'false' ? 'false' : 'null'

      tokens.push({ text: keyword, color: 'text-purple-400' })
      i += keyword.length
      continue
    }

    // Check for comments
    if (code.slice(i, i + 2) === '//') {
      let comment = ''

      while (i < code.length && code[i] !== '\n') {
        comment += code[i]
        i++
      }

      tokens.push({ text: comment, color: 'text-gray-500 italic' })
      continue
    }

    // Highlight braces and brackets
    if (char === '{' || char === '}' || char === '[' || char === ']') {
      tokens.push({ text: char, color: 'text-yellow-400/80 inline-block' })
      i++
      continue
    }

    // Punctuation and whitespace
    tokens.push({ text: char, color: 'text-white/70' })
    i++
  }

  return tokens
}

function AnimatedCode({ code, className }: { code: string; className?: string }) {
  const [displayedCode, setDisplayedCode] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(code.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 70)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, code])

  const tokens = colorizeCode(displayedCode)

  return (
    <div className={cn('relative overflow-auto rounded-xl bg-[#222b41] p-3 backdrop-blur-sm', className)}>
      <pre className='text-xs'>
        <code>
          {tokens.map((token, idx) => (
            <span key={idx} className={token.color}>
              {token.text}
            </span>
          ))}
          {currentIndex < code.length && <span className='animate-pulse text-green-400'>|</span>}
        </code>
      </pre>
    </div>
  )
}

export default AnimatedCode
