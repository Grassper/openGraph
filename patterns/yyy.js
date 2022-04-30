import { defaultFill, defaultOpacity } from './_defaults';
import { unhex } from './_utils';

export const yyy = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2296%22%20viewBox%3D%220%200%2060%2096%22%3E%3Cpath%20d%3D%22M36%2010a6%206%200%200%201%2012%200v12a6%206%200%200%201-6%206%206%206%200%200%200-6%206%206%206%200%200%201-12%200%206%206%200%200%200-6-6%206%206%200%200%201-6-6V10a6%206%200%201%201%2012%200%206%206%200%200%200%2012%200zm24%2078a6%206%200%200%201-6-6%206%206%200%200%200-6-6%206%206%200%200%201-6-6V58a6%206%200%201%201%2012%200%206%206%200%200%200%206%206v24zM0%2088V64a6%206%200%200%200%206-6%206%206%200%200%201%2012%200v12a6%206%200%200%201-6%206%206%206%200%200%200-6%206%206%206%200%200%201-6%206z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`;
