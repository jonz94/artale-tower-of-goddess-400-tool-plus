'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { LucideRotateCw } from 'lucide-react'
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
}

export default function Home() {
  const [firstNumber, setFirstNumber] = useState<string | null>(null)
  const [secondNumber, setSecondNumber] = useState<string | null>(null)
  const [thirdNumber, setThirdNumber] = useState<string | null>(null)
  const [forthNumber, setForthNumber] = useState<string | null>(null)

  const input = `${firstNumber}${secondNumber}${thirdNumber}${forthNumber}`

  const answer = input.includes('null')
    ? '請輸入'
    : (answerLookupTable[input as keyof typeof answerLookupTable] ?? '此組合不存在，請重新確認。')

  return (
    <div className="grid min-h-dvh w-screen justify-center">
      <div className="absolute top-0 flex w-full items-center justify-between p-4">
        <h1 className="text-xl font-bold">女神 400 速解小工具 加強版</h1>
        <ModeToggle></ModeToggle>
      </div>

      <div className="mt-16 flex flex-col gap-y-8">
        <div>
          <pre>{input.includes('null') ? '尚未輸入' : input}</pre>
          <pre className="text-xl font-bold md:text-4xl">{answer}</pre>
        </div>

        <Card className="mx-auto w-80">
          <CardContent className="flex flex-col gap-y-4">
            <div className="flex items-center justify-center gap-x-8">
              <p>空</p>
              <NumberSelector value={firstNumber} onValueChange={(value) => setFirstNumber(value)}></NumberSelector>
            </div>

            <div className="flex items-center justify-center gap-x-8">
              <p>左</p>
              <NumberSelector value={secondNumber} onValueChange={(value) => setSecondNumber(value)}></NumberSelector>
            </div>

            <div className="flex items-center justify-center gap-x-8">
              <p>中</p>
              <NumberSelector value={thirdNumber} onValueChange={(value) => setThirdNumber(value)}></NumberSelector>
            </div>

            <div className="flex items-center justify-center gap-x-8">
              <p>右</p>
              <NumberSelector value={forthNumber} onValueChange={(value) => setForthNumber(value)}></NumberSelector>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center">
            <Button
              onClick={() => {
                setFirstNumber(null)
                setSecondNumber(null)
                setThirdNumber(null)
                setForthNumber(null)
              }}
            >
              <LucideRotateCw />
              清除並重新輸入
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

function NumberSelector({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  const id = useId()

  return (
    <RadioGroup className={cn('min-w-40 grid-cols-3', className)} {...props}>
      <div className="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
        <RadioGroupItem id={`${id}-0`} value="0" className="sr-only" />
        <label
          htmlFor={`${id}-0`}
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          0
        </label>
      </div>

      <div className="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
        <RadioGroupItem id={`${id}-1`} value="1" className="sr-only" />
        <label
          htmlFor={`${id}-1`}
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          1
        </label>
      </div>

      <div className="border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px]">
        <RadioGroupItem id={`${id}-2`} value="2" className="sr-only" />
        <label
          htmlFor={`${id}-2`}
          className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
        >
          2
        </label>
      </div>
    </RadioGroup>
  )
}
