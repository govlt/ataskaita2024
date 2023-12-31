import {AwesomeButton} from 'react-awesome-button';
import styles from './styles/themes/theme-gray';


interface ButtonProps {
    title: string;
    onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({ title, onClick }) =>{
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


export default Button;