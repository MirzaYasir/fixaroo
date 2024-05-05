import { Card } from "react-bootstrap";

const TaskItem = ({id, imgUrl, title, description, selectedTaskID, setSelectedTaskID}) => {
    return (
        <Card className={`${id === selectedTaskID ? 'service-item-active' : 'service-item'}`} onClick={() => setSelectedTaskID(id)}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TaskItem;