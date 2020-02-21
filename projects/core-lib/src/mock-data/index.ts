import { getAllLolChampions } from './champions';

export default {
    GET: {
        'https://www.lolstats.com/api/rest/champions': {
            handler: getAllLolChampions
        }
    }
}