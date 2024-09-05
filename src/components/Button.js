import React from 'react';
import { useNavigate } from 'react-router';

const Button = ({ text, style, link, startAdornment, rightArrow = false, className = 'reusable-btn', onClick, active }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(link)} style={{ cursor: 'pointer' }}>
            <button
                className={`${className} ${active ? 'active' : ''}`}
                style={style}
                onClick={onClick}
            >
                {startAdornment}
                {text}
            </button>
            {rightArrow && (
                <i className="fa-solid fa-angle-right ps-3 darkgray" />
            )}
        </div>
    );
};

export default Button;
