import classNames from 'classnames';
import styles from './landing-page.module.scss';
import img from '../../assets/Bibi_Dress.jpeg';

export interface LandingPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-landing-pages-and-templates
 */
export const LandingPage = ({ className }: LandingPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>My Dog Bibi</h1>
            <img src={img} className={styles.img} />
        </div>
    );
};
