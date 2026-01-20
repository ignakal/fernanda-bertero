export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'Closet' | 'Shopping' | 'Color' | 'Style';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const BRAND_COLORS = {
  primary: '#D42D6F',   // Fucsia maduro
  secondary: '#1F5670', // Azul petróleo
  accent: '#E37547',    // Naranja quemado
  neutral: '#E8E4DF',   // Gris perla
};