import { defaultFill, defaultOpacity } from './_defaults';
import { unhex } from './_utils';

export const connections = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%2236%22%20height%3D%2236%22%20viewBox%3D%220%200%2036%2036%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Econnections%3C%2Ftitle%3E%3Cpath%20d%3D%22M36%200H0v36h36V0zM15.126%202H2v13.126c.367.094.714.24%201.032.428L15.554%203.032c-.188-.318-.334-.665-.428-1.032zM18%204.874V18H4.874c-.094-.367-.24-.714-.428-1.032L16.968%204.446c.318.188.665.334%201.032.428zM22.874%202h11.712L20%2016.586V4.874c1.406-.362%202.512-1.468%202.874-2.874zm10.252%2018H20v13.126c.367.094.714.24%201.032.428l12.522-12.522c-.188-.318-.334-.665-.428-1.032zM36%2022.874V36H22.874c-.094-.367-.24-.714-.428-1.032l12.522-12.522c.318.188.665.334%201.032.428zm0-7.748V3.414L21.414%2018h11.712c.362-1.406%201.468-2.512%202.874-2.874zm-18%2018V21.414L3.414%2036h11.712c.362-1.406%201.468-2.512%202.874-2.874zM4.874%2020h11.712L2%2034.586V22.874c1.406-.362%202.512-1.468%202.874-2.874z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`;
