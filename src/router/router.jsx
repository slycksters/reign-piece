import { createBrowserRouter } from 'react-router-dom';
import {
  LandingPage,
  AbilitiesPage,
  StatBuffsPage,
  ItemsPage,
  TierListsPage,
  RecommendedBuildsPage,
  GameMechanicsPage,
} from '@pages';
import { PATHS } from './paths';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: PATHS.ABILITIES, element: <AbilitiesPage /> },
      { path: PATHS.STAT_BUFFS, element: <StatBuffsPage /> },
      { path: PATHS.ITEMS, element: <ItemsPage /> },
      { path: PATHS.TIER_LISTS, element: <TierListsPage /> },
      { path: PATHS.RECOMMENDED_BUILDS, element: <RecommendedBuildsPage /> },
      { path: PATHS.GAME_MECHANICS, element: <GameMechanicsPage /> },
    ],
  },
]);
