
const MessageComponent = ({message}) => {
  return (
    <>
    <div>
        <h1> <span className="font-bold">Uppercase:</span>{message.toUpperCase()}</h1>
    </div>
    </>
  )
}

export default MessageComponent