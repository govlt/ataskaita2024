import {AwesomeButton} from 'react-awesome-button';
import styles from './styles/themes/theme-gray';


interface BigButtonProps {
    title: string;
    onClick?: () => void;
}
const BigButton: React.FC<BigButtonProps> = ({ title, onClick }) =>{
    return (
        <AwesomeButton
            onPress={onClick}
            cssModule={styles}
            type="primary"
        >
            {title}
        </AwesomeButton>
    );
}


export default BigButton;