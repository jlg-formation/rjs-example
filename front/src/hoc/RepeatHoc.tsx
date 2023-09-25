const RepeatHoc = <P extends object>(
  MyComponent: React.ComponentType<P>,
  n: number,
) => {
  const result = (props: P) => {
    const array: number[] = new Array(n).fill(0)
    console.log('array: ', array)
    return (
      <>
        {array.map((n, i) => (
          <MyComponent {...props} key={i} />
        ))}
      </>
    )
  }
  return result
}

export default RepeatHoc
