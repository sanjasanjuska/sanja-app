import { useState } from "react";
import InputElement from "../InputElement";
import Button from "../Button";

export default function MessageForm({ onSendMessage }) {
    const [state, setState] = useState({
        message: " ",
    });

    const setMessage = (event) => {
        setState({ ...state, message: event.target.value });

    }

    const sendMessage = (event) => {
        event.preventDefault();
        onSendMessage(state);
        setState({ message: "" });
    }

    return (
        <form onSubmit={sendMessage}>
            <InputElement
                onChange={setMessage}
                value={state.message}
                inputProps={{
                    placeholder: "Unesi poruku",
                    name: "message",
                    id: "message"
                }}
            />
            <Button type="submit">Pošalji</Button>
        </form>
    );
}