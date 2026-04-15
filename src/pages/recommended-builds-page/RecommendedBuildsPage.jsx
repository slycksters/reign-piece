import { Header } from '@components';
import { BUILDS } from './constants';
import { BuildsSection } from './components';
import styles from './RecommendedBuildsPage.module.css';

export const RecommendedBuildsPage = () => {
  return (
    <>
      <Header title={'Recommended Builds'} />

      <section className={'container mx-auto px-8'} style={{ marginTop: '-20px' }}>
        <div className={'grid grid-cols-1 md:grid-cols-6'}>
          <div className={'col-span-1 md:col-span-4 md:col-start-2'}>
            <BuildsSection
              title={BUILDS.generalFarming.title}
              builds={BUILDS.generalFarming.builds}
            />
            <BuildsSection
              title={BUILDS.bossFarming.title}
              note={BUILDS.bossFarming.note}
              builds={BUILDS.bossFarming.builds}
            />
          </div>
        </div>
      </section>
    </>
  );
};