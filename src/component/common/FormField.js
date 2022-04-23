import React from "react";

export default function FormField(props) {
    const { label,
            action,
            type
    } = props;
    return (
        <div>
            <label>{label}</label>
            <p />
            <input
                type={type}
                onChange={e => action(e)}
            />
            <p />
        </div>
    )
}