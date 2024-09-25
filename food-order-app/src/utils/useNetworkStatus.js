import { useState, useEffect } from "react";

const useNetworkStatus = () => {
    const [networktStatus, setNetworkStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setNetworkStatus(false);
        });

        window.addEventListener("online", () => {
            setNetworkStatus(true);
        });
    }, []);

    return networktStatus;
};

export default useNetworkStatus;
