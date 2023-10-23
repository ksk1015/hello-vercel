type Props = {
  text: string | number
}

export default function NiceText({ text }: Props) {
  const color = `${text}` === '0' ? 'text-red-600' : 'text-green-600'
  const classes = `text-2xl ${color}`
  return <span className={classes}>{`${text}`}</span>
}
