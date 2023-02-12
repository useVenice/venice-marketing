export type ContainerProps = {
  children?: React.ReactNode
}
export function Container({children}: ContainerProps) {
  return <div className="container px-4 md:px-20 max-w-screen-lg">{children}</div>
}
