"use client"

import { handleLogOut } from "@/backend/actions/authentication";

const Logout = () => {
    return (
        <button className="btn-primary" onClick={handleLogOut}>
            Sign Out
        </button>
    );
};

export default Logout;