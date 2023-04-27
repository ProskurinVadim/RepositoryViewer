import { FC } from "react";

interface IImage{
    className?: string,
    src: string
}

const Image: FC<IImage> = ({ className = "",src="" }) => {
    return (
        <div className={"image " + className}>
            <img src={src} alt="avatar"/>
        </div>
    )
}

export default Image