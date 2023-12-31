import type { Metadata } from 'next'
import Counter from '../../_components/Counter'

const target = 'Vercel'

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
          <Counter defaultCount={5} />
        </div>
      </div>
    </div>
  )
}
