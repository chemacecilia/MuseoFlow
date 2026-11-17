export type ScreenType =
  | 'welcome'
  | 'route-map'
  | 'stop-01-question'
  | 'stop-01-explanation'
  | 'hintergrund-detail'
  | 'stop-02-scan'
  | 'language-select';

export type RouteId = 'color' | 'identidad' | 'conflicto' | 'custom';

export type LanguageCode = 'ES' | 'EN' | 'VA' | 'FR' | 'DE' | 'IT' | 'RU';

export interface RouteInfo {
  id: RouteId;
  code: string;
  name: string;
  subtitle: string;
  title: string;
  description: string;
  stopsCount: number;
  available: boolean;
  accentColor: string;
  bgSoftColor: string;
  mapGraphic: string;
}

export interface StopMilestone {
  index: number;
  numberStr: string;
  name: string;
  isAvailable: boolean;
  isCompleted: boolean;
  x: number;
  y: number;
}

export interface QuestionOption {
  key: 'A' | 'B' | 'C';
  text: string;
  isCorrect?: boolean;
}

export interface StopQuestion {
  eyebrow: string;
  title: string;
  narrative: string;
  artworkTitle: string;
  artworkImage: string;
  artworkCaption: string;
  question: string;
  instruction: string;
  options: QuestionOption[];
}
