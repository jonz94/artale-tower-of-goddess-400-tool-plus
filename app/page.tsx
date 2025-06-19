'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { LucideTrash2 } from 'lucide-react'
import Link from 'next/link'
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
    ? '請依序輸入'
    : (answerLookupTable[input as keyof typeof answerLookupTable] ?? '此組合不存在，請重新確認。')

  return (
    <div className="grid min-h-dvh w-screen justify-center">
      <div className="absolute top-0 flex w-full items-center justify-between p-4">
        <h1 className="text-xl font-bold">女神 400 速解小工具 加強版</h1>
        <ModeToggle></ModeToggle>
      </div>

      <div className="mt-16 flex flex-col gap-y-8 p-6">
        <div className="text-center">
          <pre className={input.includes('null') ? 'text-sky-400' : ''}>
            {input.includes('null') ? '隊長已進入<封印之室>。' : input}
          </pre>
          <pre
            className={cn(
              'text-xl font-bold md:text-4xl',
              input.includes('null')
                ? ''
                : answerLookupTable[input as keyof typeof answerLookupTable]
                  ? 'text-green-600'
                  : 'text-destructive',
            )}
          >
            {answer}
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

        <div className="text-center">--- 我是分隔線 ---</div>

        <div className="flex flex-col gap-y-4">
          <h2 className="text-xl font-bold">🔎 查表法</h2>
          <div className="font-mono">
            <p>使用說明：</p>
            <p>空左中右 👉 答案</p>
          </div>

          <h3 className="text-lg font-bold">(站空為 0)</h3>

          <div className="font-mono">
            <p>0 0 1 1 👉 211</p>
            <p>0 1 0 1 👉 121</p>
            <p>0 1 1 0 👉 112</p>
          </div>

          <h3 className="text-lg font-bold">(站空為 1、一個 0 兩個 1)</h3>

          <div className="font-mono">
            <p>1 0 1 1 👉 022</p>
            <p>1 1 0 1 👉 202</p>
            <p>1 1 1 0 👉 220</p>
          </div>

          <h3 className="text-lg font-bold">(站空為 1、012 各一)</h3>

          <div className="font-mono">
            <p>1 0 1 2 👉 031</p>
            <p>1 0 2 1 👉 013</p>
            <p>1 1 0 2 👉 301</p>
            <p>1 1 2 0 👉 310</p>
            <p>1 2 0 1 👉 103</p>
            <p>1 2 1 0 👉 130</p>
          </div>

          <h3 className="text-lg font-bold">(站空為 2)</h3>

          <div className="font-mono">
            <p>2 1 1 2 👉 004</p>
            <p>2 1 2 1 👉 040</p>
            <p>2 2 1 1 👉 400</p>
          </div>

          <h3 className="text-lg font-bold">(如果找不到答案，請重新確認)</h3>
        </div>

        <div className="text-center">--- 我是分隔線 ---</div>

        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl font-bold">✨ 特別感謝</h2>
            <p>
              <span>原版的女神 400 速解小工具: </span>
              <Link
                href="https://rvgin.github.io/tower-of-goddess/"
                prefetch={false}
                className="text-blue-600 underline"
              >
                https://rvgin.github.io/tower-of-goddess/
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl font-bold">🌱 主要改進的內容</h2>
            <ul className="ml-4 list-disc">
              <li>改善了原版有時會卡住、答案出不來的情況</li>
              <li>增加了查表的方式</li>
              <li>增加了深色主題</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
