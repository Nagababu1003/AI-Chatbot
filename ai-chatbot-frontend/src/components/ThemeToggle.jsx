import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { dark, toggle } = useContext(ThemeContext);
    return(
        <button 
            onClick={toggle}
            style={{
                width: 50,
                height: 24,
                borderRadius: 20,
                background:dark ? "#475569" : "#cbd5f5",
                position: "relative",
                border: "none",
                cursor: "pointer",
            }}
        >
            <span 
                style={{
                    width: 20,
                    height: 20,
                    background: "white",
                    borderRadius: "50%",
                    border:"none",
                   position: "absolute",
                    top: 2,
                    left: dark ? 26 : 4,
                }}

            />
            
        </button>
    );
}