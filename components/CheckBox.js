import styles from "../styles/TopicSelection.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

/**
 * Custom component for topic selection checkboxes. Takes the topic number, name for topic, icon path, topic
 * description, and function for saving checkbox state.
 * @param topic
 * @param name
 * @param icon
 * @param description
 * @param update
 * @returns {JSX.Element}
 * @constructor
 */
const CheckBox = ({topic, disabled, name, icon, description, checked, update, cssFilter, flipped, setFlippedCards}) => {
	if (disabled){
		return (<></>);
	}
	return (
		<div className={styles.selectionCard + " " + cssFilter}>
			<input type="checkbox" id={topic} value={topic} onChange={update}/>
            <label
				htmlFor={topic}
				className={styles.checkBox}
			>
                <div className={styles.invisibleCheckbox}>
					<div className={styles.selectionCardInner} style={flipped ? {'transform': 'rotateY(180deg)'} : {}}>
					<div className={styles.selectionCardFront + " check"} style={checked ? {'backgroundColor': 'var(--pale-card-color)'} : {}}>
						<h1 className={styles.topicHeader}>{name}</h1>
						<FontAwesomeIcon icon={icon} size="5x"/>
						<div className={styles.flipBtn} onClick={setFlippedCards}>View Description {'>'}</div>
					</div>
					<div className={styles.selectionCardBack} style={checked ? {'backgroundColor': 'var(--pale-card-color)'} : {}}>
						<p>{description}</p>
						<div className={styles.flipBtn} onClick={setFlippedCards}>{'<'} Back</div>
					</div>
					</div>
                </div>
			</label>
        </div>
    );
};

export default CheckBox