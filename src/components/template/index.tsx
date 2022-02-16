import React, { ReactNode } from "react";

// import ReactAsyncSelect from 'react-select/async'

import styles from "../search/Search.module.css";

interface IProps {
  children: ReactNode;
}
const BaseTemplate: React.FC<IProps> = ({ children }) => {
  return <div className={styles.container}>ferfew:{children}</div>;
};
export default BaseTemplate;
