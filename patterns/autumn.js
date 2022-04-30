import { defaultFill, defaultOpacity } from './_defaults';
import { unhex } from './_utils';

export const autumn = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2288%22%20height%3D%2224%22%20viewBox%3D%220%200%2088%2024%22%3E%3Cpath%20d%3D%22M10%200l30%2015%202%201V2.18A10%2010%200%200%200%2041.76%200H39.7a8%208%200%200%201%20.3%202.18v10.58L14.47%200H10zm31.76%2024a10%2010%200%200%200-5.29-6.76L4%201%202%200v13.82a10%2010%200%200%200%205.53%208.94L10%2024h4.47l-6.05-3.02A8%208%200%200%201%204%2013.82V3.24l31.58%2015.78A8%208%200%200%201%2039.7%2024h2.06zM78%2024l2.47-1.24A10%2010%200%200%200%2086%2013.82V0l-2%201-32.47%2016.24A10%2010%200%200%200%2046.24%2024h2.06a8%208%200%200%201%204.12-4.98L84%203.24v10.58a8%208%200%200%201-4.42%207.16L73.53%2024H78zm0-24L48%2015l-2%201V2.18A10%2010%200%200%201%2046.24%200h2.06a8%208%200%200%200-.3%202.18v10.58L73.53%200H78z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`;
