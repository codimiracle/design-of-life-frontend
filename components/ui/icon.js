import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const iconMap = {
    'close': 'times',
    'add-circle': 'plus-circle',
    'add': 'plus'
};
const Icon = (props) => {
    return (
        <>
            <FontAwesomeIcon icon={iconMap[props.name] || props.name} {...props} />
        </>
    );
}

export default Icon;