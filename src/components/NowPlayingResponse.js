// Example usage:
//
// import { MyShape } from ./myShape.js;
//
// class MyComponent extends React.Component {
//   //
// }
//
// MyComponent.propTypes = {
//   input: MyShape
// };

import PropTypes from "prop-types";

let _NowPlayingResponse;
let _Dates;
let _Result;
const _OriginalLanguage = PropTypes.oneOfType(['en', 'fr', 'ja']);
_Result = PropTypes.shape({
    "adult": PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
    "backdrop_path": PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
    "genre_ids": PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.any]),
    "id": PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
    "original_language": PropTypes.oneOfType([_OriginalLanguage, PropTypes.any]),
    "original_title": PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
    "overview": PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
    "popularity": PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
    "poster_path": PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
    "release_date": PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
    "title": PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
    "video": PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
    "vote_average": PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
    "vote_count": PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
});
_Dates = PropTypes.shape({
    "maximum": PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
    "minimum": PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
});
_NowPlayingResponse = PropTypes.shape({
    "dates": PropTypes.oneOfType([_Dates, PropTypes.any]),
    "page": PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
    "results": PropTypes.oneOfType([PropTypes.arrayOf(_Result), PropTypes.any]),
    "total_pages": PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
    "total_results": PropTypes.oneOfType([PropTypes.number, PropTypes.any]),
});

export const NowPlayingResponse = _NowPlayingResponse;
