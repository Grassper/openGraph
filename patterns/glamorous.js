import { defaultFill, defaultOpacity } from './_defaults';
import { unhex } from './_utils';

export const glamorous = (fill = defaultFill, opacity = defaultOpacity) =>
  `url('data:image/svg+xml,%3Csvg%20width%3D%22180%22%20height%3D%22180%22%20viewBox%3D%220%200%20180%20180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Eglamorous%3C%2Ftitle%3E%3Cpath%20d%3D%22M81.28%2088H68.413l19.298%2019.298L81.279%2088zm2.107%200h13.226L90%20107.838%2083.387%2088zm15.334%200h12.865l-19.298%2019.298L98.721%2088zm-32.928-2.207L73.586%2078h32.828l.5.5%207.293%207.293L115.414%2087l-24.707%2024.707-.707.707L64.586%2087l1.207-1.207zm2.621.207L74%2080.414%2079.586%2086H68.414zm16%200L90%2080.414%2095.586%2086H84.414zm16%200L106%2080.414%20111.586%2086h-11.172zm-8-6h11.172L98%2085.586%2092.414%2080zM82%2085.586L87.586%2080H76.414L82%2085.586zM17.414%200L.707%2016.707%200%2017.414V0h17.414zM4.28%200L0%2012.838V0h4.28zm10.307%200L2.288%2012.298%206.388%200h8.198zM180%2017.414L162.586%200H180v17.414zM165.414%200l12.298%2012.298L173.612%200h-8.198zM180%2012.838L175.72%200H180v12.838zM0%20163H16.414l.5.5%207.293%207.293L25.414%20172l-8%208H0v-17zm0%2010h6.613l-2.334%207H0v-7zm14.586%207l7-7H8.72l-2.334%207h8.199zM0%20165.414L5.586%20171H0v-5.586zM10.414%20171L16%20165.414%2021.586%20171H10.414zm-8-6h11.172L8%20170.586%202.414%20165zM180%20163H163.586l-7.793%207.793-1.207%201.207%208%208H180v-17zm-14.586%2017l-7-7h12.865l2.334%207h-8.199zM180%20173h-6.613l2.334%207H180v-7zm-21.586-2l5.586-5.586%205.586%205.586h-11.172zM180%20165.414L174.414%20171H180v-5.586zm-8%205.172l5.586-5.586h-11.172l5.586%205.586zM152.933%2025.653l1.414%201.414-33.941%2033.942-1.415-1.415%2033.942-33.94zm1.414%20127.28l-1.414%201.414-33.942-33.941%201.415-1.415%2033.94%2033.942zm-127.28%201.414l-1.414-1.414%2033.941-33.942%201.415%201.415-33.942%2033.94zm-1.414-127.28l1.414-1.414L61.01%2059.594l-1.415%201.415-33.94-33.942zM0%2085c2.21%200%204%201.79%204%204s-1.79%204-4%204v-8zm180%200c-2.21%200-4%201.79-4%204s1.79%204%204%204v-8zM94%200c0%202.21-1.79%204-4%204s-4-1.79-4-4h8zm0%20180c0-2.21-1.79-4-4-4s-4%201.79-4%204h8z%22%20fill%3D%22%23${unhex(
    fill
  )}%22%20fill-opacity%3D%22${opacity}%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')`;
