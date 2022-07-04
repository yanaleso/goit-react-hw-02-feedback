import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(option => (
            <Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button>
        ))
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;