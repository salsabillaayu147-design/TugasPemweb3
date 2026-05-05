//STATE
import { useState } from "react";

const ButtonFollow= () => {
    const [isFollowe, setFollow] = useState<boolean>(false);

    return  (
        <button onClick={() => setFollow(!isFollowe)}>
            {isFollowe == true ? "Following" : "Follow"}
        </button>
    );
};

export default ButtonFollow;