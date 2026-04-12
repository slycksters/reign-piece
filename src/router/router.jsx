import { createBrowserRouter } from 'react-router-dom';
import {
  LandingPage,
  AbilitiesPage,
  PassiveBuffsPage,
  ItemsPage,
  TierListsPage,
  RecommendedBuildsPage,
  GameMechanicsPage,
  GuidesPage,
  UpdateLogsPage,
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
      { path: PATHS.PASSIVE_BUFFS, element: <PassiveBuffsPage /> },
      { path: PATHS.ITEMS, element: <ItemsPage /> },
      { path: PATHS.TIER_LISTS, element: <TierListsPage /> },
      { path: PATHS.RECOMMENDED_BUILDS, element: <RecommendedBuildsPage /> },
      { path: PATHS.GAME_MECHANICS, element: <GameMechanicsPage /> },
      { path: PATHS.GUIDES, element: <GuidesPage /> },
      { path: PATHS.UPDATE_LOGS, element: <UpdateLogsPage /> },
    ],
  },
]);
