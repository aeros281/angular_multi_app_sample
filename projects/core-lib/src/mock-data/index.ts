import { getAllLolChampions, getChampionInfo } from './champions';

export default {
    GET: {
        'https://www.lolstats.com/api/rest/champions': {
            handler: getAllLolChampions
        },
        'https://www.lolstats.com/api/rest/champions/details': {
            handler: getChampionInfo
        }
    }
}
