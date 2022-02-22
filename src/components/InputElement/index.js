import "./InputElement.css";

export default function InputElement({ inputProps, onChange, value }) {
    return (
        <div className="InputElement">
            <label>
                <input
                    {...inputProps}
                    type="text"
                    onChange={onChange}
                    value={value}
                />
            </label>
        </div>
    )
}