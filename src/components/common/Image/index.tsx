import { FC } from "react";

interface IImage{
    src: string,
    alt?: string,
    className?: string,
}

const Image: FC<IImage> = ({ src, alt="image", className = "" }) => {
    return (
        <div className={className}>
            <img alt={alt} src={src} />
        </div>
    )
}

export default Image