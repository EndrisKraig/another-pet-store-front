import React from "react";

export default function FormSelectField(props) {
    const {
        label,
        action,
        options
    } = props;
    return (
        <div>
            <p />
            <label>{label}</label>
            <p />
            <select onChange={e => action(e)}>
                {options}
            </select>
        </div>
    )
}