import { Tool } from '@/app/tool'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid min-h-dvh w-full justify-center">
      <div className="absolute top-0 flex w-full items-center justify-between p-4">
        <h1 className="text-xl font-bold">女神 400 速解小工具 加強版</h1>
        <ModeToggle></ModeToggle>
      </div>

      <div className="mt-16 flex flex-col gap-y-8 p-6">
        <Tool></Tool>

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
            <ul className="ml-6 list-disc">
              <li>改善了原版有時會卡住、答案出不來的情況</li>
              <li>增加了查表的方式</li>
              <li>增加了深色主題</li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-2">
            <h2 className="text-xl font-bold">📝 開放原始碼</h2>
            <p>
              <span>GitHub 專案網址: </span>
              <Link
                href="https://github.com/jonz94/tower-of-goddess-400-tool-plus"
                prefetch={false}
                className="text-blue-600 underline"
              >
                https://github.com/jonz94/tower-of-goddess-400-tool-plus
              </Link>
            </p>
            <p>
              <span>開源授權條款: </span>
              <Link
                href="https://github.com/jonz94/tower-of-goddess-400-tool-plus/blob/main/LICENSE"
                prefetch={false}
                className="text-blue-600 underline"
              >
                MIT License
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
