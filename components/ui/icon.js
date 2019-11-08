import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const iconMap = {
    'close': 'times',
    'add-circle': 'plus-circle',
};
const Icon = (props) => {
    return (
        <>
            <FontAwesomeIcon icon={iconMap[props.name] || props.name} />
        </>
    );
}

export default Icon;