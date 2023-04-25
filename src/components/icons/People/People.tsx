import { FC } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IIcon } from "../../../types";

const People: FC<IIcon> = ({ className = "" }) => <FaUserAlt className={className} />

export default People