export interface GeolocationDataType {
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface ForecastContainerCardProps {
  day: string;
  condition: string;
  minTemp: number;
  maxTemp: number;
  icon: string; // This can also be a type like ReactNode if you decide to use SVGs or components instead of strings
}

export interface DailyForecastCardProps {
  time: string;
  icon: string;
  temp: number;
}

export interface AirConditionsCardsProps {
  icon: string;
  text: string;
  value: string;
}

export interface DividerProps {
  height: number;
  width: number;
}
