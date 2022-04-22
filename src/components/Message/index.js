import User from "../User";
import "./Message.css";

export default function Message({ message, my }) {

    if (message === " " || message == null) {
        return null;
    }

    return (
        <div className="Message">
            <div className="MessageUser">< User /></div>
            <div className="MessageText">{message}</div>
        </div>
    );
}