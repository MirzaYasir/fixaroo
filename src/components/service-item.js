import { Card } from "react-bootstrap";

const ServiceItem = ({id, imgUrl, title, description, selectedServiceID, setSelectedServiceID}) => {
    return (
        <Card className={`${id === selectedServiceID ? 'service-item-active' : 'service-item'}`} onClick={() => setSelectedServiceID(id)}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ServiceItem;