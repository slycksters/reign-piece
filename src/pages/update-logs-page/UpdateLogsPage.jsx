import { Header } from '@components';
import { UpdateLogList } from './components';
import styles from './UpdateLogsPage.module.css';

export const UpdateLogsPage = () => {
  return (
    <>
      <Header title={'Update Logs'} />
      <UpdateLogList />
    </>
  );
};
