import Image from 'next/image';
import { MatchHighlightProps } from './MatchHightlight.types';
import styles from './MatchHightlight.module.scss';

const MatchHighlight: React.FC<MatchHighlightProps> = ({
    src,
    alt,
    title,
    description,
    imageVideoIcon,
}) => (
    <div className={styles['match__container']}>
        <Image src={src} alt={alt} className={styles['image']} width={420} height={250} />
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className={styles['match__container--icon']}>{imageVideoIcon}</div>
    </div>
);

export default MatchHighlight;
