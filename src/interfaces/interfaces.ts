export interface CarBasic {
  name: string;
  color: string;
};

export interface Car extends CarBasic {
  id: number;
}

export interface Cars {
  items: [];
  count: string | null;
}

export interface Engine {
  velocity: number;
  distance: number;
  success: boolean;
}

export interface Winner {
  id: number;
  wins: number;
  time: number;
}