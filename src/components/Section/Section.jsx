import { Box } from 'components/Box';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Box pl={4} as="section">
      {title && <h2>{title}</h2>}
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Section;