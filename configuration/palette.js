
import theme 	from './theme';
import themes 	from '../properties/themes';

const id = theme.get ();

export default themes.find (( palette ) => palette.id === id );