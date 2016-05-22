
export function debounce(handler, delay){

    return (function(_handler, _delay){

        var _timer;

        return function() {

            var args = arguments;

            if(_timer) {
                window.clearTimeout(_timer);
            }

            _timer = window.setTimeout(function() {
                _handler.apply(this, args);
            }, _delay);
        }

    })(handler, delay);

}
