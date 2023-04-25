import { FC } from "react";
import { People, Star } from "../../../icons/";
import { Image } from "../../../common/";
import { IListItem } from "../../../../types";


const ListItem: FC<IListItem> = ({ name, author, description, language, stars, watch }) => {
    return (
        <li className="space-between list-item">
            <div className="space-between">
                <Image className="list-item-image shrink-0" />
                <div className="list-item-content">
                    <h2 className="list-item-header">{name}</h2>
                    <p className="list-item-text">{author}</p>
                    <p className="list-item-text">{language}</p>
                    <p className="list-item-text text__additional">{description}</p>
                </div>
            </div>
            <div className="shrink-0">      
                <p className="list-item-text">
                    <Star className="list-item-icon list-item-icon__colored"/>
                    <span className="text__bold">{stars} </span>
                     stars
                </p>
                <p className="list-item-text text__bold ">
                    <People className="list-item-icon" />
                    {`${watch} watchers`}
                </p>
            </div>
        </li>
    )
}

export default ListItem