import {AwesomeButton} from 'react-awesome-button';
import styles from '../components/styles/themes/theme-rickiest';


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