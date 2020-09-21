const _log = console.log;
console.log = function (...rest) {
    window.parent.postMessage({
            source: 'iframe',
            message: rest,
        },
        '*'
    );
    _log.apply(console, arguments);
}
