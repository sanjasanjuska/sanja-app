import User from "../User";
import "./Message.css";

export default function Message({ message }) {
    if (message === " " || message == null) {
        return null;
    }

    let className = "Message";

    return (
        <div className={className}>
            <div className="Message__user"><User /></div>
            <div className="Message__text">{message}</div>
        </div>
    );
}