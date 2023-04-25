import { FC } from "react";
import { FaStar } from "react-icons/fa";
import { IIcon } from "../../../types";

const Star: FC<IIcon> = ({ className = "" }) => <FaStar className={className} />

export default Star