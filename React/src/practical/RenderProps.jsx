import Message from "./Message"

export default function RenderProps() {
    return (
        <div >
            <h1>This is a RenderProps</h1>
            <Message render={(message) => (
                <div>
                    <p>Message inside RenderProps</p>
                    <p>{message}</p>
                </div>
            )} />
        </div>
    )
}