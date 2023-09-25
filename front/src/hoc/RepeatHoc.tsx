const RepeatHoc = <P extends object>(
  MyComponent: React.ComponentType<P & { index: number }>,
  n: number,
): ((props: { [key: string]: unknown }) => JSX.Element) => {
  const result = (props: P) => {
    const array: number[] = new Array(n).fill(0)
    console.log('array: ', array)
    return (
      <>
        {array.map((n, i) => (
          <MyComponent key={i} index={i} {...props} />
        ))}
      </>
    )
  }
  return result as (props: { [key: string]: unknown }) => JSX.Element
}

export default RepeatHoc
