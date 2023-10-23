import type { Metadata } from 'next'
import Counter from '../_components/Counter'
import NiceText from '../_components/NiceText'
import AlertButton from '../_components/AlertButton'

const target = 'World'

export const metadata: Metadata = {
  title: `Hello, ${target}`,
}

export default function Hello() {
  return (
    <div className="m-4">
      <h1 className="text-xl">{target}</h1>
      <div className="[&>*]:my-4">
        <p>Hello, {target}</p>
        <div>
          <Counter />
        </div>
        <div>
          <NiceText text="0のときは色が赤くなるテキストコンポーネント → " />
          <NiceText text="0" />
        </div>
        <div>
          <AlertButton />
        </div>
      </div>
    </div>
  )
}
