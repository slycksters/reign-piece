import { Header } from '@components';
import { Enhancements, Haki, Races, Ranks, Traits, Titles, Vows } from './components';
import styles from './PassiveBuffsPage.module.css';

export const PassiveBuffsPage = () => {
  return (
    <>
      <Header title={'Passive Buffs'} />

      <section className={'container mx-auto px-8'}>
        <div className={'grid grid-cols-1 md:grid-cols-6'}>
          <div className={'col-span-1 md:col-span-4 md:col-start-2'}>
            <Ranks />
            <Races />
            <Traits />
            <Titles />
            <Vows />
            <Haki />
            <Enhancements />
          </div>
        </div>
      </section>
    </>
  );
};
