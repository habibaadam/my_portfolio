import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { useState } from 'react';

const Tech = () => {
  const [loadingErrors, setLoadingErrors] = useState({});

  const handleImageError = (techName) => {
    setLoadingErrors(prev => ({
      ...prev,
      [techName]: true
    }));
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {!loadingErrors[technology.name] ? (
              <BallCanvas
                icon={technology.icon}
                onError={() => handleImageError(technology.name)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-jetLight rounded-full">
                <span className="text-timberWolf text-sm">{technology.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
