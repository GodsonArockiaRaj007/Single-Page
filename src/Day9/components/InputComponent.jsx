
const InputComponent = ({arr,color}) => {
  return (
    <>
    <div className="flex flex-wrap gap-2"style={{ color }}>
  {(arr ?? []).map((e, i) => (
    <span key={i}>{e}</span>
  ))}
</div>
    </>
  )
}

export default InputComponent