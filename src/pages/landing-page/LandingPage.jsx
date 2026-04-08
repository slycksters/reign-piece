import { Banner, Navigation, UpdateLog } from './components';

export const LandingPage = () => {
  return (
    <div className={'container mx-auto px-8 py-16 md:px-0 md:py-32'}>
      <div className={'grid grid-cols-1 md:grid-cols-6 gap-4'}>
        {/* This div is the main content block containing Banner, Navigation, UpdateLog */}
        <div className={'col-span-1 md:col-span-4 md:col-start-2'}>
          <Banner />
          
          <p className={'hidden md:block text-center text-lg text-[var(--text-secondary)] mt-8 mb-12 max-w-2xl mx-auto'}>
            Dive deep into the world of Reign Piece with comprehensive guides,
            up-to-date stats, powerful builds, and essential game mechanics.
            Become the strongest bandit-beater on Roblox!
          </p>

          <Navigation />
          {/* <UpdateLog /> */}
        </div>
      </div>
    </div>
  );
};
