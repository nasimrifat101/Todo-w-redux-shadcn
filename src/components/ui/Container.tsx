import { ReactNode } from "react";

interface Prop{
    children : ReactNode
}

const Container = ({children}: Prop) => {
    return (
        <div className="h-screen w-full max-w-7xl mx-auto m-3">
            {children}
        </div>
    );
};

export default Container;