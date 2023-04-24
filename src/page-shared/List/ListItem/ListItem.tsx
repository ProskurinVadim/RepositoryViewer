import { FC } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Star, Trash } from "../../../components/common";
import { IListItem } from "../../../types";
import Image from 'react-bootstrap/Image'

interface IItem {
    onDelete: () => void,
    onFavorites: () => void,
    item: IListItem
}

const ListItem: FC<IItem> = ({ onFavorites, onDelete, item }) => {
    const { name, favorites, amount, image, description }: IListItem = item;
    // Delete unused height and check for image
    return (
        <ListGroup.Item style={{ background: "linear-gradient(to right, rgba(126, 64, 246, 1), rgba(80, 139, 252, 1)" }}>

            <Row>
                <Col className="fs-5">
                    Name: {name}
                </Col>
                <Col className="text-end fs-5">
                    Amount: {amount}
                </Col>
            </Row>
            <Row className="justify-content-between pt-3">
                <Col>
                    <Image src={image} className="w-75 h-75" role="image" />
                </Col>
                <Col xs lg="8" className="mh-100">
                    <p className="overflow-hidden text-light" style={{ height: 100 }}>{description}</p>
                </Col>
                <Col className="text-end">
                    <Star className="fs-2 me-3 d-block " favorites={favorites} onClick={onFavorites} />
                    <Trash className="fs-2 d-block me-3" onClick={onDelete} />
                </Col>
            </Row>

        </ListGroup.Item>
    )
}


export default ListItem

