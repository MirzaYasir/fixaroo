import { Form } from "react-bootstrap";

const Question = ({questionCount}) => {
    return (
        <div className='mb-3'>
            <label style={{ fontWeight: 700, marginRight: 10 }}>Question {questionCount}: </label>
            <span style={{ border: "1px solid #e5e5e5", borderRadius: 10, padding: 5, marginRight: 15 }}>
                <Form.Check inline type="radio" name={`question-${questionCount}`} aria-label={`radio ${questionCount}`} label="Yes" />
            </span>
            <span style={{ border: "1px solid #e5e5e5", borderRadius: 10, padding: 5, marginRight: 15 }}>
                <Form.Check inline type="radio" name={`question-${questionCount}`} aria-label={`radio ${questionCount}`} label="No" />
            </span>
        </div>
    );
}

export default Question;