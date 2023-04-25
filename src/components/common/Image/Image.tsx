import { FC } from "react";

interface IImage{
    className?: string,
}

const Image: FC<IImage> = ({ className = "" }) => {
    return (
        <div className={"image " + className}>
            <div />
        </div>
    )
}

export default Image