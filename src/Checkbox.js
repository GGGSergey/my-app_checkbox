import { useEffect, useRef } from "react";

export default function CheckBox({ status, onChange }) {
    const myRef = useRef();

    useEffect(() => {
        myRef.current.indeterminate = status === "indeterminate";
    }, [status]);

    return (
        <input
            ref={myRef}
            type="checkbox"
            checked={status === "checked"}
            onChange={onChange}
        />
    );
}
