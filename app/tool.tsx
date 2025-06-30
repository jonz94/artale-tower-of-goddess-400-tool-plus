'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { LucideTrash2 } from 'lucide-react'
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui'
import { useId, useState } from 'react'

const answerLookupTable = {
  '0011': '211',
  '0101': '121',
  '0110': '112',

  '1011': '022',
  '1101': '202',
  '1110': '220',

  '1012': '031',
  '1021': '013',
  '1102': '301',
  '1120': '310',
  '1201': '103',
  '1210': '130',

  '2112': '004',
  '2121': '040',
  '2211': '400',
} as const

const INTRODUCTION = '請依序輸入' as const
const ANSWER_NOT_FOUND = '此組合不存在，請重新確認。' as const

function tryToFindAnswer(
  input: string,
): (typeof answerLookupTable)[keyof typeof answerLookupTable] | typeof ANSWER_NOT_FOUND {
  return answerLookupTable[input as keyof typeof answerLookupTable] ?? ANSWER_NOT_FOUND
}

export function Tool() {
  const [firstNumber, setFirstNumber] = useState<string | null>(null)
  const [secondNumber, setSecondNumber] = useState<string | null>(null)
  const [thirdNumber, setThirdNumber] = useState<string | null>(null)
  const [forthNumber, setForthNumber] = useState<string | null>(null)

  const input = `${firstNumber}${secondNumber}${thirdNumber}${forthNumber}`

  const isInputIncomplete = input.includes('null')

  const introductionOrAnswer = isInputIncomplete ? INTRODUCTION : tryToFindAnswer(input)

  return (
    <>
      <div className="text-center">
        <pre className={isInputIncomplete ? 'text-sky-400' : ''}>
          {isInputIncomplete ? '隊長已進入<封印之室>。' : input}
        </pre>
        <pre
          className={cn(
            'text-xl font-bold md:text-4xl',
            introductionOrAnswer === '請依序輸入'
              ? ''
              : introductionOrAnswer === '此組合不存在，請重新確認。'
                ? 'text-destructive'
                : 'text-green-600',
          )}
        >
          {introductionOrAnswer}
        </pre>
      </div>

      <Card className="mx-auto w-80">
        <CardContent className="flex flex-col gap-y-4">
          <div className="flex items-center justify-center gap-x-8">
            <p className="text-lg font-bold">隊長站空</p>
            <NumberSelector value={firstNumber} onValueChange={(value) => setFirstNumber(value)}></NumberSelector>
          </div>

          <div className="flex items-center justify-center gap-x-8">
            <p className="text-lg font-bold">隊長站左</p>
            <NumberSelector value={secondNumber} onValueChange={(value) => setSecondNumber(value)}></NumberSelector>
          </div>

          <div className="flex items-center justify-center gap-x-8">
            <p className="text-lg font-bold">隊長站中</p>
            <NumberSelector value={thirdNumber} onValueChange={(value) => setThirdNumber(value)}></NumberSelector>
          </div>

          <div className="flex items-center justify-center gap-x-8">
            <p className="text-lg font-bold">隊長站右</p>
            <NumberSelector value={forthNumber} onValueChange={(value) => setForthNumber(value)}></NumberSelector>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button
            variant="destructive"
            onClick={() => {
              setFirstNumber(null)
              setSecondNumber(null)
              setThirdNumber(null)
              setForthNumber(null)
            }}
          >
            <LucideTrash2 />
            清除並重新輸入
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

/**
 * modified from https://github.com/origin-space/originui/blob/b146da1ebf3b3926135b890dd255905bfd3e3394/registry/default/components/comp-163.tsx
 */
function NumberSelector({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  const id = useId()

  return (
    <RadioGroup className={cn('min-w-40 grid-cols-3', className)} {...props}>
      <div className="border-input has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground text-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
        <RadioGroupItem id={`${id}-0`} value="0" className="sr-only" />
        <label
          htmlFor={`${id}-0`}
          className="cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          0
        </label>
      </div>

      <div className="border-input has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground text-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
        <RadioGroupItem id={`${id}-1`} value="1" className="sr-only" />
        <label
          htmlFor={`${id}-1`}
          className="cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          1
        </label>
      </div>

      <div className="border-input has-data-[state=checked]:bg-primary has-data-[state=checked]:text-primary-foreground text-foreground has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
        <RadioGroupItem id={`${id}-2`} value="2" className="sr-only" />
        <label
          htmlFor={`${id}-2`}
          className="cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          2
        </label>
      </div>
    </RadioGroup>
  )
}
